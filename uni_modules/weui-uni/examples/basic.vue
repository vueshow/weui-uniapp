<template>
  <view class="weui-uni-page demo-page">
    <view class="demo-section">
      <weui-button text="主按钮" />
      <view class="demo-gap" />
      <weui-button text="普通按钮" type="default" />
      <view class="demo-gap" />
      <weui-button text="警告按钮" type="warn" />
    </view>

    <weui-cells title="列表" tips="这是一个 uni-app 组件库示例">
      <weui-cell title="标题文字" value="说明文字" arrow clickable @click="handleCellClick" />
      <weui-cell title="带描述" label="描述信息" />
      <weui-cell title="徽标">
        <template #value>
          <weui-badge text="8" />
        </template>
      </weui-cell>
    </weui-cells>

    <weui-loadmore no-more :loading="false" />
  </view>
</template>

<script>
export default {
  methods: {
    handleCellClick() {
      uni.showToast({
        title: '点击了 cell',
        icon: 'none',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-page {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 16px 0;
}

.demo-section {
  padding: 16px;
}

.demo-gap {
  height: 12px;
}
</style>
