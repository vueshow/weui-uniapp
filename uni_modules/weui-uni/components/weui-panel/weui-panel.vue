<template>
  <view class="weui-panel">
    <view v-if="title || $slots.header" class="weui-panel__hd">
      <slot name="header">{{ title }}</slot>
    </view>
    <slot />
  </view>
</template>

<script>
export default {
  name: 'WeuiPanel',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
