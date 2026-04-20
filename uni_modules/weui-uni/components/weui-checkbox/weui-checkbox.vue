<template>
  <view
    class="weui-cell weui-cell_active weui-check__label"
    :class="{ 'weui-cell_disabled': disabled }"
    @click="handleToggle"
  >
    <view class="weui-cell__hd">
      <checkbox
        class="weui-check"
        :checked="checked"
        :disabled="disabled"
        :value="value"
        :aria-checked="checked.toString()"
        :aria-disabled="disabled.toString()"
      />
      <text class="weui-icon-checked" />
    </view>
    <view class="weui-cell__bd">
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
  name: 'WeuiCheckbox',
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number, Boolean],
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    checked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value);
      }
      return Boolean(this.modelValue);
    },
  },
  methods: {
    handleToggle() {
      if (this.disabled) {
        return;
      }
      if (Array.isArray(this.modelValue)) {
        const nextValue = this.checked
          ? this.modelValue.filter((item) => item !== this.value)
          : [...this.modelValue, this.value];
        this.$emit('update:modelValue', nextValue);
        this.$emit('change', nextValue);
        return;
      }
      const nextValue = !this.checked;
      this.$emit('update:modelValue', nextValue);
      this.$emit('change', nextValue);
    },
  },
};
</script>

<style scoped>
.weui-check {
  pointer-events: none;
}
</style>
