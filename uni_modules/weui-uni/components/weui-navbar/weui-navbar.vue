<template>
  <view class="weui-navbar">
    <view
      v-for="(item, index) in items"
      :key="item.value"
      role="tab"
      class="weui-navbar__item"
      :class="{ 'weui-bar__item_on': item.value === modelValue }"
      :aria-selected="(item.value === modelValue).toString()"
      @click="handleSelect(item, index)"
    >
      <slot name="item" :item="item" :index="index" :active="item.value === modelValue">
        {{ item.label }}
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'WeuiNavbar',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    handleSelect(item, index) {
      if (item.disabled) {
        return;
      }
      this.$emit('update:modelValue', item.value);
      this.$emit('change', item, index);
    },
  },
};
</script>
