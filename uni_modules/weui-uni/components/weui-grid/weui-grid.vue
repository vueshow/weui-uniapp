<template>
  <view class="weui-grids">
    <slot />
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiGrid',
};
</script>

<style lang="scss">
.weui-grids {
  display: block;
  clear: both;
  background-color: #fff;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
