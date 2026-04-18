<template>
  <view
    v-show="modelValue"
    role="dialog"
    aria-modal="true"
    class="weui-gallery"
    :aria-hidden="(!modelValue).toString()"
    @click="handleClose"
  >
    <view
      role="img"
      class="weui-gallery__img"
      :aria-label="label"
      :style="{ backgroundImage: imageUrl ? `url(${imageUrl})` : '' }"
    />
    <view v-if="deletable" class="weui-gallery__opr" @click.stop>
      <view role="button" aria-label="删除" class="weui-gallery__del" @click="handleDelete">
        <text class="weui-icon-delete weui-icon_gallery-delete" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'WeuiGallery',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '图片详情',
    },
    deletable: {
      type: Boolean,
      default: false,
    },
    closeOnClickImage: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue', 'close', 'delete'],
  computed: {
    imageUrl() {
      return this.src;
    },
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
      this.$emit('close');
    },
    handleClose() {
      if (this.closeOnClickImage) {
        this.close();
      }
    },
    handleDelete() {
      this.$emit('delete');
      this.close();
    },
  },
};
</script>

<style scoped>
.weui-gallery {
  display: block;
}
</style>
