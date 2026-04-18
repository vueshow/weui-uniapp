<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Checkbox</view>
      <view class="page__desc">复选列表项</view>
    </view>
    <view class="page__bd">
      <weui-cell-group title="复选列表项" variant="checkbox">
        <weui-checkbox v-model="checkedValues" value="standard" label="standard is dealt for u." @change="handleChange" />
        <weui-checkbox v-model="checkedValues" value="dealicient" label="standard is dealicient for u." @change="handleChange" />
        <weui-checkbox v-model="checkedValues" value="disabled" label="disabled option" disabled />
        <weui-cell title="添加更多" active extra-class="weui-cell_link" clickable @click="handleAdd" />
      </weui-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checkedValues: ['standard'],
    };
  },
  methods: {
    handleChange(values) {
      uni.showToast({
        title: values.length ? values.join(', ') : '未选择',
        icon: 'none',
      });
    },
    handleAdd() {
      uni.showToast({
        title: '添加更多',
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
