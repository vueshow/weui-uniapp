<template>
  <view class="page weui-uni-page">
    <weui-navbar v-model="activeTab" :items="tabs" />

    <weui-msg
      v-if="activeTab === 0"
      title="操作成功"
      desc="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      tips="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      :actions="successActions"
      @action-click="handleAction"
    >
      <template #extra>
        <weui-footer text="Copyright © 2008-2016 weui.io" :links="[{ text: '底部链接文本' }]" />
      </template>
    </weui-msg>

    <weui-msg
      v-else-if="activeTab === 1"
      type="warn"
      title="操作失败"
      desc="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      tips="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      :actions="warnActions"
      @action-click="handleAction"
    >
      <template #extra>
        <weui-footer text="Copyright © 2008-2016 weui.io" :links="[{ text: '底部链接文本' }]" />
      </template>
    </weui-msg>

    <weui-msg
      v-else-if="activeTab === 2"
      type="none"
      title="操作成功"
      desc="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      :actions="successActions"
      @action-click="handleAction"
    />

    <weui-msg
      v-else
      type="none"
      desc="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      primary-desc="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      tips="提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      :actions="successActions"
      @action-click="handleAction"
    >
      <template #custom>
        <view class="preview">
          <view class="preview__item">
            <text class="preview__label">付款金额</text>
            <text class="preview__value">¥2400.00</text>
          </view>
          <view class="preview__item">
            <text class="preview__label">商品名称</text>
            <text class="preview__value">WeUI UniApp</text>
          </view>
        </view>
      </template>
    </weui-msg>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: '成功提示页', value: 0 },
        { label: '失败提示页', value: 1 },
        { label: '无图标提示页', value: 2 },
        { label: '扩展信息', value: 3 },
      ],
      successActions: [
        { text: '推荐操作', type: 'primary', value: 'primary' },
        { text: '辅助操作', type: 'default', value: 'default' },
      ],
      warnActions: [{ text: '辅助操作', type: 'default', value: 'default' }],
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

.preview {
  border-radius: 8px;
  background-color: var(--weui-BG-1);
}

.preview__item {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.5;
}

.preview__item + .preview__item {
  border-top: 1px solid var(--weui-FG-3);
}

.preview__label {
  color: var(--weui-FG-1);
}

.preview__value {
  color: var(--weui-FG-0);
}
</style>
