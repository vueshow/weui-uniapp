<template>
  <view class="weui-uploader">
    <view class="weui-uploader__hd">
      <view class="weui-uploader__title">{{ title }}</view>
      <view v-if="showCount" class="weui-uploader__info">{{ fileList.length }}/{{ maxCount }}</view>
    </view>
    <view class="weui-uploader__bd">
      <view class="weui-uploader__files">
        <view
          v-for="(file, index) in fileList"
          :key="file.id || file.url || index"
          class="weui-uploader__file"
          :class="{ 'weui-uploader__file_status': file.status }"
          @click="handlePreview(index)"
        >
          <view class="weui-uploader__file__thumb" :style="{ backgroundImage: `url(${file.url})` }" />
          <view v-if="deletable && !disabled" class="weui-uploader__file__delete" @click.stop="handleDelete(index)">
            <text class="weui-icon-close" />
          </view>
          <view v-if="file.status" role="alert" class="weui-uploader__file-content">
            {{ file.message || file.status }}
          </view>
        </view>
      </view>
      <view
        v-if="!disabled && fileList.length < maxCount"
        class="weui-uploader__input-box"
        @click="handleChoose"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: 'WeuiUploader',
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '图片上传',
    },
    maxCount: {
      type: Number,
      default: 9,
    },
    showCount: {
      type: Boolean,
      default: true,
    },
    deletable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    sourceType: {
      type: Array,
      default: () => ['album', 'camera'],
    },
    sizeType: {
      type: Array,
      default: () => ['original', 'compressed'],
    },
  },
  emits: ['update:modelValue', 'change', 'delete', 'preview', 'choose'],
  computed: {
    fileList() {
      return this.modelValue.map((item) => {
        if (typeof item === 'string') {
          return { url: item };
        }
        return item;
      });
    },
  },
  methods: {
    emitChange(nextValue) {
      this.$emit('update:modelValue', nextValue);
      this.$emit('change', nextValue);
    },
    handleChoose() {
      const count = Math.max(this.maxCount - this.fileList.length, 0);
      if (!count) {
        return;
      }
      uni.chooseImage({
        count,
        sourceType: this.sourceType,
        sizeType: this.sizeType,
        success: (res) => {
          const selected = (res.tempFilePaths || []).map((url) => ({ url }));
          const nextValue = [...this.fileList, ...selected].slice(0, this.maxCount);
          this.emitChange(nextValue);
          this.$emit('choose', selected);
        },
      });
    },
    handleDelete(index) {
      const nextValue = this.fileList.filter((_, currentIndex) => currentIndex !== index);
      this.emitChange(nextValue);
      this.$emit('delete', index);
    },
    handlePreview(index) {
      const current = this.fileList[index]?.url;
      if (!current) {
        return;
      }
      this.$emit('preview', index);
      uni.previewImage({
        current,
        urls: this.fileList.map((file) => file.url).filter(Boolean),
      });
    },
  },
};
</script>
