<template>
  <view v-if="modelValue" role="dialog" aria-modal="true" :aria-hidden="(!modelValue).toString()">
    <view class="weui-mask" @click="handleMaskClick" />
    <view class="weui-dialog" :class="{ 'weui-dialog_btn-wrap': buttonWrap }">
      <view v-if="title || $slots.title" class="weui-dialog__hd">
        <slot name="title">
          <strong class="weui-dialog__title">{{ title }}</strong>
        </slot>
      </view>
      <view class="weui-dialog__bd">
        <slot>{{ content }}</slot>
      </view>
      <view class="weui-dialog__ft">
        <view
          v-if="showCancel"
          role="button"
          class="weui-dialog__btn weui-dialog__btn_default"
          @click="handleCancel"
        >
          {{ cancelText }}
        </view>
        <view role="button" class="weui-dialog__btn" :class="confirmClass" @click="handleConfirm">
          {{ confirmText }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '辅助操作',
    },
    confirmText: {
      type: String,
      default: '主操作',
    },
    confirmType: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'warn', 'default'].includes(value),
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    buttonWrap: {
      type: Boolean,
      default: false,
    },
    maskClosable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'cancel', 'confirm', 'close'],
  computed: {
    confirmClass() {
      if (this.confirmType === 'warn') {
        return 'weui-dialog__btn_warn';
      }
      if (this.confirmType === 'default') {
        return 'weui-dialog__btn_default';
      }
      return 'weui-dialog__btn_primary';
    },
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
      this.$emit('close');
    },
    handleCancel() {
      this.$emit('cancel');
      this.close();
    },
    handleConfirm() {
      this.$emit('confirm');
      this.close();
    },
    handleMaskClick() {
      if (this.maskClosable) {
        this.close();
      }
    },
  },
};
</script>

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
