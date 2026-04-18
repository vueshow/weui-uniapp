<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Dialog</view>
      <view class="page__desc">对话框</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-button type="default" text="样式一" @click="showStyle1" />
      <weui-button type="default" text="样式二" @click="showStyle2" />
      <weui-button type="default" text="样式三" @click="showStyle3" />
    </view>

    <weui-dialog
      v-model="dialog1Visible"
      title="弹窗标题"
      content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
      cancel-text="辅助操作"
      confirm-text="主操作"
      @cancel="handleCancel('样式一')"
      @confirm="handleConfirm('样式一')"
    />

    <weui-dialog
      v-model="dialog2Visible"
      content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
      cancel-text="辅助操作"
      confirm-text="负向操作"
      confirm-type="warn"
      @cancel="handleCancel('样式二')"
      @confirm="handleConfirm('样式二')"
    />

    <weui-dialog
      v-model="dialog3Visible"
      title="弹窗标题"
      content="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
      button-wrap
      cancel-text="辅助操作"
      confirm-text="主操作"
      confirm-type="primary"
      @cancel="handleCancel('样式三')"
      @confirm="handleConfirm('样式三')"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      dialog1Visible: false,
      dialog2Visible: false,
      dialog3Visible: false,
    };
  },
  methods: {
    showStyle1() {
      this.dialog1Visible = true;
    },
    showStyle2() {
      this.dialog2Visible = true;
    },
    showStyle3() {
      this.dialog3Visible = true;
    },
    handleCancel(type) {
      uni.showToast({
        title: `${type} 点击辅助操作`,
        icon: 'none',
      });
    },
    handleConfirm(type) {
      uni.showToast({
        title: `${type} 点击主操作`,
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
