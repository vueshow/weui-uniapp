<template>
  <view
    v-if="rendered"
    role="dialog"
    aria-modal="true"
    :aria-hidden="(!visible).toString()"
  >
    <view class="weui-mask weui-transition" :class="{ 'weui-transition_show': visible }" @click="handleMaskClick" />
    <view
      class="weui-half-screen-dialog weui-transition"
      :class="dialogClass"
    >
      <view class="weui-half-screen-dialog__hd">
        <template v-if="grab">
          <view class="weui-half-screen-dialog__hd__grab">
            <view class="weui-half-screen-dialog__slide-icon">
              <view class="weui-icon-arrow" />
            </view>
          </view>
          <view class="weui-half-screen-dialog__hd__nav">
            <slot name="header">
              <view class="weui-half-screen-dialog__hd__side">
                <button class="weui-btn_icon weui-wa-hotarea" hover-class="none" @click="close">
                  {{ closeText }}<text :class="closeIconClass" />
                </button>
              </view>
              <view class="weui-half-screen-dialog__hd__main">
                <strong class="weui-half-screen-dialog__title">{{ title }}</strong>
              </view>
              <view class="weui-half-screen-dialog__hd__side">
                <slot name="right" />
              </view>
            </slot>
          </view>
        </template>

        <slot v-else name="header">
          <view v-if="showClose || $slots.left" class="weui-half-screen-dialog__hd__side">
            <slot name="left">
              <button class="weui-btn_icon weui-wa-hotarea" hover-class="none" @click="close">
                {{ closeText }}<text :class="closeIconClass" />
              </button>
            </slot>
          </view>
          <view class="weui-half-screen-dialog__hd__main">
            <slot name="title">
              <strong v-if="title" class="weui-half-screen-dialog__title">{{ title }}</strong>
              <span v-if="subtitle" class="weui-half-screen-dialog__subtitle">{{ subtitle }}</span>
            </slot>
          </view>
          <view v-if="$slots.right" class="weui-half-screen-dialog__hd__side">
            <slot name="right" />
          </view>
        </slot>
      </view>

      <view class="weui-half-screen-dialog__bd" :class="{ 'weui-bottom-fixed-opr-page__content': bottomFixed }">
        <slot />
      </view>

      <view
        v-if="actions.length || attachment || $slots.footer || $slots.attachment"
        class="weui-half-screen-dialog__ft"
        :class="{ 'weui-bottom-fixed-opr-page__tool': bottomFixed }"
      >
        <slot name="footer">
          <view v-if="actions.length" class="weui-half-screen-dialog__btn-area">
            <button
              v-for="(action, index) in actions"
              :key="action.text || index"
              class="weui-btn"
              :class="getActionClass(action)"
              :disabled="Boolean(action.disabled)"
              hover-class="weui-btn_active"
              @click="handleAction(action, index)"
            >
              {{ action.text }}
            </button>
          </view>
          <view v-if="attachment || $slots.attachment" class="weui-half-screen-dialog__attachment-area">
            <slot name="attachment">
              <text class="weui-link" @click="handleAttachment">{{ attachment }}</text>
            </slot>
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
  name: 'WeuiHalfScreenDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    attachment: {
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
    closeIcon: {
      type: String,
      default: 'close-thin',
      validator: (value) => ['close-thin', 'slide-down', 'back-arrow-thin'].includes(value),
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    large: {
      type: Boolean,
      default: false,
    },
    grab: {
      type: Boolean,
      default: false,
    },
    bottomFixed: {
      type: Boolean,
      default: false,
    },
    buttonWrap: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'close', 'action-click', 'attachment-click'],
  data() {
    return {
      rendered: this.modelValue,
      visible: this.modelValue,
      closeTimer: null,
    };
  },
  computed: {
    dialogClass() {
      return {
        'weui-transition_show': this.visible,
        'weui-half-screen-dialog_show': this.visible,
        'weui-half-screen-dialog_large': this.large,
        'weui-half-screen-dialog_grab': this.grab,
        'weui-bottom-fixed-opr-page': this.bottomFixed,
        'weui-half-screen-dialog_btn-wrap': this.buttonWrap,
      };
    },
    closeIconClass() {
      return `weui-icon-${this.closeIcon}`;
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
    handleMaskClick() {
      if (this.maskClosable) {
        this.close();
      }
    },
    handleAction(action, index) {
      if (action.disabled) {
        return;
      }
      this.$emit('action-click', action, index);
      if (action.close !== false) {
        this.close();
      }
    },
    handleAttachment() {
      this.$emit('attachment-click');
    },
    getActionClass(action) {
      return [
        `weui-btn_${action.type || 'primary'}`,
        {
          'weui-btn_disabled': Boolean(action.disabled),
        },
      ];
    },
  },
};
</script>

<style scoped>
.weui-mask {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s;
}

.weui-mask.weui-transition_show {
  opacity: 1;
  visibility: visible;
}

.weui-btn::after,
.weui-btn_icon::after {
  border: 0;
}

.weui-half-screen-dialog__hd__action {
  flex-shrink: 0;
  white-space: nowrap;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
