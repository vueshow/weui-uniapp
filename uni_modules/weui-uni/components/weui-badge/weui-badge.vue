<template>
  <text
    class="weui-badge"
    :class="badgeClass"
  >
    <template v-if="!dot">{{ displayText }}</template>
  </text>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
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
    badgeClass() {
      return {
        'weui-badge_dot': this.dot,
        'weui-badge_primary': this.type === 'primary',
        'weui-badge_default': this.type === 'default',
      };
    },
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

<style scoped>
.weui-badge_primary {
  background-color: var(--weui-BRAND);
}

.weui-badge_default {
  color: var(--weui-FG-1);
  background-color: var(--weui-FG-3);
}
</style>
