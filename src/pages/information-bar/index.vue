<template>
  <view class="page information-bar">
    <view class="page__hd">
      <view class="page__title">Information Bar</view>
      <view class="page__desc">信息提示条</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-information-bar
        v-model="bars.warnStrong"
        type="warn-strong"
        text="信息提示 warn strong"
        link-text="详情"
        closeable
        @link-click="showDetail"
      />
      <weui-information-bar
        v-model="bars.warnWeak"
        type="warn-weak"
        text="信息提示 warn weak"
        link-text="详情"
        closeable
        @link-click="showDetail"
      />
      <weui-information-bar
        v-model="bars.warnNoColor"
        type="warn-no-color"
        text="信息提示 warn no color"
        link-text="详情"
        closeable
        @link-click="showDetail"
      />
      <weui-information-bar
        v-model="bars.tipsStrong"
        type="tips-strong"
        text="信息提示 tips strong"
        link-text="详情"
        closeable
        @link-click="showDetail"
      />
      <weui-information-bar
        v-model="bars.tipsWeak"
        type="tips-weak"
        text="信息提示 tips weak"
        link-text="详情"
        closeable
        @link-click="showDetail"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bars: {
        warnStrong: true,
        warnWeak: true,
        warnNoColor: true,
        tipsStrong: true,
        tipsWeak: true,
      },
    };
  },
  methods: {
    showDetail() {
      uni.showToast({
        title: '详情',
        icon: 'none',
      });
    },
  },
};
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

.page.information-bar .weui-information-bar {
  position: static;
  margin-bottom: 20px;
}

.weui-btn_icon::after {
  border: 0;
}
</style>
