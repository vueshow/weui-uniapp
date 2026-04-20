<template>
  <view
    v-if="rendered"
    role="dialog"
    aria-modal="true"
    :aria-hidden="(!visible).toString()"
    :class="{
      'weui-skin_android': skin === 'android',
      'weui-actionsheet-wrap_show': visible,
    }"
  >
    <view class="weui-mask" @click="handleMaskClick" />
    <view
      class="weui-actionsheet"
      :class="{ 'weui-actionsheet_toggle': skin === 'ios' && visible }"
    >
      <view v-if="skin === 'ios' && (title || $slots.title)" class="weui-actionsheet__title">
        <slot name="title">
          <view class="weui-actionsheet__title-text">{{ title }}</view>
        </slot>
      </view>
      <view class="weui-actionsheet__menu">
        <slot>
          <view
            v-for="(item, index) in normalizedItems"
            :key="item.key"
            role="button"
            tabindex="0"
            class="weui-actionsheet__cell"
            :class="{
              'weui-actionsheet__cell_tips': item.tips,
              'weui-actionsheet__cell_warn': item.type === 'warn',
            }"
            @click="handleSelect(item.raw, index)"
          >
            {{ item.label }}
            <view v-if="item.tips" class="weui-actionsheet__cell__tips">{{ item.tips }}</view>
          </view>
        </slot>
      </view>
      <view v-if="skin === 'ios' && showCancel" class="weui-actionsheet__action">
        <slot name="action">
          <view role="button" tabindex="0" class="weui-actionsheet__cell" @click="handleCancel">
            {{ cancelText }}
          </view>
        </slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiActionsheet',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    closeOnSelect: {
      type: Boolean,
      default: true,
    },
    skin: {
      type: String,
      default: 'ios',
      validator: (value) => ['ios', 'android'].includes(value),
    },
  },
  emits: ['update:modelValue', 'select', 'cancel', 'close'],
  data() {
    return {
      rendered: this.modelValue,
      visible: this.modelValue,
      closeTimer: null,
    };
  },
  computed: {
    normalizedItems() {
      return this.items.map((item, index) => {
        if (typeof item === 'string') {
          return {
            key: `${item}-${index}`,
            label: item,
            tips: '',
            type: 'default',
            raw: item,
          };
        }

        return {
          key: item.value ?? item.label ?? index,
          label: item.label ?? '',
          tips: item.tips ?? '',
          type: item.type ?? 'default',
          raw: item,
        };
      });
    },
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(value) {
        if (value) {
          this.openWithTransition();
          return;
        }

        this.closeWithTransition();
      },
    },
  },
  beforeUnmount() {
    this.clearCloseTimer();
  },
  methods: {
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },
    openWithTransition() {
      this.clearCloseTimer();
      this.rendered = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.visible = true;
        }, 20);
      });
    },
    closeWithTransition() {
      this.visible = false;
      this.clearCloseTimer();
      this.closeTimer = setTimeout(() => {
        this.rendered = false;
        this.closeTimer = null;
      }, 300);
    },
    close() {
      this.$emit('update:modelValue', false);
      this.$emit('close');
    },
    handleSelect(item, index) {
      this.$emit('select', item, index);
      if (this.closeOnSelect) {
        this.close();
      }
    },
    handleCancel() {
      this.$emit('cancel');
      this.close();
    },
    handleMaskClick() {
      if (this.maskClosable) {
        this.close();
      }
    },
  },
};
</script>

<style>
.weui-actionsheet-wrap_show .weui-mask {
  opacity: 1;
}

.weui-actionsheet-wrap_show.weui-skin_android {
  opacity: 1;
}

.weui-mask {
  opacity: 0;
  transition: opacity 0.2s;
}

.weui-skin_android {
  opacity: 0;
  transition: opacity 0.2s;
}
</style>
