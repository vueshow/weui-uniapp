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
      <text
        v-if="loading && !nativeLoading"
        class="weui-mask-loading"
        :class="{ 'weui-mask-loading_only': !hasInnerContent }"
      />
      <slot>{{ text }}</slot>
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
@import '../../styles/mp.scss';
/* #endif */
</style>
