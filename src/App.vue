<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
/* #ifdef MP */
@import '../uni_modules/weui-uni/styles/mp.scss';
/* #endif */

/* #ifndef MP */
@import '../uni_modules/weui-uni/styles/index.scss';
/* #endif */
</style>
