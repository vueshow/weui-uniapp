<template>
  <view class="weui-uni-page nav-page">
    <view class="hero">
      <view class="hero__title">WeUI UniApp 组件库</view>
      <view class="hero__desc">一个组件一个演示页面，便于逐步扩展和验收。</view>
    </view>

    <weui-cells title="基础组件" tips="先完善 button，其它组件按同样模式扩展">
      <weui-cell
        title="Button 按钮"
        label="类型、尺寸、状态、事件"
        value="查看"
        arrow
        clickable
        @click="goButton"
      />
    </weui-cells>
  </view>
</template>

<script>
export default {
  methods: {
    goButton() {
      uni.navigateTo({
        url: '/pages/button/index',
      })
    },
  },
}
</script>

<style>
.nav-page {
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 12px;
}

.hero {
  margin: 12px 16px 0;
  padding: 20px 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, #e6f7ef, #f4fbf7);
}

.hero__title {
  color: #0b5e36;
  font-size: 20px;
  font-weight: 600;
}

.hero__desc {
  margin-top: 8px;
  color: #2c6b4f;
  font-size: 14px;
  line-height: 1.5;
}
</style>
