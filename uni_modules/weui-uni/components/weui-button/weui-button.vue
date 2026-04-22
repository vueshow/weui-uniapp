<template>
  <button
    class="weui-btn"
    :class="buttonClass"
    :disabled="disabled"
    :loading="nativeLoading"
    :open-type="openType"
    :form-type="formType"
    :hover-class="hoverClass"
    @click="handleClick"
  >
    <view class="weui-btn__inner">
      <view class="weui-btn__text">
        <view
          v-if="loading && !nativeLoading"
          class="weui-mask-loading"
          :class="{ 'weui-mask-loading_only': !hasInnerContent }"
        />
        <slot>{{ text }}</slot>
      </view>
    </view>
  </button>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'default', 'warn'].includes(value),
    },
    size: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'medium', 'mini', 'xmini'].includes(value),
    },
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    nativeLoading: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    openType: {
      type: String,
      default: '',
    },
    formType: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  computed: {
    buttonClass() {
      const sizeClass = this.size !== 'default' ? `weui-btn_${this.size}` : '';
      return [
        `weui-btn_${this.type}`,
        sizeClass,
        {
          'weui-btn_block': this.block,
          'weui-btn_disabled': this.disabled,
          'weui-btn_loading': this.loading,
          'weui-btn_inline': this.inline && !this.block,
          'weui-btn_overlay': this.overlay,
        },
      ];
    },
    hasInnerContent() {
      return Boolean(this.text) || Boolean(this.$slots.default);
    },
    hoverClass() {
      if (this.disabled || this.loading) {
        return 'none';
      }
      return 'weui-btn_active';
    },
  },
  methods: {
    handleClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      this.$emit('click', event);
    },
  },
};
</script>

<style scoped>
.weui-btn::after {
  border: 0 !important;
}
</style>
<style></style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/theme.scss';

.weui-btn {
  @include weui-theme-vars;
  position: relative;
  display: block;
  min-width: 184px;
  max-width: 280px;
  width: -webkit-fit-content;
  width: fit-content;
  margin: 16px auto 0;
  padding: 12px 24px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  line-height: 1.41176471;
  border-radius: 8px;
  border: 0;
  cursor: default;
  user-select: none;
}

.weui-btn__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.weui-btn__text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  word-wrap: break-word;
}

.weui-btn_primary {
  color: #fff;
  background-color: #07c160;
}

.weui-btn_default {
  color: rgba(0, 0, 0, 0.9);
  background-color: rgba(0, 0, 0, 0.05);
}

.weui-btn_warn {
  color: #fff;
  background-color: #fa5151;
}

.weui-btn_active {
  opacity: 0.82;
}

.weui-btn_disabled,
.weui-btn[disabled] {
  color: rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.05);
}

.weui-btn_block {
  width: auto;
  margin-right: 16px;
  margin-left: 16px;
}

.weui-btn_inline,
.weui-btn_mini,
.weui-btn_xmini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: 0;
}

.weui-btn_medium {
  font-size: 14px;
  padding: 10px 24px;
}

.weui-btn_mini {
  min-width: 0;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
}

.weui-btn_xmini {
  min-width: 0;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
}

.weui-btn_overlay.weui-btn_primary {
  color: rgba(0, 0, 0, 0.9);
  background-color: #fff;
}

.weui-btn_overlay.weui-btn_default {
  color: #fff;
  background-color: rgba(247, 247, 247, 0.3);
}

.weui-btn_overlay.weui-btn_warn {
  color: #fff;
  background-color: #fa5151;
}

.weui-btn_loading {
  color: rgba(255, 255, 255, 0.72);
}

.weui-btn_loading.weui-btn_default {
  color: rgba(0, 0, 0, 0.3);
}

.weui-btn_loading .weui-mask-loading {
  margin-right: 8px;
}

.weui-mask-loading,
.weui-loading,
.weui-primary-loading {
  display: inline-block;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  color: currentColor;
  vertical-align: middle;
  animation: weuiLoading 1s linear infinite;
}

.weui-primary-loading {
  color: rgba(0, 0, 0, 0.55);
}

.weui-primary-loading_brand {
  color: #07c160;
}

.weui-primary-loading_transparent,
.weui-loading_transparent {
  color: #fff;
}

.weui-primary-loading__dot {
  display: none;
}

@keyframes weuiLoading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.weui-btn::after,
.weui-btn_icon::after {
  border: 0;
}
/* #endif */
</style>
