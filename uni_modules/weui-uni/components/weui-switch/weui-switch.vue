<template>
  <view
    class="weui-switch-cp"
    @click="handleToggle"
  >
    <checkbox
      class="weui-switch-cp__input"
      :checked="modelValue"
      :disabled="disabled"
      :aria-checked="modelValue.toString()"
      :aria-disabled="disabled.toString()"
    />
    <view
      class="weui-switch-cp__box"
      :class="{ 'weui-switch-cp__box_checked': modelValue }"
    />
  </view>
</template>

<script>
export default {
  name: 'WeuiSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
    },
    handleToggle() {
      if (this.disabled) {
        return;
      }
      this.updateValue(!this.modelValue);
    },
  },
};
</script>

<style scoped>
.weui-switch-cp {
  display: block;
}

.weui-switch-cp__input {
  pointer-events: none;
}

.weui-switch-cp__box_checked {
  background-color: var(--weui-BRAND);
}

.weui-switch-cp__box_checked::after {
  transform: translateX(20px);
}
</style>
