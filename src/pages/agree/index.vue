<template>
  <view class="page">
    <view class="weui-form">
      <view class="weui-form__bd">
        <view class="weui-form__text-area">
          <view class="weui-form__title">Agree</view>
          <view class="weui-form__desc">协议勾选</view>
        </view>
        <view class="weui-form__control-area" />
      </view>

      <view class="weui-form__ft">
        <view class="weui-form__tips-area">
          <view class="weui-form__tips__group weui-form__tips__group_primary">
            <view class="weui-form__tips__wrp">
              <weui-agree
                v-model="agree1"
                :warn="showWarn"
                :animated="warnAnimated"
              >
                阅读并同意<text class="weui-link">《相关条款》</text>
              </weui-agree>
            </view>
            <view class="weui-form__tips__wrp">
              <weui-agree v-model="agree2" text="以上信息用于核对账号绑定的身份" />
            </view>
          </view>
        </view>
        <view class="weui-form__opr-area">
          <button class="weui-btn weui-btn_primary" hover-class="weui-btn_active" @click="submit">确定</button>
        </view>
        <view v-if="showWarn" class="weui-hidden_abs" role="alert">未同意《相关条款》</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      agree1: false,
      agree2: false,
      showWarn: false,
      warnAnimated: false,
      warnTimer: null,
    };
  },
  beforeUnmount() {
    if (this.warnTimer) {
      clearTimeout(this.warnTimer);
    }
  },
  methods: {
    submit() {
      if (this.agree1) {
        this.showWarn = false;
        uni.showToast({
          title: '已同意',
          icon: 'none',
        });
        return;
      }
      this.showWarn = true;
      this.warnAnimated = false;
      this.$nextTick(() => {
        this.warnAnimated = true;
      });
      if (this.warnTimer) {
        clearTimeout(this.warnTimer);
      }
      this.warnTimer = setTimeout(() => {
        this.warnAnimated = false;
      }, 300);
    },
  },
};
</script>

<style>
.page {
  min-height: 100vh;
  color: var(--weui-FG-0);
}

.weui-form {
  min-height: 100vh;
}

.weui-btn::after {
  border: 0;
}
</style>
