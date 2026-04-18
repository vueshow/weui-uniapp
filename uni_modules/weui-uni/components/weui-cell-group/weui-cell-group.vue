<template>
  <view>
    <view v-if="title" class="weui-cells__title">{{ title }}</view>
    <view class="weui-cells" :class="cellsClass">
      <slot />
    </view>
    <view v-if="tips" class="weui-cells__tips">{{ tips }}</view>
  </view>
</template>

<script>
export default {
  name: 'WeuiCellGroup',
  props: {
    title: {
      type: String,
      default: '',
    },
    tips: {
      type: String,
      default: '',
    },
    inset: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: '',
      validator: (value) => ['', 'form', 'checkbox', 'radio'].includes(value),
    },
  },
  computed: {
    cellsClass() {
      return {
        'weui-cells_inset': this.inset,
        [`weui-cells_${this.variant}`]: Boolean(this.variant),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.weui-cells_inset {
  margin-right: 16px;
  margin-left: 16px;
  border-radius: 8px;
}
</style>
