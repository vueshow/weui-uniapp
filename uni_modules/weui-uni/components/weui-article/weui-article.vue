<template>
  <view class="weui-article">
    <slot />
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiArticle',
};
</script>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
