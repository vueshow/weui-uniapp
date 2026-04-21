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
        <weui-cell
          title="cell standard"
          label="副标题"
          arrow
          clickable
          @click="handleClick('access-subtitle')"
        />
        <weui-cell title="cell standard" arrow clickable @click="handleClick('access')" />
      </weui-cell-group>

      <weui-cell-group title="带说明、跳转的列表项">
        <weui-cell
          title="cell standard"
          value="说明文字"
          arrow
          clickable
          @click="handleClick('access-value-1')"
        />
        <weui-cell
          title="cell standard"
          value="说明文字"
          arrow
          clickable
          @click="handleClick('access-value-2')"
        />
      </weui-cell-group>

      <weui-cell-group title="is-link 便捷属性">
        <weui-cell title="is-link 基础用法" is-link @click="handleClick('is-link')" />
        <weui-cell title="is-link + value" value="详情" is-link @click="handleClick('is-link-value')" />
      </weui-cell-group>

      <weui-cell-group title="必填星号">
        <weui-cell title="用户名" value="请输入" required />
        <weui-cell title="手机号" value="请输入" required is-link />
      </weui-cell-group>

      <weui-cell-group title="禁用状态">
        <weui-cell title="已禁用" value="不可操作" disabled />
        <weui-cell title="已禁用链接" value="不可跳转" disabled is-link />
      </weui-cell-group>

      <weui-cell-group title="大尺寸">
        <weui-cell title="大尺寸单元格" value="内容" size="large" />
        <weui-cell title="大尺寸 + 标签" label="描述信息" size="large" is-link />
      </weui-cell-group>

      <weui-cell-group title="箭头方向">
        <weui-cell title="向下" value="展开" is-link arrow-direction="down" />
        <weui-cell title="向上" value="收起" is-link arrow-direction="up" />
        <weui-cell title="向左" value="返回" is-link arrow-direction="left" />
      </weui-cell-group>

      <weui-cell-group title="自定义插槽">
        <weui-cell title="自定义标题">
          <template #value>
            <text style="color: #07c160">自定义值</text>
          </template>
        </weui-cell>
        <weui-cell>
          <template #title>
            <text style="color: #1989fa; font-weight: bold">自定义标题插槽</text>
          </template>
          <template #label>
            <text style="color: #ff976a">自定义描述插槽</text>
          </template>
        </weui-cell>
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

.demo-icon {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 16px;
}
</style>
