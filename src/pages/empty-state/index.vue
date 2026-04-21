<template>
  <view class="page">
    <weui-navbar v-model="activeTab" :items="tabs" />

    <weui-empty-state
      v-if="activeTab === 0"
      title="暂无内容"
      desc="当前列表还没有数据，可稍后刷新查看。"
      :actions="primaryActions"
      @action-click="handleAction"
    />

    <weui-empty-state
      v-else-if="activeTab === 1"
      icon="weui-icon-info"
      title="无搜索结果"
      desc="换个关键词试试，或检查输入内容是否正确。"
      :actions="searchActions"
      @action-click="handleAction"
    >
      <template #extra>搜索建议：减少筛选条件或使用更短关键词</template>
    </weui-empty-state>

    <weui-empty-state
      v-else
      icon="weui-icon-warn"
      title="网络异常"
      desc="页面加载失败，请检查网络后重试。"
      :actions="networkActions"
      @action-click="handleAction"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: '空列表', value: 0 },
        { label: '无结果', value: 1 },
        { label: '异常', value: 2 },
      ],
      primaryActions: [{ text: '刷新', type: 'primary' }],
      searchActions: [
        { text: '重新搜索', type: 'primary' },
        { text: '清空条件', type: 'default' },
      ],
      networkActions: [{ text: '重试', type: 'primary' }],
    };
  },
  methods: {
    handleAction(action) {
      uni.showToast({
        title: action.text,
        icon: 'none',
      });
    },
  },
};
</script>

<style>
.page {
  min-height: 100vh;
  background-color: var(--weui-BG-2);
}
</style>
