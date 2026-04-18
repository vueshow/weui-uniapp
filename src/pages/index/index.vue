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
      <weui-cell
        title="List 列表"
        label="文字组合、图文组合"
        value="查看"
        arrow
        clickable
        @click="goList"
      />
      <weui-cell
        title="Toast 提示"
        label="成功、失败、加载、文字提示"
        value="查看"
        arrow
        clickable
        @click="goToast"
      />
      <weui-cell
        title="Dialog 对话框"
        label="样式一、样式二、样式三"
        value="查看"
        arrow
        clickable
        @click="goDialog"
      />
      <weui-cell
        title="Picker 选择器"
        label="单列、多列、日期、时间"
        value="查看"
        arrow
        clickable
        @click="goPicker"
      />
      <weui-cell
        title="Switch 开关"
        label="开启、关闭、禁用"
        value="查看"
        arrow
        clickable
        @click="goSwitch"
      />
      <weui-cell
        title="Checkbox 复选框"
        label="复选列表项、禁用状态"
        value="查看"
        arrow
        clickable
        @click="goCheckbox"
      />
      <weui-cell
        title="Radio 单选框"
        label="单选列表项、禁用状态"
        value="查看"
        arrow
        clickable
        @click="goRadio"
      />
      <weui-cell
        title="Slider 滑块"
        label="拖动、数值、步进"
        value="查看"
        arrow
        clickable
        @click="goSlider"
      />
      <weui-cell
        title="Uploader 上传"
        label="图片选择、预览、删除"
        value="查看"
        arrow
        clickable
        @click="goUploader"
      />
      <weui-cell
        title="Gallery 画廊"
        label="大图预览、删除"
        value="查看"
        arrow
        clickable
        @click="goGallery"
      />
      <weui-cell
        title="Progress 进度条"
        label="进度展示、取消操作"
        value="查看"
        arrow
        clickable
        @click="goProgress"
      />
      <weui-cell
        title="Tabbar 底部导航"
        label="选项、徽标、红点"
        value="查看"
        arrow
        clickable
        @click="goTabbar"
      />
      <weui-cell
        title="Navbar 顶部导航"
        label="页内选项切换"
        value="查看"
        arrow
        clickable
        @click="goNavbar"
      />
      <weui-cell
        title="Grid 九宫格"
        label="宫格入口"
        value="查看"
        arrow
        clickable
        @click="goGrid"
      />
      <weui-cell
        title="Article 文章"
        label="标题、段落、图片、列表"
        value="查看"
        arrow
        clickable
        @click="goArticle"
      />
      <weui-cell
        title="Footer 页脚"
        label="版权、链接、固定底部"
        value="查看"
        arrow
        clickable
        @click="goFooter"
      />
      <weui-cell
        title="Flex 布局"
        label="等分、自适应"
        value="查看"
        arrow
        clickable
        @click="goFlex"
      />
      <weui-cell
        title="ActionSheet 弹出菜单"
        label="iOS、Android 样式"
        value="查看"
        arrow
        clickable
        @click="goActionsheet"
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
    goList() {
      this.go('/pages/list/index')
    },
    goToast() {
      this.go('/pages/toast/index')
    },
    goDialog() {
      this.go('/pages/dialog/index')
    },
    goPicker() {
      this.go('/pages/picker/index')
    },
    goSwitch() {
      this.go('/pages/switch/index')
    },
    goCheckbox() {
      this.go('/pages/checkbox/index')
    },
    goRadio() {
      this.go('/pages/radio/index')
    },
    goSlider() {
      this.go('/pages/slider/index')
    },
    goUploader() {
      this.go('/pages/uploader/index')
    },
    goGallery() {
      this.go('/pages/gallery/index')
    },
    goProgress() {
      this.go('/pages/progress/index')
    },
    goTabbar() {
      this.go('/pages/tabbar/index')
    },
    goNavbar() {
      this.go('/pages/navbar/index')
    },
    goGrid() {
      this.go('/pages/grid/index')
    },
    goArticle() {
      this.go('/pages/article/index')
    },
    goFooter() {
      this.go('/pages/footer/index')
    },
    goFlex() {
      this.go('/pages/flex/index')
    },
    goActionsheet() {
      this.go('/pages/actionsheet/index')
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
