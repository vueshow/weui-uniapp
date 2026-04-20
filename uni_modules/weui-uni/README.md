# weui-uniapp

WeUI UniApp 是基于 WeUI 视觉体系封装的 uni-app Vue 3 组件库，适用于 H5、小程序等 uni-app 项目。

## 文档

- 文档站：https://vueshow.github.io/weui-uniapp/
- GitHub：https://github.com/vueshow/weui-uniapp
- npm：https://www.npmjs.com/package/weui-uniapp

## 安装

```bash
pnpm add weui-uniapp
```

也可以把本目录作为 `uni_modules/weui-uni` 放入 uni-app 项目中使用。

## 引入样式

在 `App.vue` 中按平台引入：

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

## 全量注册

```js
import { createSSRApp } from 'vue';
import App from './App.vue';
import WeuiUni from 'weui-uniapp';

export function createApp() {
  const app = createSSRApp(App);
  app.use(WeuiUni);
  return { app };
}
```

H5 端可以通过 `app.use(WeuiUni)` 使用全量注册。小程序端需要编译期识别组件，推荐同时在 `pages.json` 配置 easycom：

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

配置后可以直接使用 `<weui-button />`、`<weui-cell />` 等组件标签。

## 基础用法

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

## 组件

当前已包含：

- `weui-actionsheet`
- `weui-agree`
- `weui-article`
- `weui-badge`
- `weui-button`
- `weui-card`
- `weui-cell-group`
- `weui-cell`
- `weui-checkbox`
- `weui-dialog`
- `weui-empty-state`
- `weui-flex`
- `weui-flex-item`
- `weui-footer`
- `weui-form`
- `weui-form-preview`
- `weui-gallery`
- `weui-grid`
- `weui-grid-item`
- `weui-half-screen-dialog`
- `weui-icon`
- `weui-information-bar`
- `weui-input`
- `weui-list-tips`
- `weui-loading`
- `weui-loadmore`
- `weui-msg`
- `weui-navbar`
- `weui-panel`
- `weui-picker`
- `weui-progress`
- `weui-radio`
- `weui-searchbar`
- `weui-slider`
- `weui-steps`
- `weui-switch`
- `weui-tabbar`
- `weui-toast`
- `weui-toptips`
- `weui-uploader`

## 发布前检查

```bash
pnpm pack
```

确认压缩包中包含：

- `index.js`
- `components/`
- `styles/index.scss`
- `styles/mp.scss`
- `styles/weui.css`
- `README.md`
- `package.json`

## 发布

```bash
npm login
npm whoami
pnpm publish --access public
```

如果当前目录不在 git 仓库或 git 状态不干净，可以使用：

```bash
pnpm publish --access public --no-git-checks
```
