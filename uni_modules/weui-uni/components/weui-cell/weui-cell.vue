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
        <slot name="title">
          <text v-if="required" class="weui-cell__required">*</text>
          <text v-if="title">{{ title }}</text>
        </slot>
        <slot name="label">
          <view v-if="label" class="weui-cell__desc">{{ label }}</view>
        </slot>
      </slot>
    </view>
    <view
      v-if="$slots.right || $slots.value || $slots.ft || $slots['right-icon'] || value || showArrow"
      class="weui-cell__ft"
    >
      <slot name="right">
        <slot name="ft">
          <slot name="value">{{ value }}</slot>
        </slot>
      </slot>
      <slot v-if="$slots['right-icon']" name="right-icon" />
    </view>
    <view v-if="$slots.extra" class="weui-cell__extra">
      <slot name="extra" />
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
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
    isLink: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator: (value) => ['', 'large'].includes(value),
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    arrowDirection: {
      type: String,
      default: 'right',
      validator: (value) => ['right', 'left', 'up', 'down'].includes(value),
    },
  },
  emits: ['click'],
  computed: {
    showArrow() {
      return this.arrow || this.isLink;
    },
    isClickable() {
      return this.clickable || this.isLink;
    },
    cellClass() {
      return {
        'weui-cell_access': this.showArrow,
        'weui-cell_active': this.active || this.isClickable || this.showArrow,
        'weui-cell_no-border': !this.border,
        'weui-cell_disabled': this.disabled,
        'weui-cell_large': this.size === 'large',
        'weui-cell_center': this.center,
        [`weui-cell_arrow-${this.arrowDirection}`]:
          this.showArrow && this.arrowDirection !== 'right',
        [this.extraClass]: Boolean(this.extraClass),
      };
    },
    hoverClass() {
      if (this.disabled) return 'none';
      return this.isClickable || this.showArrow ? 'weui-cell_active' : 'none';
    },
  },
  methods: {
    handleClick(event) {
      if (this.disabled) return;
      if (this.isClickable || this.showArrow) {
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

.weui-cell_large {
  min-height: 72px;
}

.weui-cell__required {
  color: #ee0a24;
  margin-right: 2px;
  font-size: 14px;
}

.weui-cell__extra {
  display: flex;
  align-items: center;
  margin-left: 4px;
}

.weui-cell_arrow-left .weui-cell__ft::after {
  transform: rotate(225deg) !important;
}

.weui-cell_arrow-up .weui-cell__ft::after {
  transform: rotate(-45deg) !important;
}

.weui-cell_arrow-down .weui-cell__ft::after {
  transform: rotate(135deg) !important;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
