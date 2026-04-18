<template>
  <view class="page weui-uni-page">
    <view class="page__bd">
      <view class="weui-tab">
        <weui-navbar v-model="activeTab" :items="items" @change="handleChange" />
        <view role="tabpanel" class="weui-tab__panel">
          <view class="panel-content">{{ currentText }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'one',
      items: [
        { label: '选项一', value: 'one', text: 'Sit sit quibusdam assumenda facilis magnam temporibus.' },
        { label: '选项二', value: 'two', text: 'Consectetur neque facere modi recusandae tempore.' },
        { label: '选项三', value: 'three', text: 'Dolor magnam expedita ex beatae maiores assumenda.' },
      ],
    };
  },
  computed: {
    currentText() {
      return this.items.find((item) => item.value === this.activeTab)?.text || '';
    },
  },
  methods: {
    handleChange(item) {
      uni.showToast({
        title: item.label,
        icon: 'none',
      });
    },
  },
};
</script>

<style>
.page,
.page__bd,
.weui-tab {
  height: 100vh;
  color: var(--weui-FG-0);
}

.panel-content {
  padding: 32px;
  font-size: 17px;
  line-height: 1.6;
}
</style>
