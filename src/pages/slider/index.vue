<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Slider</view>
      <view class="page__desc">滑块</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-slider v-model="disabledValue" disabled />
      <view class="slider-space" />
      <weui-slider v-model="value" show-value @change="handleChange" />
      <view class="slider-space" />
      <weui-slider v-model="stepValue" :step="10" show-value @change="handleStepChange" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      disabledValue: 0,
      value: 50,
      stepValue: 30,
    };
  },
  methods: {
    handleChange(value) {
      uni.showToast({
        title: `当前值: ${value}`,
        icon: 'none',
      });
    },
    handleStepChange(value) {
      uni.showToast({
        title: `步进值: ${value}`,
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

.slider-space {
  height: 20px;
}
</style>
