<template>
  <view class="page">
    <view class="page__hd">
      <view class="page__title">Preview</view>
      <view class="page__desc">表单预览</view>
    </view>
    <view class="page__bd">
      <weui-form-preview
        label="付款金额"
        value="¥2400.00"
        :items="items"
        :actions="primaryActions"
        @action-click="handleAction"
      />
      <view class="preview-gap" />
      <weui-form-preview
        label="付款金额"
        value="¥2400.00"
        :items="items"
        :actions="twoActions"
        @action-click="handleAction"
      >
        <template #header>
          <text class="weui-form-preview__label">付款金额</text>
          <text class="weui-form-preview__value">¥2400.00</text>
        </template>
      </weui-form-preview>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: '商品', value: '电动打蛋机' },
        { label: '标题标题', value: '名字名字名字' },
        {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字',
        },
      ],
      primaryActions: [{ text: '操作', type: 'primary' }],
      twoActions: [
        { text: '辅助操作', type: 'default' },
        { text: '操作', type: 'primary' },
      ],
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

.preview-gap {
  height: 20px;
}

.weui-form-preview__btn::after {
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
}
</style>
