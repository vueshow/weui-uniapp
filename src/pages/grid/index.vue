<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Grid</view>
      <view class="page__desc">九宫格</view>
    </view>
    <weui-grid>
      <weui-grid-item
        v-for="item in items"
        :key="item"
        label="Grid"
        icon="/static/logo.png"
        @click="handleClick(item)"
      />
    </weui-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: Array.from({ length: 9 }, (_, index) => index + 1),
    };
  },
  methods: {
    handleClick(index) {
      uni.showToast({
        title: `Grid ${index}`,
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
