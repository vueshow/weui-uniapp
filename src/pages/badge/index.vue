<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Badge</view>
      <view class="page__desc">徽章</view>
    </view>

    <view class="page__bd">
      <view class="weui-cells__title">基础徽章</view>
      <view class="badge-demo">
        <weui-badge text="8" />
        <weui-badge :text="128" :max="99" />
        <weui-badge text="New" />
        <weui-badge dot />
        <weui-badge text="8" type="primary" />
        <weui-badge text="8" type="default" />
      </view>

      <view class="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</view>
      <view class="weui-cells">
        <weui-cell title="单行列表" value="详细信息" arrow clickable>
          <template #right>
            <text class="demo-badge-tips">详细信息</text>
            <weui-badge dot />
          </template>
        </weui-cell>
      </view>

      <view class="weui-cells__title">未读数红点跟在主题信息后，统一在列表左侧</view>
      <view class="weui-cells demo-badge-cells">
        <weui-cell clickable>
          <template #left>
            <view class="avatar-wrap">
              <view class="avatar" />
              <weui-badge text="8" />
            </view>
          </template>
          <view>
            <text>联系人名称</text>
            <view class="demo-badge-desc">摘要信息</view>
          </view>
        </weui-cell>

        <weui-cell arrow clickable>
          <view>
            <text class="demo-badge-title">单行列表</text>
            <weui-badge text="8" />
          </view>
        </weui-cell>

        <weui-cell value="详细信息" arrow clickable>
          <view>
            <text class="demo-badge-title">单行列表</text>
            <weui-badge text="8" />
          </view>
        </weui-cell>

        <weui-cell arrow clickable>
          <view>
            <text class="demo-badge-title">单行列表</text>
            <weui-badge text="New" />
          </view>
        </weui-cell>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
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

.badge-demo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: var(--weui-BG-2);
}

.demo-badge-tips {
  margin-right: 8px;
  color: var(--weui-FG-1);
  font-size: 14px;
}

.demo-badge-cells .weui-badge {
  margin-left: 8px;
}

.avatar-wrap {
  position: relative;
  margin-right: 16px;
}

.avatar-wrap .weui-badge {
  position: absolute;
  top: -6px;
  right: -8px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background: linear-gradient(135deg, #d8e8ff, #95c5ff);
}

.demo-badge-title {
  vertical-align: middle;
}

.demo-badge-desc {
  margin-top: 4px;
  color: var(--weui-FG-1);
  font-size: 14px;
}
</style>
