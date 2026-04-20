<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Address Picker</view>
      <view class="page__desc">省市区三级联动地址选择</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <view class="result-display">
        <text>已选地址：{{ displayAddress || '请选择' }}</text>
      </view>
      <weui-button
        type="default"
        text="选择地址"
        @click="showAddressPicker = true"
      />
    </view>

    <weui-address-picker
      v-model="addressValue"
      v-model:visible="showAddressPicker"
      title="选择地址"
      @confirm="handleConfirm"
      @change="handleChange"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      showAddressPicker: false,
      addressValue: [],
    };
  },
  computed: {
    displayAddress() {
      return this.addressValue.length ? this.addressValue.join(' / ') : '';
    },
  },
  methods: {
    handleChange(result) {
      console.log('[AddressPicker change]', result);
    },
    handleConfirm(result) {
      console.log('[AddressPicker confirm]', result);
      uni.showToast({
        title: result.labels.join(' '),
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

.page__bd_spacing {
  padding: 0 16px;
}

.page__bd_spacing .weui-btn {
  margin-top: 16px;
}

.result-display {
  padding: 16px;
  background: var(--weui-BG-2);
  border-radius: 8px;
  font-size: 14px;
  color: var(--weui-FG-0);
}
</style>
