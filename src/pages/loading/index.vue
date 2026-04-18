<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Loading</view>
      <view class="page__desc">正在加载</view>
    </view>
    <view class="page__bd">
      <view class="loading_demo">
        <weui-loading type="loading" />
        <weui-loading type="mask" />
        <weui-loading type="mask" color="var(--weui-BRAND)" />
        <weui-loading type="mask" color="#ededed" />
      </view>
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

.loading_demo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 40px;
}

.loading_demo .weui-loading-wrap {
  margin: 0 5px;
}
</style>
