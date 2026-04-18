<template>
  <view
    class="weui-cell"
    :class="cellClass"
    :hover-class="hoverClass"
    hover-stay-time="70"
    @click="handleClick"
  >
    <view v-if="$slots.left || $slots.icon || icon || $slots.hd" class="weui-cell__hd">
      <slot name="left">
        <slot name="hd">
        <slot name="icon">
          <image class="weui-cell__icon" :src="icon" mode="aspectFit" />
        </slot>
        </slot>
      </slot>
    </view>
    <view class="weui-cell__bd">
      <slot>
        <text>{{ title }}</text>
        <view v-if="label" class="weui-cell__desc">{{ label }}</view>
      </slot>
    </view>
    <view v-if="$slots.right || $slots.value || value || arrow || $slots.ft" class="weui-cell__ft">
      <slot name="right">
        <slot name="ft">
        <slot name="value">{{ value }}</slot>
        </slot>
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'WeuiCell',
  props: {
    title: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    extraClass: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  computed: {
    cellClass() {
      return {
        'weui-cell_access': this.arrow,
        'weui-cell_active': this.active || this.clickable || this.arrow,
        'weui-cell_no-border': !this.border,
        [this.extraClass]: Boolean(this.extraClass),
      };
    },
    hoverClass() {
      return this.clickable || this.arrow ? 'weui-cell_active' : 'none';
    },
  },
  methods: {
    handleClick(event) {
      if (this.clickable || this.arrow) {
        this.$emit('click', event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.weui-cell_no-border::before {
  display: none !important;
}

.weui-cell__icon {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 16px;
}
</style>
