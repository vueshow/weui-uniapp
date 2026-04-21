<template>
  <view class="page">
    <view class="weui-msg">
      <view class="weui-msg__icon-area">
        <text class="weui-icon-success weui-icon_msg" />
      </view>
      <view class="weui-msg__text-area">
        <view class="weui-msg__title">操作成功</view>
        <view class="weui-msg__desc">
          内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
          <text class="weui-wa-hotarea weui-link">文字链接</text>
        </view>
        <view class="weui-msg__custom-area">
          <weui-list-tips :items="tips" />
        </view>
      </view>
      <view class="weui-msg__opr-area">
        <view class="weui-btn-area">
          <button
            class="weui-btn weui-btn_primary"
            hover-class="weui-btn_active"
            @click="handleAction"
          >
            推荐操作
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tips: ['列表提示项', '列表提示项', '列表提示项'],
    };
  },
  methods: {
    handleAction() {
      uni.showToast({
        title: '推荐操作',
        icon: 'none',
      });
    },
  },
};
</script>

<style>
.page {
  min-height: 100vh;
  background-color: var(--weui-BG-2);
}

.weui-btn::after {
  border: 0;
}
</style>
