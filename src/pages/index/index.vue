<template>
  <view class="weui-uni-page nav-page">
    <view class="hero">
      <view class="hero__title">WeUI UniApp 组件库</view>
      <view class="hero__desc">一个组件一个演示页面，便于逐步扩展和验收。</view>
    </view>

    <weui-cell-group title="基础组件" tips="先完善 button，其它组件按同样模式扩展">
      <weui-cell
        title="Button 按钮"
        label="类型、尺寸、状态、事件"
        value="查看"
        arrow
        clickable
        @click="goButton"
      />
      <weui-cell
        title="Loading 加载"
        label="loading、mask loading、品牌色"
        value="查看"
        arrow
        clickable
        @click="goLoading"
      />
      <weui-cell
        title="Cell 列表项"
        label="普通、带图标、带跳转"
        value="查看"
        arrow
        clickable
        @click="goCell"
      />
      <weui-cell
        title="Input 输入框"
        label="文本框、表单、验证码位"
        value="查看"
        arrow
        clickable
        @click="goInput"
      />
    </weui-cell-group>
  </view>
</template>

<script>
export default {
  methods: {
    go(url) {
      uni.navigateTo({
        url,
        fail: () => {
          if (typeof window !== 'undefined') {
            window.location.hash = `#${url}`
          }
        },
      })
    },
    goButton() {
      this.go('/pages/button/index')
    },
    goLoading() {
      this.go('/pages/loading/index')
    },
    goCell() {
      this.go('/pages/cell/index')
    },
    goInput() {
      this.go('/pages/input/index')
    },
  },
}
</script>

<style>
.nav-page {
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 12px;
}

.hero {
  margin: 12px 16px 0;
  padding: 20px 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, #e6f7ef, #f4fbf7);
}

.hero__title {
  color: #0b5e36;
  font-size: 20px;
  font-weight: 600;
}

.hero__desc {
  margin-top: 8px;
  color: #2c6b4f;
  font-size: 14px;
  line-height: 1.5;
}
</style>
