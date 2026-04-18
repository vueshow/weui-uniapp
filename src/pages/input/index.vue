<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Input</view>
      <view class="page__desc">表单输入</view>
    </view>
    <view class="page__bd">
      <weui-cell-group title="文本框" variant="form">
        <weui-cell active>
          <weui-input v-model="plainText" placeholder="请输入文本" />
        </weui-cell>
      </weui-cell-group>

      <weui-cell-group title="表单" variant="form" tips="底部说明文字底部说明文字">
        <weui-cell active>
          <template #left>
            <label class="weui-label">qq</label>
          </template>
          <weui-input v-model="qq" type="number" placeholder="请输入qq号" />
        </weui-cell>
        <weui-cell active extra-class="weui-cell_vcode">
          <template #left>
            <label class="weui-label">手机号</label>
          </template>
          <weui-input v-model="phone" type="number" placeholder="请输入手机号" />
          <template #right>
            <view class="weui-vcode-btn" @click="handleCode">获取验证码</view>
          </template>
        </weui-cell>
        <weui-cell active>
          <template #left>
            <label class="weui-label">日期</label>
          </template>
          <weui-input v-model="dateValue" type="date" />
        </weui-cell>
        <weui-cell active>
          <template #left>
            <label class="weui-label">时间</label>
          </template>
          <weui-input v-model="timeValue" type="time" />
        </weui-cell>
      </weui-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      plainText: '',
      qq: '',
      phone: '',
      dateValue: '',
      timeValue: '',
    };
  },
  methods: {
    handleCode() {
      uni.showToast({
        title: '模拟发送验证码',
        icon: 'none',
      });
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

.page__bd {
  padding-bottom: 20px;
}
</style>
