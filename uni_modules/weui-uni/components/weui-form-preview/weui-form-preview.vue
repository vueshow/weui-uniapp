<template>
  <view class="weui-form-preview">
    <view v-if="label || value || $slots.header" role="option" class="weui-form-preview__hd">
      <slot name="header">
        <view class="weui-form-preview__item">
          <text class="weui-form-preview__label">{{ label }}</text>
          <text class="weui-form-preview__value">{{ value }}</text>
        </view>
      </slot>
    </view>

    <view v-if="items.length || $slots.default" role="option" class="weui-form-preview__bd">
      <slot>
        <view
          v-for="(item, index) in items"
          :key="item.label || index"
          class="weui-form-preview__item"
        >
          <text class="weui-form-preview__label">{{ item.label }}</text>
          <text class="weui-form-preview__value">{{ item.value }}</text>
        </view>
      </slot>
    </view>

    <view v-if="actions.length || $slots.actions" class="weui-form-preview__ft">
      <slot name="actions">
        <button
          v-for="(action, index) in actions"
          :key="action.text || index"
          role="button"
          class="weui-form-preview__btn"
          :class="action.type === 'primary' ? 'weui-form-preview__btn_primary' : 'weui-form-preview__btn_default'"
          hover-class="none"
          @click="handleAction(action, index)"
        >
          {{ action.text }}
        </button>
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiFormPreview',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['action-click'],
  methods: {
    handleAction(action, index) {
      this.$emit('action-click', action, index);
    },
  },
};
</script>

<style scoped>
.weui-form-preview__btn::after {
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
}
</style>
