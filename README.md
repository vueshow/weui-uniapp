# WeUI UniApp

基于 WeUI 视觉体系封装的 uni-app Vue 3 组件库，面向 H5、小程序和多端 uni-app 应用。

[![npm version](https://img.shields.io/npm/v/weui-uniapp.svg)](https://www.npmjs.com/package/weui-uniapp)
[![license](https://img.shields.io/npm/l/weui-uniapp.svg)](./LICENSE)
[![docs](https://img.shields.io/badge/docs-GitHub%20Pages-07c160)](https://vueshow.github.io/weui-uniapp/)

## 特性

- 遵循 WeUI 官方视觉风格，尽量减少 H5 和小程序端体验差异。
- 支持 uni-app Vue 3 项目，可通过插件全量注册，也可配合 easycom 使用。
- 组件源码、演示页面和 VitePress 文档站同仓库维护。
- 文档站内置手机预览，线上示例直接复用 uni-app H5 demo。

## 文档

- 文档站：https://vueshow.github.io/weui-uniapp/
- npm：https://www.npmjs.com/package/weui-uniapp
- GitHub：https://github.com/vueshow/weui-uniapp

## 安装

```bash
pnpm add weui-uniapp
```

也可以使用 npm：

```bash
npm install weui-uniapp
```

## 使用

在 `src/main.js` 或 `src/main.ts` 中注册组件库并引入样式：

```js
import { createSSRApp } from 'vue';
import WeuiUni from 'weui-uniapp';
import App from './App.vue';

import 'weui-uniapp/styles/index.scss';

export function createApp() {
  const app = createSSRApp(App);
  app.use(WeuiUni);
  return { app };
}
```

页面中直接使用组件：

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

如果项目暂时不方便编译 Sass，也可以引入完整 CSS：

```js
import 'weui-uniapp/styles/weui.css';
```

## 已实现组件

当前包含 Button、Cell、Loading、Toast、Dialog、Picker、Form、Searchbar、Tabbar、Navbar、Grid、Gallery、Progress、Uploader、Half-screen Dialog、Empty State 等 WeUI 常用组件。

完整组件列表和 API 请查看文档站的组件页面。

## 本地开发

安装依赖：

```bash
pnpm install
```

启动 uni-app H5 演示：

```bash
pnpm dev:h5
```

启动文档站：

```bash
pnpm docs:dev
```

也可以同时启动演示和文档：

```bash
pnpm site:dev
```

构建文档站和线上 H5 demo：

```bash
pnpm site:build
```

## npm 发包

打包检查：

```bash
pnpm lib:check
```

发布：

```bash
pnpm lib:publish
```

包源码位于 `uni_modules/weui-uni`，发布到 npm 时只包含组件库必要文件，不包含文档站和 demo 工程产物。

## GitHub Pages

仓库已经包含 GitHub Actions 配置：`.github/workflows/docs.yml`。

首次使用时需要在 GitHub 仓库中启用：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

之后每次推送到 `main` 分支都会自动构建并发布文档。

## License

MIT
