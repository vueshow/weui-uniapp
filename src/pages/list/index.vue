<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">List</view>
      <view class="page__desc">列表</view>
    </view>
    <view class="page__bd">
      <weui-panel title="文字组合列表">
        <weui-card
          title="标题一"
          desc="由各种单行列表的基础样式组合而成，可承载更丰富的图文内容。"
          :info="['文字来源', '时间', '其他信息']"
          clickable
          @click="handleClick('text-1')"
        />
        <weui-card
          title="标题二"
          desc="列表支持标题、摘要与附加信息，默认和官方 WeUI 的排版节奏保持一致。"
          :info="['说明', '更多']"
          clickable
          @click="handleClick('text-2')"
        />
      </weui-panel>

      <weui-panel title="图文组合列表">
        <weui-card
          type="appmsg"
          title="标题一"
          desc="这里是描述信息，和官方的 appmsg 结构一致，包含左侧缩略图与右侧内容区。"
          thumb="/static/logo.png"
          clickable
          @click="handleClick('appmsg-1')"
        />
        <weui-card
          type="appmsg"
          title="标题二"
          desc="用于新闻、通知、公告等中等信息密度场景。"
          thumb="/static/logo.png"
          clickable
          @click="handleClick('appmsg-2')"
        />
      </weui-panel>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleClick(type) {
      uni.showToast({
        title: `点击: ${type}`,
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

.page__bd {
  padding-bottom: 20px;
}
</style>
