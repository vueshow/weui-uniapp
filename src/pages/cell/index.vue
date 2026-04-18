<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Cell</view>
      <view class="page__desc">列表</view>
    </view>
    <view class="page__bd">
      <weui-cell-group title="带说明的列表项">
        <weui-cell title="标题文字" value="说明文字" />
        <weui-cell title="标题文字" value="说明文字" />
      </weui-cell-group>

      <weui-cell-group title="带图标、说明的列表项">
        <weui-cell title="标题文字" value="说明文字">
          <template #icon>
            <image class="demo-icon" src="/static/logo.png" mode="aspectFit" />
          </template>
        </weui-cell>
        <weui-cell title="标题文字" value="说明文字">
          <template #icon>
            <image class="demo-icon" src="/static/logo.png" mode="aspectFit" />
          </template>
        </weui-cell>
      </weui-cell-group>

      <weui-cell-group title="带跳转的列表项">
        <weui-cell title="cell standard" label="副标题" arrow clickable @click="handleClick('access-subtitle')" />
        <weui-cell title="cell standard" arrow clickable @click="handleClick('access')" />
      </weui-cell-group>

      <weui-cell-group title="带说明、跳转的列表项">
        <weui-cell title="cell standard" value="说明文字" arrow clickable @click="handleClick('access-value-1')" />
        <weui-cell title="cell standard" value="说明文字" arrow clickable @click="handleClick('access-value-2')" />
      </weui-cell-group>
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
      })
    },
  },
}
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

.demo-icon {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 16px;
}
</style>
