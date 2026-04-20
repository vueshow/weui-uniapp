# 安装使用

## 引入样式

推荐在 `App.vue` 中按平台引入 Sass：

```scss
/* #ifdef MP */
@import 'weui-uniapp/styles/mp.scss';
/* #endif */

/* #ifndef MP */
@import 'weui-uniapp/styles/index.scss';
/* #endif */
```

H5 项目如果不方便编译 Sass，也可以直接引入完整 CSS。小程序端请使用 `styles/mp.scss`，不要把完整 H5 CSS 打进 WXSS：

```css
@import 'weui-uniapp/styles/weui.css';
```

## 小程序 easycom

H5 可以通过 `app.use(WeuiUni)` 在运行时注册组件；小程序需要在编译期识别组件，请在 `pages.json` 配置 easycom：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^weui-(.*)": "weui-uniapp/components/weui-$1/weui-$1.vue"
    }
  }
}
```

## 基础示例

```vue
<template>
  <view class="weui-uni-page">
    <weui-button text="主要操作" />
    <weui-cell-group title="列表">
      <weui-cell title="标题文字" value="说明文字" arrow clickable />
    </weui-cell-group>
  </view>
</template>
```
