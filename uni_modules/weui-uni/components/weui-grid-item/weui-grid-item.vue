<template>
  <view role="button" class="weui-grid" hover-class="weui-grid_active" @click="handleClick">
    <view class="weui-grid__icon">
      <slot name="icon">
        <image v-if="icon" :src="icon" mode="aspectFit" />
      </slot>
    </view>
    <view class="weui-grid__label">
      <slot>{{ label }}</slot>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiGridItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="scss">
.weui-grid {
  display: block;
  text-decoration: none;
}

.weui-grid_active {
  background-color: rgba(0, 0, 0, 0.05);
}

.weui-grid__icon {
  line-height: 1;
}

.weui-grid__icon image,
.weui-grid__icon uni-image,
.weui-grid__icon .uni-image {
  display: block;
  width: 100%;
  height: 100%;
}

.weui-grid__label {
  line-height: 1.4;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
