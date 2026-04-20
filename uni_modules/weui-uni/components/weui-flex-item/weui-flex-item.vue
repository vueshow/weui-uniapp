<template>
  <view class="weui-flex__item">
    <slot />
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiFlexItem',
};
</script>
