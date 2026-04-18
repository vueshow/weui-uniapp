<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Toast</view>
      <view class="page__desc">弹出式提示</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-button type="default" text="成功提示" @click="showSuccess" />
      <weui-button type="default" text="失败提示" @click="showWarn" />
      <weui-button type="default" text="长文案提示" @click="showTextMore" />
      <weui-button type="default" text="正在加载提示" @click="showLoading" />
      <weui-button type="default" text="文字提示" @click="showText" />
    </view>

    <weui-toast
      v-model="visible"
      :type="toastType"
      :text="toastText"
      :text-more="toastTextMore"
      @close="clearTimer"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      toastType: 'success',
      toastText: '已完成',
      toastTextMore: false,
      closeTimer: null,
    };
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    clearTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },
    showToast(options) {
      const { type, text, textMore = false, duration = 2000 } = options;
      this.clearTimer();
      this.toastType = type;
      this.toastText = text;
      this.toastTextMore = textMore;
      this.visible = true;
      if (duration > 0) {
        this.closeTimer = setTimeout(() => {
          this.visible = false;
          this.closeTimer = null;
        }, duration);
      }
    },
    showSuccess() {
      this.showToast({
        type: 'success',
        text: '已完成',
      });
    },
    showWarn() {
      this.showToast({
        type: 'warn',
        text: '获取链接失败',
      });
    },
    showTextMore() {
      this.showToast({
        type: 'warn',
        text: '长文案提示详情，长文案提示详情，长文案提示详情',
        textMore: true,
      });
    },
    showLoading() {
      this.showToast({
        type: 'loading',
        text: '正在加载',
      });
    },
    showText() {
      this.showToast({
        type: 'text',
        text: '文字提示',
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

.page__bd {
  padding-bottom: 20px;
}
</style>
