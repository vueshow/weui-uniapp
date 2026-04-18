<template>
  <view class="page weui-uni-page">
    <view class="page__bd">
      <view class="weui-tab">
        <view class="weui-tab__panel">
          <view class="tab-panel-text">{{ currentPanel }}</view>
        </view>
        <weui-tabbar v-model="activeTab" :items="items" @change="handleChange" />
      </view>
    </view>
  </view>
</template>

<script>
const icon = '/static/logo.png';

export default {
  data() {
    return {
      activeTab: 'wechat',
      items: [
        { label: '微信', value: 'wechat', icon, badge: '8' },
        { label: '通讯录', value: 'contacts', icon },
        { label: '发现', value: 'discover', icon, dot: true },
        { label: '我', value: 'me', icon },
      ],
    };
  },
  computed: {
    currentPanel() {
      const current = this.items.find((item) => item.value === this.activeTab);
      return current ? current.label : '';
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

.weui-tab {
  display: flex;
  flex-direction: column;
}

.weui-tab__panel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.tab-panel-text {
  font-size: 20px;
}
</style>
