<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">ActionSheet</view>
      <view class="page__desc">弹出式菜单</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-button type="default" text="ActionSheet" @click="showIos" />
      <weui-button type="default" text="Android ActionSheet" @click="showAndroid" />
    </view>

    <weui-actionsheet
      v-model="iosVisible"
      title="这是一个标题，可以为一行或者两行。"
      :items="iosItems"
      @select="handleSelect"
      @cancel="handleCancel"
    />

    <weui-actionsheet
      v-model="androidVisible"
      skin="android"
      :items="androidItems"
      @select="handleSelect"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      iosVisible: false,
      androidVisible: false,
      iosItems: [
        { label: '示例菜单', value: 'menu' },
        { label: '示例菜单', tips: '副标题', value: 'tips' },
        { label: '负向菜单', type: 'warn', value: 'warn' },
      ],
      androidItems: ['示例菜单', '示例菜单', '示例菜单'],
    };
  },
  methods: {
    showIos() {
      this.iosVisible = true;
    },
    showAndroid() {
      this.androidVisible = true;
    },
    handleSelect(item) {
      const label = typeof item === 'string' ? item : item.label;
      uni.showToast({
        title: `点击${label}`,
        icon: 'none',
      });
    },
    handleCancel() {
      uni.showToast({
        title: '点击取消',
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
</style>
