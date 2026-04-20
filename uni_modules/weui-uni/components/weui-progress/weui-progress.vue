<template>
  <view class="weui-progress">
    <view class="weui-progress__bar">
      <view class="weui-progress__inner-bar" :style="{ width: percentText }" />
    </view>
    <view
      v-if="showCancel"
      role="button"
      class="weui-wa-hotarea weui-progress__opr"
      @click="handleCancel"
    >
      <text role="img" aria-label="取消" class="weui-icon-cancel" />
    </view>
    <text role="alert" class="weui-hidden_abs">{{ percentText }}</text>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['cancel'],
  computed: {
    safePercent() {
      return Math.min(100, Math.max(0, Number(this.percent) || 0));
    },
    percentText() {
      return `${this.safePercent}%`;
    },
  },
  methods: {
    handleCancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
