<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Uploader</view>
      <view class="page__desc">上传组件</view>
    </view>
    <view class="page__bd">
      <weui-cell-group title="上传组件" variant="form">
        <weui-cell active extra-class="weui-cell_uploader">
          <weui-uploader
            v-model="files"
            title="图片上传，缩略图不带删除"
            :max-count="5"
            @change="handleChange"
          />
        </weui-cell>
      </weui-cell-group>

      <weui-cell-group variant="form">
        <weui-cell active extra-class="weui-cell_uploader">
          <weui-uploader
            v-model="filesWithDelete"
            title="图片上传，缩略图带删除"
            :max-count="5"
            deletable
            @change="handleChange"
            @delete="handleDelete"
          />
        </weui-cell>
      </weui-cell-group>
    </view>
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
        { url: demoImage, status: '50%' },
      ],
      filesWithDelete: [
        { url: demoImage },
        { url: demoImage },
        { url: demoImage, status: '50%' },
      ],
    };
  },
  methods: {
    handleChange(files) {
      uni.showToast({
        title: `当前 ${files.length} 张`,
        icon: 'none',
      });
    },
    handleDelete() {
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
