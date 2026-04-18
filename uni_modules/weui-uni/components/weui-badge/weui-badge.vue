<template>
  <text
    class="weui-uni-badge"
    :class="[`weui-uni-badge_${type}`, { 'weui-uni-badge_dot': dot }]"
  >
    <template v-if="!dot">{{ displayText }}</template>
  </text>
</template>

<script>
export default {
  name: 'WeuiBadge',
  props: {
    text: {
      type: [String, Number],
      default: '',
    },
    dot: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: 99,
    },
    type: {
      type: String,
      default: 'warn',
      validator: (value) => ['warn', 'primary', 'default'].includes(value),
    },
  },
  computed: {
    displayText() {
      const value = Number(this.text);
      if (!Number.isNaN(value) && value > this.max) {
        return `${this.max}+`;
      }
      return `${this.text}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/theme.scss';

.weui-uni-badge {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  vertical-align: middle;
}

.weui-uni-badge_warn {
  background-color: var(--weui-WARN, #{$weui-warn});
}

.weui-uni-badge_primary {
  background-color: var(--weui-BRAND, #{$weui-brand});
}

.weui-uni-badge_default {
  color: var(--weui-FG-1, #{$weui-fg-1});
  background-color: var(--weui-FG-3, #{$weui-fg-3});
}

.weui-uni-badge_dot {
  min-width: 8px;
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
}
</style>
