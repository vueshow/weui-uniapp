<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Picker</view>
      <view class="page__desc">多列选择器，需要配合js实现</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-button
        type="default"
        text="单列选择器"
        @click="showPicker = true"
      />
      <weui-button
        type="default"
        text="日期选择器"
        @click="showDatePicker = true"
      />
    </view>

    <weui-picker
      v-model="ticketIndex"
      v-model:visible="showPicker"
      title="单列选择器"
      :range="ticketRange"
      :show-close="false"
      @confirm="handleConfirm"
      @change="handleChange"
    />
    {{ dateValue }}
    <weui-picker
      v-model="dateValue"
      v-model:visible="showDatePicker"
      mode="date"
      title="多列选择器"
      start="1990"
      :end="currentYear"
      @confirm="handleDateConfirm"
      @change="handleChange"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      showPicker: false,
      showDatePicker: false,
      ticketIndex: 0,
      dateValue: '2011-01-12',
      ticketRange: [
        { label: '飞机票', value: 0 },
        { label: '火车票', value: 1 },
        { label: '的士票', value: 2 },
        { label: '公交票 (disabled)', value: 3, disabled: true },
        { label: '其他', value: 4 },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    handleChange(result) {
      console.log(result);
    },
    handleConfirm(result) {
      console.log(result);
    },
    handleDateConfirm(result) {
      console.log(result);
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

.page__bd_spacing .weui-btn:first-child {
  margin-top: 0;
}
</style>
