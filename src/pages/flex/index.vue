<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Flex</view>
      <view class="page__desc">Flex布局</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-flex>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
      </weui-flex>
      <weui-flex>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
      </weui-flex>
      <weui-flex>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
      </weui-flex>
      <weui-flex>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
      </weui-flex>
      <weui-flex>
        <view><view class="placeholder placeholder_fixed">weui</view></view>
        <weui-flex-item><view class="placeholder">weui</view></weui-flex-item>
        <view><view class="placeholder placeholder_fixed">weui</view></view>
      </weui-flex>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style>
.page {
  min-height: 100vh;
  color: var(--weui-FG-0);
}

.page__hd {
  padding: 40px;
}

.page__title {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}

.page__desc {
  margin-top: 4px;
  color: var(--weui-FG-1);
  text-align: left;
  font-size: 14px;
}

.weui-flex {
  margin-bottom: 10px;
}

.placeholder {
  margin: 5px;
  padding: 0 10px;
  background-color: var(--weui-BG-1);
  color: var(--weui-FG-1);
  text-align: center;
  line-height: 2.3;
}

.placeholder_fixed {
  width: 80px;
}
</style>
