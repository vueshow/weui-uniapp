<template>
  <input
    class="weui-input"
    :value="displayValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="maxlength"
    :focus="focus"
    :password="password"
    :confirm-type="confirmType"
    :placeholder-style="placeholderStyle"
    :placeholder-class="placeholderClass"
    :cursor-spacing="cursorSpacing"
    :cursor="cursor"
    :selection-start="selectionStart"
    :selection-end="selectionEnd"
    @input="handleInput"
    @change="handleChange"
    @confirm="handleConfirm"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: [Number, String],
      default: 140,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    password: {
      type: Boolean,
      default: false,
    },
    confirmType: {
      type: String,
      default: 'done',
    },
    placeholderStyle: {
      type: String,
      default: '',
    },
    placeholderClass: {
      type: String,
      default: '',
    },
    cursorSpacing: {
      type: [Number, String],
      default: 0,
    },
    cursor: {
      type: [Number, String],
      default: -1,
    },
    selectionStart: {
      type: [Number, String],
      default: -1,
    },
    selectionEnd: {
      type: [Number, String],
      default: -1,
    },
  },
  emits: ['update:modelValue', 'input', 'change', 'confirm', 'focus', 'blur'],
  computed: {
    displayValue() {
      if (this.modelValue === null || this.modelValue === undefined) {
        return '';
      }
      return String(this.modelValue);
    },
  },
  methods: {
    extractValue(event) {
      return event?.detail?.value ?? '';
    },
    handleInput(event) {
      const value = this.extractValue(event);
      this.$emit('update:modelValue', value);
      this.$emit('input', event);
    },
    handleChange(event) {
      const value = this.extractValue(event);
      this.$emit('update:modelValue', value);
      this.$emit('change', event);
    },
    handleConfirm(event) {
      this.$emit('confirm', event);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
  },
};
</script>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
