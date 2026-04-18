<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Progress</view>
      <view class="page__desc">进度条</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-progress :percent="0" @cancel="handleCancel" />
      <view class="progress-space" />
      <weui-progress :percent="50" @cancel="handleCancel" />
      <view class="progress-space" />
      <weui-progress :percent="80" @cancel="handleCancel" />

      <view class="weui-btn-area">
        <weui-button
          :text="uploading ? '上传中' : '上传'"
          :disabled="uploading"
          @click="startUpload"
        />
      </view>
      <weui-progress :percent="uploadProgress" :show-cancel="uploading" @cancel="cancelUpload" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      uploading: false,
      uploadProgress: 0,
      timer: null,
    };
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    startUpload() {
      if (this.uploading) {
        return;
      }
      this.uploading = true;
      this.uploadProgress = 0;
      this.clearTimer();
      this.timer = setInterval(() => {
        this.uploadProgress += 2;
        if (this.uploadProgress >= 100) {
          this.uploadProgress = 100;
          this.uploading = false;
          this.clearTimer();
          uni.showToast({
            title: '上传完成',
            icon: 'none',
          });
        }
      }, 40);
    },
    cancelUpload() {
      this.uploading = false;
      this.uploadProgress = 0;
      this.clearTimer();
      uni.showToast({
        title: '已取消',
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

.progress-space {
  height: 24px;
}
</style>
