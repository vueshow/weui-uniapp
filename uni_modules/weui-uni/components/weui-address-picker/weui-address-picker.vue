<template>
  <view
    v-if="rendered"
    role="dialog"
    aria-modal="true"
    :aria-hidden="(!opened).toString()"
    class="weui-picker-wrap"
  >
    <view
      class="weui-mask"
      :class="maskClass"
      @click="handleMaskClick"
    />
    <view
      class="weui-half-screen-dialog weui-picker"
      :class="pickerClass"
      tabindex="-1"
    >
      <view class="weui-half-screen-dialog__hd" @touchmove.stop.prevent>
        <view v-if="showClose" class="weui-half-screen-dialog__hd__side">
          <button class="weui-btn_icon weui-wa-hotarea" @click="handleCancel">
            {{ closeText }}<text class="weui-icon-close-thin" />
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
              :class="{ 'weui-picker__content_dragging': dragState && dragState.columnIndex === columnIndex }"
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
              <view v-if="column.length === 0" class="weui-picker__item">
                {{ placeholder }}
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
import chinaData from './china.json';

export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiAddressPicker',
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    visible: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: null,
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
    confirmText: {
      type: String,
      default: '确定',
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    valueKey: {
      type: String,
      default: 'code',
    },
    labelKey: {
      type: String,
      default: 'name',
    },
    childrenKey: {
      type: String,
      default: 'children',
    },
  },
  emits: ['update:modelValue', 'update:visible', 'change', 'confirm', 'cancel', 'close'],
  data() {
    return {
      rendered: this.visible,
      opened: this.visible,
      animating: false,
      levelCount: this.computeLevelCount(this.resolvedOptions),
      draftValue: [],
      dragState: null,
      closeTimer: null,
    };
  },
  created() {
    this.draftValue = this.getInitialDraftValue();
  },
  computed: {
    resolvedOptions() {
      return this.options || chinaData;
    },
    columns() {
      const result = [];
      let currentLevel = this.resolvedOptions;

      for (let level = 0; level < this.levelCount; level++) {
        result.push(this.normalizeColumn(currentLevel, level));
        const selectedIndex = Number(this.draftValue[level] || 0);
        const selectedItem = currentLevel[selectedIndex];
        currentLevel = selectedItem?.[this.childrenKey] || [];
      }

      return result;
    },
    selectedDisabled() {
      return this.draftValue.some((index, columnIndex) => {
        const item = this.columns[columnIndex]?.[Number(index)];
        return Boolean(item?.disabled);
      });
    },
    maskClass() {
      if (!this.animating) return '';
      return this.opened ? 'weui-animate-fade-in' : 'weui-animate-fade-out';
    },
    pickerClass() {
      if (!this.animating) return '';
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
        this.draftValue = this.getInitialDraftValue();
      }
    },
    options: {
      deep: true,
      handler() {
        this.levelCount = this.computeLevelCount(this.resolvedOptions);
        if (!this.opened) {
          this.draftValue = this.getInitialDraftValue();
        }
      },
    },
  },
  beforeUnmount() {
    this.clearCloseTimer();
  },
  methods: {
    computeLevelCount(nodes) {
      if (!Array.isArray(nodes) || nodes.length === 0) return 1;
      let maxDepth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const children = nodes[i]?.[this.childrenKey];
        if (Array.isArray(children) && children.length > 0) {
          maxDepth = Math.max(maxDepth, 1 + this.computeLevelCount(children));
        }
      }
      return maxDepth;
    },
    normalizeColumn(items, columnIndex) {
      const list = Array.isArray(items) ? items : [];
      return list.map((item, index) => {
        if (item && typeof item === 'object') {
          const label = item[this.labelKey] ?? item[this.valueKey] ?? '';
          return {
            key: item[this.valueKey] ?? label ?? `${columnIndex}-${index}`,
            label,
            value: item[this.valueKey] ?? index,
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
    getInitialDraftValue() {
      if (!Array.isArray(this.modelValue) || this.modelValue.length === 0) {
        return Array.from({ length: this.levelCount }, () => 0);
      }

      const indices = [];
      let currentLevel = this.resolvedOptions;

      for (let level = 0; level < this.modelValue.length; level++) {
        const targetValue = this.modelValue[level];
        const index = currentLevel.findIndex(
          (item) => item[this.valueKey] === targetValue,
        );
        indices.push(index >= 0 ? index : 0);
        currentLevel = (index >= 0 && currentLevel[index]) ? currentLevel[index][this.childrenKey] || [] : [];
      }

      while (indices.length < this.levelCount) {
        indices.push(0);
      }

      return indices;
    },
    getResult() {
      const items = [];
      const values = [];
      let currentLevel = this.resolvedOptions;

      for (let level = 0; level < this.levelCount; level++) {
        const index = Number(this.draftValue[level] || 0);
        const columnData = this.columns[level] || [];
        const item = columnData[index];
        items.push(item?.raw ?? item);
        values.push(item?.value ?? index);
        const rawItem = currentLevel[index];
        currentLevel = rawItem?.[this.childrenKey] || [];
      }

      return {
        value: values,
        items,
        labels: items.map((item) => item?.[this.labelKey] ?? item?.label ?? '').filter(Boolean),
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
      this.levelCount = this.computeLevelCount(this.resolvedOptions);
      this.draftValue = this.getInitialDraftValue();
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          this.animating = true;
          this.opened = true;
        });
      });
    },
    closeWithTransition() {
      if (!this.rendered) return;
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
      for (let i = columnIndex + 1; i < this.levelCount; i++) {
        nextValue[i] = 0;
      }
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
      return Number(event?.changedTouches?.[0]?.pageY ?? event?.touches?.[0]?.pageY ?? event?.pageY ?? 0);
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
      if (!this.dragState) return;

      const deltaY = this.getEventY(event) - this.dragState.startY;
      const column = this.columns[this.dragState.columnIndex] || [];
      const maxTranslate = this.getTranslateByIndex(0);
      const minTranslate = this.getTranslateByIndex(Math.max(0, column.length - 1));
      const translateY = Math.max(minTranslate, Math.min(maxTranslate, this.dragState.startTranslateY + deltaY));
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
        for (let i = this.dragState.columnIndex + 1; i < this.levelCount; i++) {
          nextValue[i] = 0;
        }
        this.draftValue = nextValue;
        this.$emit('change', this.getResult(), event);
      }
    },
    handleDragEnd(event) {
      if (!this.dragState) return;

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
      if (this.selectedDisabled) return;
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
      if (this.maskClosable) this.handleCancel();
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
