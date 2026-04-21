<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Toptips</view>
      <view class="page__desc">顶部提示</view>
    </view>

    <view class="page__bd page__bd_spacing">
      <weui-button type="default" text="错误提示" @click="showWarn" />
      <weui-button type="default" text="普通提示" @click="showInfo" />
      <weui-button type="default" text="成功提示" @click="showSuccess" />
    </view>

    <weui-form
      class="demo-form"
      title="表单校验"
      desc="点击确定时，如果微信号不足 6 位，会显示 toptips。"
      :actions="actions"
      @action-click="handleSubmit"
    >
      <view class="weui-cells__group weui-cells__group_form">
        <view class="weui-cells__title">账号信息</view>
        <view class="weui-cells weui-cells_form">
          <weui-cell :extra-class="wechatCellClass">
            <template #left>
              <text class="weui-label">微信号</text>
            </template>
            <weui-input v-model="wechat" placeholder="填写本人微信号" />
            <template #right>
              <view v-if="isWechatWarn" class="weui-icon-warn" />
            </template>
          </weui-cell>
        </view>
      </view>
    </weui-form>

    <weui-toptips v-model="visible" :type="type" :text="message" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      type: 'warn',
      message: '错误提示',
      wechat: '',
      isWechatWarn: false,
      actions: [{ text: '确定', type: 'primary', value: 'submit' }],
    };
  },
  computed: {
    wechatCellClass() {
      return this.isWechatWarn ? 'weui-cell_active weui-cell_warn' : 'weui-cell_active';
    },
  },
  methods: {
    showTips(type, message) {
      this.type = type;
      this.message = message;
      this.visible = false;
      this.$nextTick(() => {
        this.visible = true;
      });
    },
    showWarn() {
      this.showTips('warn', '错误提示');
    },
    showInfo() {
      this.showTips('info', '普通提示');
    },
    showSuccess() {
      this.showTips('success', '成功提示');
    },
    handleSubmit() {
      if (this.wechat.length < 6) {
        this.isWechatWarn = true;
        this.showTips('warn', '微信号不能少于 6 位');
        return;
      }

      this.isWechatWarn = false;
      this.showTips('success', '校验通过');
    },
  },
};
</script>

<style>
.page {
  min-height: 100vh;
  color: var(--weui-FG-0);
}

.page__hd {
  padding: 40px;
}

.page__title {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}

.page__desc {
  margin-top: 4px;
  color: var(--weui-FG-1);
  text-align: left;
  font-size: 14px;
}

.demo-form {
  min-height: auto;
  padding-top: 24px;
}
</style>
