<template>
  <label class="weui-agree" :class="agreeClass" @click="toggle">
    <text class="weui-agree__checkbox-check" :aria-checked="checked ? 'true' : 'false'" />
    <text class="weui-agree__checkbox" :class="{ 'weui-agree__checkbox_checked': checked }" />
    <text class="weui-agree__text">
      <slot>{{ text }}</slot>
    </text>
  </label>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiAgree',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    warn: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hotarea: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    checked() {
      return this.modelValue;
    },
    agreeClass() {
      return {
        'weui-wa-hotarea': this.hotarea,
        'weui-agree_warn': this.warn,
        'weui-agree_animate': this.animated,
        'weui-agree_disabled': this.disabled,
      };
    },
  },
  methods: {
    toggle() {
      if (this.disabled) {
        return;
      }
      const value = !this.checked;
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
    },
  },
};
</script>

<style scoped>
.weui-agree {
  cursor: pointer;
}

.weui-agree_disabled .weui-agree__checkbox {
  opacity: 0.3;
}

.weui-agree_disabled {
  cursor: default;
}

.weui-agree__checkbox_checked {
  color: #07c160;
  color: var(--weui-BRAND);
  background-image: url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' width='24' height='24' rx='12' fill='%2307C160' style='fill:%2307C160;fill:color(display-p3 0.0275 0.7569 0.3765);fill-opacity:1;'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.2712 16.2899L6.5 12.5187L7.44281 11.5759L10.7426 14.8757L18.2851 7.33325L19.2279 8.27606L11.214 16.2899C10.9537 16.5503 10.5316 16.5503 10.2712 16.2899Z' fill='white' style='fill:white;fill-opacity:1;'/%3E%3C/svg%3E%0A");
}
</style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
