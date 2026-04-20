<template>
  <view class="weui-flex">
    <slot />
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiFlex',
};
</script>
