<template>
  <view
    v-if="rendered"
    role="dialog"
    aria-modal="true"
    :aria-hidden="(!opened).toString()"
    class="weui-picker-wrap"
  >
    <view class="weui-mask" :class="maskClass" @click="handleMaskClick" />
    <view class="weui-half-screen-dialog weui-picker" :class="pickerClass" tabindex="-1">
      <view class="weui-half-screen-dialog__hd" @touchmove.stop.prevent>
        <view v-if="showClose" class="weui-half-screen-dialog__hd__side">
          <button class="weui-btn_icon weui-wa-hotarea" @click="handleCancel">
            {{ closeText }}
            <text class="weui-icon-close-thin" />
          </button>
        </view>
        <view class="weui-half-screen-dialog__hd__main">
          <strong class="weui-half-screen-dialog__title">{{ title }}</strong>
          <text v-if="desc" class="weui-half-screen-dialog__subtitle">{{ desc }}</text>
        </view>
      </view>
      <view class="weui-half-screen-dialog__bd">
        <view class="weui-picker__bd">
          <view
            v-for="(column, columnIndex) in columns"
            :key="columnIndex"
            class="weui-picker__group"
            role="listbox"
            tabindex="0"
          >
            <view class="weui-picker__mask" />
            <view class="weui-picker__indicator" />
            <view
              class="weui-picker__content"
              :class="{
                'weui-picker__content_dragging': dragState && dragState.columnIndex === columnIndex,
              }"
              :style="getContentStyle(columnIndex)"
              @mousedown="handleDragStart(columnIndex, $event)"
              @mousemove="handleDragMove"
              @mouseup="handleDragEnd"
              @mouseleave="handleDragEnd"
              @touchstart="handleDragStart(columnIndex, $event)"
              @touchmove.stop.prevent="handleDragMove"
              @touchend="handleDragEnd"
              @touchcancel="handleDragEnd"
            >
              <view
                v-for="(item, index) in column"
                :key="item.key"
                role="option"
                title="按住上下可调"
                tabindex="0"
                class="weui-picker__item"
                :class="{ 'weui-picker__item_disabled': item.disabled }"
                :aria-hidden="(Number(draftValue[columnIndex] || 0) !== index).toString()"
                @click="handleItemClick(columnIndex, index)"
              >
                {{ item.label }}
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="weui-half-screen-dialog__ft" @touchmove.stop.prevent>
        <view id="weui-picker-aria-content" class="weui-hidden_abs" />
        <view
          id="weui-picker-confirm"
          class="weui-btn weui-btn_primary weui-picker__btn"
          :class="{ 'weui-btn_disabled': selectedDisabled }"
          data-action="select"
          role="button"
          @click="handleConfirm"
        >
          {{ confirmText }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const pad = (value) => `${value}`.padStart(2, '0');

export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiPicker',
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'selector',
      validator: (value) => ['selector', 'multiSelector', 'date'].includes(value),
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: '关闭',
    },
    range: {
      type: Array,
      default: () => [],
    },
    rangeKey: {
      type: String,
      default: '',
    },
    start: {
      type: [String, Number],
      default: 1990,
    },
    end: {
      type: [String, Number],
      default: () => new Date().getFullYear(),
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue', 'update:visible', 'change', 'confirm', 'cancel', 'close'],
  data() {
    return {
      rendered: this.visible,
      opened: this.visible,
      animating: false,
      draftValue: this.getInitialValue(),
      dragState: null,
      closeTimer: null,
    };
  },
  computed: {
    columns() {
      if (this.mode === 'date') {
        return this.dateColumns;
      }

      if (this.mode === 'multiSelector') {
        return this.range.map((column, columnIndex) => this.normalizeColumn(column, columnIndex));
      }

      return [this.normalizeColumn(this.range, 0)];
    },
    dateColumns() {
      const startYear = Number(`${this.start}`.slice(0, 4)) || 1990;
      const endYear = Number(`${this.end}`.slice(0, 4)) || new Date().getFullYear();
      const yearIndex = Number(this.draftValue?.[0] || 0);
      const monthIndex = Number(this.draftValue?.[1] || 0);
      const year = startYear + yearIndex;
      const month = monthIndex + 1;
      const dayCount = new Date(year, month, 0).getDate();

      return [
        Array.from({ length: endYear - startYear + 1 }, (_, index) => ({
          key: `year-${startYear + index}`,
          label: `${startYear + index}年`,
          value: startYear + index,
          raw: startYear + index,
          disabled: false,
        })),
        Array.from({ length: 12 }, (_, index) => ({
          key: `month-${index + 1}`,
          label: `${index + 1}月`,
          value: index + 1,
          raw: index + 1,
          disabled: false,
        })),
        Array.from({ length: dayCount }, (_, index) => ({
          key: `day-${index + 1}`,
          label: `${index + 1}日`,
          value: index + 1,
          raw: index + 1,
          disabled: false,
        })),
      ];
    },
    selectedDisabled() {
      return this.draftValue.some((index, columnIndex) => {
        const item = this.columns[columnIndex]?.[Number(index)];
        return Boolean(item?.disabled);
      });
    },
    maskClass() {
      if (!this.animating) {
        return '';
      }

      return this.opened ? 'weui-animate-fade-in' : 'weui-animate-fade-out';
    },
    pickerClass() {
      if (!this.animating) {
        return '';
      }

      return this.opened ? 'weui-animate-slide-up' : 'weui-animate-slide-down';
    },
  },
  watch: {
    visible: {
      immediate: true,
      handler(value) {
        if (value) {
          this.openWithTransition();
          return;
        }

        this.closeWithTransition();
      },
    },
    modelValue() {
      if (!this.opened) {
        this.draftValue = this.getInitialValue();
      }
    },
  },
  beforeUnmount() {
    this.clearCloseTimer();
  },
  methods: {
    normalizeColumn(column, columnIndex) {
      const list = Array.isArray(column) ? column : [];
      return list.map((item, index) => {
        if (item && typeof item === 'object') {
          const label = item[this.rangeKey || 'label'] ?? item.value ?? '';
          return {
            key: item.value ?? label ?? `${columnIndex}-${index}`,
            label,
            value: item.value ?? index,
            raw: item,
            disabled: Boolean(item.disabled),
          };
        }

        return {
          key: `${item}-${columnIndex}-${index}`,
          label: item,
          value: index,
          raw: item,
          disabled: false,
        };
      });
    },
    getInitialValue() {
      if (this.mode === 'date') {
        const value =
          this.modelValue ||
          `${new Date().getFullYear()}-${pad(new Date().getMonth() + 1)}-${pad(new Date().getDate())}`;
        const [year, month, day] = `${value}`.split('-').map((item) => Number(item));
        const startYear = Number(`${this.start}`.slice(0, 4)) || 1990;
        const endYear = Number(`${this.end}`.slice(0, 4)) || new Date().getFullYear();
        const safeYear = Math.min(endYear, Math.max(startYear, year || startYear));
        return [
          Math.max(0, safeYear - startYear),
          Math.max(0, (month || 1) - 1),
          Math.max(0, (day || 1) - 1),
        ];
      }

      if (this.mode === 'multiSelector') {
        return Array.isArray(this.modelValue) && this.modelValue.length
          ? this.modelValue.map((item) => Number(item) || 0)
          : this.range.map(() => 0);
      }

      return [Number(this.modelValue) || 0];
    },
    getResult() {
      if (this.mode === 'date') {
        const startYear = Number(`${this.start}`.slice(0, 4)) || 1990;
        const year = startYear + Number(this.draftValue[0] || 0);
        const month = Number(this.draftValue[1] || 0) + 1;
        const day = Number(this.draftValue[2] || 0) + 1;
        return {
          value: `${year}-${pad(month)}-${pad(day)}`,
          items: [
            { label: `${year}年`, value: year },
            { label: `${month}月`, value: month },
            { label: `${day}日`, value: day },
          ],
        };
      }

      const items = this.draftValue.map(
        (index, columnIndex) => this.columns[columnIndex]?.[Number(index)],
      );

      return {
        value: this.mode === 'multiSelector' ? [...this.draftValue] : this.draftValue[0],
        items: items.map((item) => item?.raw ?? item),
      };
    },
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },
    openWithTransition() {
      this.clearCloseTimer();
      this.rendered = true;
      this.opened = false;
      this.animating = false;
      this.draftValue = this.getInitialValue();
      this.$nextTick(() => {
        // #ifdef H5
        requestAnimationFrame(() => {
          this.animating = true;
          this.opened = true;
        });
        // #endif
        // #ifndef H5
        setTimeout(() => {
          this.animating = true;
          this.opened = true;
        }, 17);
        // #endif
      });
    },
    closeWithTransition() {
      if (!this.rendered) {
        return;
      }

      this.animating = true;
      this.opened = false;
      this.clearCloseTimer();
      this.closeTimer = setTimeout(() => {
        this.rendered = false;
        this.animating = false;
        this.closeTimer = null;
      }, 300);
    },
    close() {
      this.$emit('update:visible', false);
      this.$emit('close');
    },
    setColumnValue(columnIndex, index) {
      const nextValue = [...this.draftValue];
      nextValue[columnIndex] = this.getSelectableIndex(columnIndex, index);
      this.draftValue = nextValue;
    },
    getSelectableIndex(columnIndex, index, direction = 1) {
      const maxIndex = Math.max(0, (this.columns[columnIndex]?.length || 1) - 1);
      let safeIndex = Math.min(maxIndex, Math.max(0, Number(index) || 0));
      let guard = 0;

      while (this.columns[columnIndex]?.[safeIndex]?.disabled && guard <= maxIndex) {
        safeIndex += direction >= 0 ? 1 : -1;
        if (safeIndex > maxIndex) {
          safeIndex = maxIndex;
          direction = -1;
        }
        if (safeIndex < 0) {
          safeIndex = 0;
          direction = 1;
        }
        guard += 1;
      }

      return safeIndex;
    },
    getTranslateByIndex(index) {
      return (2 - Number(index || 0)) * 56;
    },
    getEventY(event) {
      return Number(
        event?.changedTouches?.[0]?.pageY ?? event?.touches?.[0]?.pageY ?? event?.pageY ?? 0,
      );
    },
    getContentStyle(columnIndex) {
      const selectedIndex = Number(this.draftValue[columnIndex] || 0);
      let translateY = this.getTranslateByIndex(selectedIndex);

      if (this.dragState && this.dragState.columnIndex === columnIndex) {
        translateY = this.dragState.translateY;
      }

      return {
        transform: `translate3d(0, ${translateY}px, 0)`,
        '-webkit-transform': `translate3d(0, ${translateY}px, 0)`,
      };
    },
    handleDragStart(columnIndex, event) {
      const selectedIndex = Number(this.draftValue[columnIndex] || 0);
      const pageY = this.getEventY(event);
      this.dragState = {
        columnIndex,
        startY: pageY,
        lastY: pageY,
        lastTime: Date.now(),
        startTranslateY: this.getTranslateByIndex(selectedIndex),
        translateY: this.getTranslateByIndex(selectedIndex),
        history: [{ time: Date.now(), y: pageY }],
      };
    },
    handleDragMove(event) {
      if (!this.dragState) {
        return;
      }

      const deltaY = this.getEventY(event) - this.dragState.startY;
      const column = this.columns[this.dragState.columnIndex] || [];
      const maxTranslate = this.getTranslateByIndex(0);
      const minTranslate = this.getTranslateByIndex(Math.max(0, column.length - 1));
      const translateY = Math.max(
        minTranslate,
        Math.min(maxTranslate, this.dragState.startTranslateY + deltaY),
      );
      const nextIndex = this.getSelectableIndex(
        this.dragState.columnIndex,
        Math.round(2 - translateY / 56),
        deltaY >= 0 ? -1 : 1,
      );
      const nextValue = [...this.draftValue];

      this.dragState.translateY = translateY;
      this.dragState.lastY = this.getEventY(event);
      this.dragState.lastTime = Date.now();
      this.dragState.history.push({ time: this.dragState.lastTime, y: this.dragState.lastY });
      if (this.dragState.history.length > 40) {
        this.dragState.history.shift();
      }
      if (nextValue[this.dragState.columnIndex] !== nextIndex) {
        nextValue[this.dragState.columnIndex] = nextIndex;
        this.draftValue = nextValue;
        this.$emit('change', this.getResult(), event);
      }
    },
    handleDragEnd(event) {
      if (!this.dragState) {
        return;
      }

      const columnIndex = this.dragState.columnIndex;
      const history = this.dragState.history;
      const last = history[history.length - 1];
      let inertia = 0;

      for (let index = history.length - 1; index >= 0; index -= 1) {
        if (last.time - history[index].time > 100) {
          const duration = Math.max(1, last.time - history[index].time);
          const distance = last.y - history[index].y;
          inertia = 150 * (distance / duration);
          break;
        }
      }

      const projectedTranslateY = this.dragState.translateY + inertia;
      const nextIndex = this.getSelectableIndex(
        columnIndex,
        Math.round(2 - projectedTranslateY / 56),
        projectedTranslateY >= this.dragState.startTranslateY ? -1 : 1,
      );

      this.dragState = null;
      this.setColumnValue(columnIndex, nextIndex);
      this.$emit('change', this.getResult(), event);
    },
    handleConfirm() {
      if (this.selectedDisabled) {
        return;
      }

      const result = this.getResult();
      this.$emit('update:modelValue', result.value);
      this.$emit('confirm', result);
      this.close();
    },
    handleCancel() {
      this.$emit('cancel');
      this.close();
    },
    handleMaskClick() {
      if (this.maskClosable) {
        this.handleCancel();
      }
    },
    handleItemClick(columnIndex, index) {
      this.setColumnValue(columnIndex, index);
      this.$emit('change', this.getResult());
    },
  },
};
</script>

<style>
.weui-picker__mask {
  pointer-events: none;
}

.weui-picker .weui-picker__bd {
  height: 280px;
}

.weui-picker .weui-picker__indicator {
  top: 112px;
  height: 56px;
}

.weui-picker__content {
  transition: transform 0.3s;
  will-change: transform;
  cursor: grab;
}

.weui-picker__content_dragging {
  transition: none;
  cursor: grabbing;
}

.weui-picker .weui-half-screen-dialog__bd {
  overflow: visible;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
