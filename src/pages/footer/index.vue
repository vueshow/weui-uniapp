<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Footer</view>
      <view class="page__desc">页脚</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <weui-footer text="Copyright © 2008-2022 weui.io" />
      <view class="footer-space" />
      <weui-footer
        text="Copyright © 2008-2022 weui.io"
        :links="singleLinks"
        @link-click="handleLinkClick"
      />
      <view class="footer-space" />
      <weui-footer
        text="Copyright © 2008-2022 weui.io"
        :links="multipleLinks"
        @link-click="handleLinkClick"
      />
      <weui-footer
        fixed
        text="Copyright © 2008-2022 weui.io"
        :links="homeLinks"
        @link-click="handleLinkClick"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      singleLinks: [{ text: '底部链接' }],
      multipleLinks: [{ text: '底部链接' }, { text: '底部链接' }],
      homeLinks: [{ text: 'WeUI首页' }],
    };
  },
  methods: {
    handleLinkClick(link) {
      uni.showToast({
        title: link.text,
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

.footer-space {
  height: 40px;
}
</style>
