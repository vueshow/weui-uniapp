<template>
  <view class="page weui-uni-page">
    <weui-navbar v-model="activeTab" :items="tabs" />

    <weui-form
      v-if="activeTab === 'basic'"
      title="表单结构"
      desc="展示表单页面的信息结构样式，包含头部区域、控件区域、提示区域、操作区域和底部信息区域。"
      tips="表单页提示，居中对齐"
      :actions="formActions"
      @action-click="handleSubmit"
    >
      <view class="weui-cells__group weui-cells__group_form">
        <view class="weui-cells__title">表单组标题</view>
        <view class="weui-cells weui-cells_form">
          <weui-cell extra-class="weui-cell_active">
            <template #left>
              <text class="weui-label">微信号</text>
            </template>
            <weui-input v-model="form.wechat" placeholder="填写本人微信号" />
          </weui-cell>
          <weui-cell extra-class="weui-cell_active">
            <template #left>
              <text class="weui-label">昵称</text>
            </template>
            <weui-input v-model="form.nickname" placeholder="填写本人微信号的昵称" />
          </weui-cell>
          <weui-cell extra-class="weui-cell_active">
            <template #left>
              <text class="weui-label">联系电话</text>
              <view class="weui-cell__desc">副标题</view>
            </template>
            <weui-input v-model="form.phone" type="number" placeholder="填写绑定的电话号码" />
          </weui-cell>
          <weui-cell extra-class="weui-cell_active weui-cell_primary">
            <template #left>
              <text class="weui-label" lang="en">address</text>
            </template>
            <textarea
              v-model="form.address"
              class="weui-textarea"
              placeholder="input your address"
              maxlength="200"
            />
            <view class="weui-textarea-counter">{{ form.address.length }}/200</view>
          </weui-cell>
        </view>
      </view>

      <template #extra>
        <weui-footer text="Copyright © 2008-2019 weui.io" :links="[{ text: '底部链接文本' }]" />
      </template>
    </weui-form>

    <weui-form
      v-else-if="activeTab === 'controls'"
      title="表单控件"
      desc="复用现有 switch、checkbox、radio 等组件，组合成完整表单。"
      :actions="formActions"
      @action-click="handleSubmit"
    >
      <view class="weui-cells__group weui-cells__group_form">
        <view class="weui-cells__title">开关</view>
        <view class="weui-cells weui-cells_form">
          <weui-cell title="接收通知" extra-class="weui-cell_switch">
            <template #right>
              <weui-switch v-model="form.notice" />
            </template>
          </weui-cell>
        </view>
      </view>

      <view class="weui-cells__group weui-cells__group_form">
        <view class="weui-cells__title">复选框</view>
        <view class="weui-cells weui-cells_checkbox">
          <weui-checkbox v-model="form.channels" label="微信" value="wechat" />
          <weui-checkbox v-model="form.channels" label="手机" value="phone" />
          <weui-checkbox v-model="form.channels" label="邮箱" value="email" />
        </view>
      </view>

      <view class="weui-cells__group weui-cells__group_form">
        <view class="weui-cells__title">单选框</view>
        <view class="weui-cells weui-cells_radio">
          <weui-radio v-model="form.gender" label="男" value="male" />
          <weui-radio v-model="form.gender" label="女" value="female" />
        </view>
      </view>
    </weui-form>

    <weui-form
      v-else
      title="表单预览"
      desc="用于展示提交前的摘要信息。"
      :actions="formActions"
      @action-click="handleSubmit"
    >
      <weui-form-preview
        label="付款金额"
        value="¥2400.00"
        :items="previewItems"
        :actions="previewActions"
        @action-click="handlePreviewAction"
      />
    </weui-form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'basic',
      tabs: [
        { label: '表单结构', value: 'basic' },
        { label: '表单控件', value: 'controls' },
        { label: '表单预览', value: 'preview' },
      ],
      form: {
        wechat: '',
        nickname: '',
        phone: '',
        address: '',
        notice: true,
        channels: ['wechat'],
        gender: 'male',
      },
      formActions: [{ text: '确定', type: 'primary', value: 'submit' }],
      previewActions: [
        { text: '辅助操作', type: 'default', value: 'cancel' },
        { text: '主要操作', type: 'primary', value: 'confirm' },
      ],
    };
  },
  computed: {
    previewItems() {
      return [
        { label: '商品名称', value: 'WeUI UniApp' },
        { label: '微信号', value: this.form.wechat || 'weui-demo' },
        { label: '联系电话', value: this.form.phone || '13800138000' },
      ];
    },
  },
  methods: {
    handleSubmit(action) {
      uni.showToast({
        title: action.text,
        icon: 'none',
      });
    },
    handlePreviewAction(action) {
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
  color: var(--weui-FG-0);
}
</style>
