<template>
  <view class="weui-grids">
    <slot />
  </view>
</template>

<script>
export default {
  name: 'WeuiGrid',
};
</script>

<style lang="scss">
.weui-grids {
  display: block;
  clear: both;
  background-color: var(--weui-BG-2);
}
</style>
