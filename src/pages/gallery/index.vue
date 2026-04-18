<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Gallery</view>
      <view class="page__desc">画廊，可实现上传图片的展示或幻灯片播放</view>
    </view>
    <view class="page__bd">
      <weui-cell-group title="图片预览" variant="form">
        <weui-cell active extra-class="weui-cell_uploader">
          <weui-uploader
            v-model="files"
            title="点击缩略图查看大图"
            :max-count="5"
            preview-mode="custom"
            deletable
            @preview="handlePreview"
            @delete="handleUploaderDelete"
          />
        </weui-cell>
      </weui-cell-group>
    </view>

    <weui-gallery
      v-model="galleryVisible"
      :src="currentImage"
      deletable
      @delete="handleGalleryDelete"
    />
  </view>
</template>

<script>
const demoImage = '/static/logo.png';

export default {
  data() {
    return {
      files: [
        { url: demoImage },
        { url: demoImage },
        { url: demoImage },
      ],
      currentIndex: 0,
      galleryVisible: false,
    };
  },
  computed: {
    currentImage() {
      return this.files[this.currentIndex]?.url || '';
    },
  },
  methods: {
    handlePreview(index) {
      this.currentIndex = index;
      this.galleryVisible = true;
    },
    handleUploaderDelete(index) {
      if (this.currentIndex >= this.files.length - 1) {
        this.currentIndex = Math.max(this.files.length - 2, 0);
      }
      uni.showToast({
        title: `删除第 ${index + 1} 张`,
        icon: 'none',
      });
    },
    handleGalleryDelete() {
      this.files = this.files.filter((_, index) => index !== this.currentIndex);
      if (this.currentIndex >= this.files.length) {
        this.currentIndex = Math.max(this.files.length - 1, 0);
      }
      uni.showToast({
        title: '已删除',
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
