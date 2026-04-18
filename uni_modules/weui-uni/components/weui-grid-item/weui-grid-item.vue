<template>
  <view role="button" class="weui-grid" @click="handleClick">
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
