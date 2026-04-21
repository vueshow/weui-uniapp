<template>
  <view class="weui-panel" :class="{ 'weui-panel_access': access }">
    <view v-if="title || $slots.header" class="weui-panel__hd">
      <slot name="header">{{ title }}</slot>
    </view>
    <view v-if="$slots.default" class="weui-panel__bd">
      <slot />
    </view>
    <view v-if="$slots.footer" class="weui-panel__ft">
      <slot name="footer" />
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiPanel',
  props: {
    access: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
