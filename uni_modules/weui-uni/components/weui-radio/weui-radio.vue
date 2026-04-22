<template>
  <view
    class="weui-cell weui-cell_active weui-check__label"
    :class="{ 'weui-cell_disabled': disabled }"
    @click="handleSelect"
  >
    <view class="weui-cell__label">
      <slot>{{ label }}</slot>
    </view>
    <view class="weui-cell__right">
      <radio
        class="weui-check"
        :checked="checked"
        :disabled="disabled"
        :value="stringValue"
        :aria-checked="checked.toString()"
        :aria-disabled="disabled.toString()"
      />
      <text class="weui-icon-checked" />
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiRadio',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number, Boolean],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    checked() {
      return this.modelValue === this.value;
    },
    stringValue() {
      return String(this.value);
    },
  },
  methods: {
    handleSelect() {
      if (this.disabled || this.checked) {
        return;
      }
      this.$emit('update:modelValue', this.value);
      this.$emit('change', this.value);
    },
  },
};
</script>

<style scoped>
.weui-check {
  pointer-events: none;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
