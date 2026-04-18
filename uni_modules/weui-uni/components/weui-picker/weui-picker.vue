<template>
  <picker
    class="weui-uni-picker"
    :mode="mode"
    :value="pickerValue"
    :range="range"
    :range-key="normalizedRangeKey"
    :start="start"
    :end="end"
    :fields="fields"
    :disabled="disabled"
    @change="handleChange"
    @columnchange="handleColumnChange"
    @cancel="handleCancel"
  >
    <weui-cell :title="label" :arrow="!disabled" :clickable="!disabled" :active="!disabled">
      <template #right>
        <text class="weui-uni-picker__value" :class="{ 'weui-uni-picker__placeholder': isEmpty }">
          {{ displayText }}
        </text>
      </template>
    </weui-cell>
  </picker>
</template>

<script>
export default {
  name: 'WeuiPicker',
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: '',
    },
    mode: {
      type: String,
      default: 'selector',
      validator: (value) => ['selector', 'multiSelector', 'date', 'time'].includes(value),
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    range: {
      type: Array,
      default: () => [],
    },
    rangeKey: {
      type: String,
      default: '',
    },
    start: {
      type: String,
      default: '',
    },
    end: {
      type: String,
      default: '',
    },
    fields: {
      type: String,
      default: 'day',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    separator: {
      type: String,
      default: ' ',
    },
  },
  emits: ['update:modelValue', 'change', 'columnchange', 'cancel'],
  computed: {
    pickerValue() {
      if (this.mode === 'multiSelector') {
        return Array.isArray(this.modelValue) ? this.modelValue : [];
      }
      return this.modelValue;
    },
    normalizedRangeKey() {
      return this.rangeKey;
    },
    isEmpty() {
      if (this.mode === 'multiSelector') {
        return !Array.isArray(this.modelValue) || this.modelValue.length === 0;
      }
      return this.modelValue === '' || this.modelValue === null || this.modelValue === undefined;
    },
    displayText() {
      if (this.isEmpty) {
        return this.placeholder;
      }
      if (this.mode === 'selector') {
        return this.getSelectorLabel(this.modelValue);
      }
      if (this.mode === 'multiSelector') {
        return this.getMultiSelectorLabel(this.modelValue);
      }
      return String(this.modelValue);
    },
  },
  methods: {
    getLabelByItem(item) {
      if (item && typeof item === 'object') {
        return item[this.rangeKey || 'label'] ?? item.value ?? '';
      }
      return item ?? '';
    },
    getSelectorLabel(index) {
      const realIndex = Number(index);
      if (Number.isNaN(realIndex) || !Array.isArray(this.range) || !this.range.length) {
        return this.placeholder;
      }
      const item = this.range[realIndex];
      return String(this.getLabelByItem(item) || this.placeholder);
    },
    getMultiSelectorLabel(indexes) {
      if (!Array.isArray(indexes) || !Array.isArray(this.range)) {
        return this.placeholder;
      }
      const labels = indexes
        .map((current, columnIndex) => {
          const column = this.range[columnIndex];
          if (!Array.isArray(column)) {
            return '';
          }
          const item = column[Number(current)];
          return this.getLabelByItem(item);
        })
        .filter(Boolean)
        .map((item) => String(item));
      return labels.length ? labels.join(this.separator) : this.placeholder;
    },
    handleChange(event) {
      const value = event?.detail?.value;
      this.$emit('update:modelValue', value);
      this.$emit('change', event);
    },
    handleColumnChange(event) {
      this.$emit('columnchange', event);
    },
    handleCancel(event) {
      this.$emit('cancel', event);
    },
  },
};
</script>

<style scoped>
.weui-uni-picker {
  display: block;
}

.weui-uni-picker__value {
  color: var(--weui-FG-1);
}

.weui-uni-picker__placeholder {
  color: var(--weui-FG-2);
}
</style>
