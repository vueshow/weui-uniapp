<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Radio</view>
      <view class="page__desc">单选列表项</view>
    </view>
    <view class="page__bd">
      <weui-cell-group title="单选列表项" variant="radio">
        <weui-radio v-model="checkedValue" value="standard" label="cell standard" @change="handleChange" />
        <weui-radio v-model="checkedValue" value="selected" label="cell standard" @change="handleChange" />
        <weui-radio v-model="checkedValue" value="disabled" label="disabled option" disabled />
        <weui-cell title="添加更多" active extra-class="weui-cell_link" clickable @click="handleAdd" />
      </weui-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checkedValue: 'selected',
    };
  },
  methods: {
    handleChange(value) {
      uni.showToast({
        title: `当前选择: ${value}`,
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
