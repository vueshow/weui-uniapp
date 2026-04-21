<template>
  <view class="weui-loading-wrap" :class="{ 'weui-loading-wrap_vertical': vertical }">
    <text
      v-if="type !== 'primary'"
      role="img"
      :aria-label="label"
      :class="loadingClass"
      :style="iconStyle"
    />
    <view
      v-else
      role="img"
      :aria-label="label"
      class="weui-primary-loading"
      :class="primaryClass"
      :style="iconStyle"
    >
      <view class="weui-primary-loading__dot" />
    </view>
    <text v-if="text" class="weui-loading-wrap__text">{{ text }}</text>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiLoading',
  props: {
    type: {
      type: String,
      default: 'mask',
      validator: (value) => ['loading', 'mask', 'primary'].includes(value),
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    color: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '正在加载',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    loadingClass() {
      if (this.type === 'loading') {
        return 'weui-loading';
      }
      return 'weui-mask-loading';
    },
    primaryClass() {
      if (this.color === 'brand') {
        return 'weui-primary-loading_brand';
      }
      if (this.color === 'transparent') {
        return 'weui-primary-loading_transparent';
      }
      return '';
    },
    iconStyle() {
      const style = {
        fontSize: typeof this.size === 'number' ? `${this.size}px` : this.size,
      };
      if (
        this.color &&
        this.type !== 'primary' &&
        this.color !== 'brand' &&
        this.color !== 'transparent'
      ) {
        style.color = this.color;
      }
      return style;
    },
  },
};
</script>

<style scoped>
.weui-loading-wrap {
  display: inline-flex;
  align-items: center;
}

.weui-loading-wrap_vertical {
  flex-direction: column;
}

.weui-loading-wrap__text {
  margin-left: 8px;
  color: var(--weui-FG-1);
  font-size: 14px;
}

.weui-loading-wrap_vertical .weui-loading-wrap__text {
  margin-top: 8px;
  margin-left: 0;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
