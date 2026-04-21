<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Half-screen Dialog</view>
      <view class="page__desc">半屏组件</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <button
        class="weui-btn weui-btn_default"
        hover-class="weui-btn_active"
        @click="showDialog('dialog1')"
      >
        样式一
      </button>
      <button
        class="weui-btn weui-btn_default"
        hover-class="weui-btn_active"
        @click="showDialog('dialog2')"
      >
        样式二
      </button>
      <button
        class="weui-btn weui-btn_default"
        hover-class="weui-btn_active"
        @click="showDialog('dialog3')"
      >
        样式三
      </button>
      <button
        class="weui-btn weui-btn_default"
        hover-class="weui-btn_active"
        @click="showDialog('dialog4')"
      >
        样式四
      </button>
      <button
        class="weui-btn weui-btn_default"
        hover-class="weui-btn_active"
        @click="showDialog('dialog5')"
      >
        样式五
      </button>
    </view>

    <weui-half-screen-dialog v-model="dialog1" title="标题" subtitle="副标题">
      <template #right>
        <view class="weui-half-screen-dialog__hd__action-group">
          <button
            class="weui-half-screen-dialog__hd__action weui-btn_icon weui-wa-hotarea"
            hover-class="none"
          >
            搜索
            <text class="weui-icon-search" />
          </button>
          <button
            class="weui-half-screen-dialog__hd__action weui-btn_icon weui-wa-hotarea"
            hover-class="none"
          >
            更多
            <text class="weui-icon-more" />
          </button>
          <text class="weui-half-screen-dialog__hd__action weui-link weui-wa-hotarea">完成</text>
        </view>
      </template>
      <view class="demo-space" />
      可放自定义内容
      <view class="demo-space demo-space_large" />
    </weui-half-screen-dialog>

    <weui-half-screen-dialog
      v-model="dialog2"
      title="标题"
      close-icon="slide-down"
      bottom-fixed
      :actions="nextActions"
    >
      <template #right>
        <button class="weui-btn_icon weui-wa-hotarea" hover-class="none">
          更多
          <text class="weui-icon-more" />
        </button>
      </template>
      <view class="weui-half-screen-dialog__desc">辅助描述内容，可根据实际需要安排</view>
      <view class="weui-half-screen-dialog__tips">
        辅助提示内容，可根据实际需要安排 Dolor adipisci quidem consequuntur similique consequuntur
        doloribus modi possimus sunt voluptas qui Aspernatur natus error quisquam quidem ipsa
        corrupti! Dignissimos quasi quis natus fugiat odio in? Mollitia molestias error earum. Dolor
        adipisci quidem consequuntur similique consequuntur doloribus modi possimus sunt voluptas
        qui Aspernatur natus error quisquam quidem ipsa corrupti! Dignissimos quasi quis natus
        fugiat odio in? Mollitia molestias error earum. Dolor adipisci quidem consequuntur similique
        consequuntur doloribus modi possimus sunt voluptas qui Aspernatur natus error quisquam
        quidem ipsa corrupti! Dignissimos quasi quis natus fugiat odio in? Mollitia molestias error
        earum. Dolor adipisci quidem consequuntur similique consequuntur doloribus modi possimus
        sunt voluptas qui Aspernatur natus error quisquam quidem ipsa corrupti! Dignissimos quasi
        quis natus fugiat odio in? Mollitia molestias error earum. Dolor adipisci quidem
        consequuntur similique consequuntur doloribus modi possimus sunt voluptas qui Aspernatur
        natus error quisquam quidem ipsa corrupti! Dignissimos quasi quis natus fugiat odio in?
        Mollitia molestias error earum.
      </view>
    </weui-half-screen-dialog>

    <weui-half-screen-dialog
      v-model="dialog3"
      large
      attachment="附加操作"
      :actions="mainActions"
      @attachment-click="handleAttachment"
    >
      <template #header>
        <view class="weui-half-screen-dialog__hd__main">
          <view class="user-title">
            <view class="user-title__avatar" />
            昵称
          </view>
        </view>
      </template>
      <view class="demo-space demo-space_small" />
      可放自定义内容
      <view class="demo-space demo-space_xsmall" />
    </weui-half-screen-dialog>

    <weui-half-screen-dialog
      v-model="dialog4"
      attachment="附加操作"
      :actions="wrapActions"
      button-wrap
      @attachment-click="handleAttachment"
    >
      <template #header>
        <view class="weui-half-screen-dialog__hd__main">
          <view class="user-title">
            <view class="user-title__avatar" />
            昵称
          </view>
        </view>
      </template>
      <view class="weui-form__tips__group">
        <view class="weui-form__tips__wrp">
          <weui-agree v-model="agreeTerms">
            阅读并同意
            <text class="weui-link">《相关条款》</text>
          </weui-agree>
        </view>
        <view class="weui-form__tips__wrp">
          <weui-agree v-model="agreeIdentity" text="以上信息用于核对账号绑定的身份" />
        </view>
      </view>
    </weui-half-screen-dialog>

    <weui-half-screen-dialog v-model="dialog5" title="标题" close-icon="slide-down" grab>
      <template #right>
        <view class="weui-half-screen-dialog__hd__action-group">
          <button
            class="weui-half-screen-dialog__hd__action weui-btn_icon weui-wa-hotarea"
            hover-class="none"
          >
            搜索
            <text class="weui-icon-search" />
          </button>
          <button
            class="weui-half-screen-dialog__hd__action weui-btn_icon weui-wa-hotarea"
            hover-class="none"
          >
            更多
            <text class="weui-icon-more" />
          </button>
          <button
            class="weui-half-screen-dialog__hd__action weui-btn weui-btn_primary weui-btn_xmini"
            hover-class="weui-btn_active"
          >
            完成
          </button>
        </view>
      </template>
      <view class="demo-space" />
      可放自定义内容
      <view class="demo-space demo-space_large" />
    </weui-half-screen-dialog>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      agreeTerms: false,
      agreeIdentity: false,
      mainActions: [
        { text: '次要操作', type: 'default' },
        { text: '主要操作', type: 'primary' },
      ],
      wrapActions: [
        { text: '非主要操作', type: 'default' },
        { text: '主要操作', type: 'primary' },
      ],
      nextActions: [
        { text: '次要操作', type: 'default' },
        { text: '同意下一步', type: 'primary' },
      ],
    };
  },
  methods: {
    showDialog(name) {
      this[name] = true;
    },
    handleAttachment() {
      uni.showToast({
        title: '附加操作',
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

.demo-space {
  height: 28px;
}

.demo-space_large {
  height: 84px;
}

.demo-space_small {
  height: 24px;
}

.demo-space_xsmall {
  height: 14px;
}

.user-title {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.user-title__avatar {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f1f1f1, #c8c8c8);
}

.weui-btn::after,
.weui-btn_icon::after {
  border: 0;
}

.weui-half-screen-dialog__hd__action {
  flex-shrink: 0;
  white-space: nowrap;
}
</style>
