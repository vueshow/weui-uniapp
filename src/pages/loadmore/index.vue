<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Loadmore</view>
      <view class="page__desc">加载更多</view>
    </view>

    <view class="page__bd">
      <weui-loadmore />
      <weui-loadmore :loading="false" line empty />
      <weui-loadmore :loading="false" dot no-more />
      <weui-loadmore :loading="false" text="加载更多" />
      <weui-loadmore :loading="false" line text="没有更多了" />
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

.page__bd {
  padding-top: 24px;
}
</style>
