<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Switch</view>
      <view class="page__desc">开关</view>
    </view>
    <view class="page__bd">
      <weui-cell-group title="开关" variant="form">
        <weui-cell title="标题文字" active extra-class="weui-cell_switch">
          <template #right>
            <weui-switch v-model="checked" @change="handleChange('标题文字', $event)" />
          </template>
        </weui-cell>
        <weui-cell title="默认开启" active extra-class="weui-cell_switch">
          <template #right>
            <weui-switch v-model="checkedDefault" @change="handleChange('默认开启', $event)" />
          </template>
        </weui-cell>
        <weui-cell title="禁用状态" extra-class="weui-cell_switch weui-cell_disabled">
          <template #right>
            <weui-switch v-model="checkedDisabled" disabled />
          </template>
        </weui-cell>
      </weui-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checkedDefault: true,
      checkedDisabled: true,
    };
  },
  methods: {
    handleChange(label, value) {
      uni.showToast({
        title: `${label}: ${value ? '开启' : '关闭'}`,
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
</style>
