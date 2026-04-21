<template>
  <view v-if="modelValue" role="alert">
    <view v-if="mask" class="weui-mask_transparent" @click="handleMaskClick" />
    <view class="weui-toast__wrp">
      <view class="weui-toast" :class="toastClass">
        <text v-if="type === 'success'" class="weui-icon-success-no-circle weui-icon_toast" />
        <text v-else-if="type === 'warn'" class="weui-icon-warn weui-icon_toast" />
        <view v-else-if="type === 'loading'" class="weui-primary-loading weui-icon_toast">
          <view class="weui-primary-loading__dot" />
        </view>
        <view v-if="text" class="weui-toast__content">{{ text }}</view>
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
  name: 'WeuiToast',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'success',
      validator: (value) => ['success', 'warn', 'loading', 'text'].includes(value),
    },
    text: {
      type: String,
      default: '',
    },
    textMore: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'close'],
  computed: {
    toastClass() {
      return {
        'weui-toast_text': this.type === 'text',
        'weui-toast_text-more': this.textMore,
      };
    },
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
      this.$emit('close');
    },
    handleMaskClick() {
      if (this.closable) {
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
