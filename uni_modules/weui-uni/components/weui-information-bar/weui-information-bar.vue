<template>
  <view v-if="visible" role="alert" class="weui-information-bar" :class="barClass">
    <view v-if="showIcon || $slots.left" class="weui-information-bar__hd">
      <slot name="left">
        <text :class="icon" />
      </slot>
    </view>
    <view class="weui-information-bar__bd">
      <slot>{{ text }}</slot>
    </view>
    <view v-if="linkText || closeable || $slots.right" class="weui-information-bar__ft">
      <slot name="right">
        <text v-if="linkText" class="weui-link" @click.stop="handleLink">{{ linkText }}</text>
        <view v-if="closeable" class="weui-btn_icon" role="button" @click.stop="close">
          关闭
          <text class="weui-icon-close-thin" />
        </view>
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiInformationBar',
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'warn-strong',
      validator: (value) =>
        ['warn-strong', 'warn-weak', 'warn-no-color', 'tips-strong', 'tips-weak'].includes(value),
    },
    icon: {
      type: String,
      default: 'weui-icon-outlined-warn',
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    linkText: {
      type: String,
      default: '',
    },
    closeable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'close', 'link-click'],
  computed: {
    visible() {
      return this.modelValue;
    },
    barClass() {
      return `weui-information-bar_${this.type}`;
    },
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
      this.$emit('close');
    },
    handleLink() {
      this.$emit('link-click');
    },
  },
};
</script>

<style scoped>
.weui-information-bar {
  box-sizing: border-box;
}

.weui-btn_icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 24px;
  height: 24px;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
