<template>
  <view class="page">
    <view class="page__hd">
      <view class="page__title">Panel</view>
      <view class="page__desc">面板</view>
    </view>
    <view class="page__bd">
      <weui-panel title="图文组合列表" access>
        <weui-card
          v-for="item in appmsgItems"
          :key="item.title"
          type="appmsg"
          :title="item.title"
          :desc="item.desc"
          thumb="/static/pic_160.png"
          clickable
        />
        <template #footer>
          <view class="weui-cell weui-cell_active weui-cell_access weui-cell_link">
            <view class="weui-cell__label">查看更多</view>
            <view class="weui-cell__right" />
          </view>
        </template>
      </weui-panel>

      <weui-panel title="文字组合列表" access>
        <weui-card
          v-for="item in textItems"
          :key="item.title"
          :title="item.title"
          :desc="item.desc"
        />
        <template #footer>
          <view class="weui-cell weui-cell_active weui-cell_access weui-cell_link">
            <view class="weui-cell__label">查看更多</view>
            <view class="weui-cell__right" />
          </view>
        </template>
      </weui-panel>

      <weui-panel title="小图文组合列表">
        <view class="weui-media-box weui-media-box_small-appmsg">
          <view class="weui-cells">
            <view
              v-for="item in smallItems"
              :key="item"
              class="weui-cell weui-cell_active weui-cell_access weui-cell_example"
            >
              <view class="weui-weui-cell__label">
                <image class="small-thumb" src="/static/logo.png" mode="aspectFill" />
              </view>
              <view class="weui-cell__label weui-cell_primary">
                <view>{{ item }}</view>
              </view>
              <view class="weui-cell__right" />
            </view>
          </view>
        </view>
      </weui-panel>

      <weui-panel title="文字列表附来源">
        <weui-card
          title="标题一"
          desc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
          :info="['文字来源', '时间', '其它信息']"
        />
      </weui-panel>
    </view>
  </view>
</template>

<script>
const desc = '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。';

export default {
  data() {
    return {
      appmsgItems: [
        { title: '标题一', desc },
        { title: '标题二', desc },
      ],
      textItems: [
        { title: '标题一', desc },
        { title: '标题二', desc },
      ],
      smallItems: ['文字标题', '文字标题'],
    };
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

.small-thumb {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 16px;
}

.weui-cell_example::before {
  left: 52px;
}
</style>
