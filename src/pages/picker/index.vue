<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Picker</view>
      <view class="page__desc">选择器</view>
    </view>
    <view class="page__bd">
      <weui-cell-group title="基础选择器" variant="form">
        <weui-picker
          v-model="ticketIndex"
          label="单列选择器"
          :range="ticketRange"
          @change="handleTicketChange"
        />
        <weui-picker
          v-model="multiValue"
          mode="multiSelector"
          label="多列选择器"
          :range="multiRange"
          separator=" - "
          @change="handleMultiChange"
        />
      </weui-cell-group>

      <weui-cell-group title="日期时间" variant="form">
        <weui-picker
          v-model="dateValue"
          mode="date"
          label="日期选择器"
          start="1990-01-01"
          :end="today"
          @change="handleDateChange"
        />
        <weui-picker
          v-model="timeValue"
          mode="time"
          label="时间选择器"
          @change="handleTimeChange"
        />
      </weui-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      ticketRange: ['飞机票', '火车票', '的士票', '其他'],
      ticketIndex: 0,
      multiRange: [
        ['中国', '美国', '日本'],
        ['北京', '上海', '深圳'],
      ],
      multiValue: [0, 0],
      dateValue: '',
      timeValue: '',
    };
  },
  computed: {
    today() {
      const now = new Date();
      const year = now.getFullYear();
      const month = `${now.getMonth() + 1}`.padStart(2, '0');
      const day = `${now.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
  methods: {
    showToast(type, value) {
      uni.showToast({
        title: `${type}: ${value}`,
        icon: 'none',
      });
    },
    handleTicketChange(event) {
      const index = Number(event?.detail?.value ?? 0);
      const text = this.ticketRange[index] || '';
      this.showToast('单列选择器', text);
    },
    handleMultiChange(event) {
      const values = event?.detail?.value || [];
      const first = Number(values[0] || 0);
      const second = Number(values[1] || 0);
      const country = this.multiRange[0]?.[first] || '';
      const city = this.multiRange[1]?.[second] || '';
      this.showToast('多列选择器', `${country} - ${city}`);
    },
    handleDateChange(event) {
      this.showToast('日期选择器', event?.detail?.value || '');
    },
    handleTimeChange(event) {
      this.showToast('时间选择器', event?.detail?.value || '');
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
