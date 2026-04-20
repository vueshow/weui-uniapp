# 快速开始

`weui-uniapp` 是基于 WeUI 视觉体系封装的 uni-app Vue 3 组件库。当前文档站使用 VitePress 构建，右侧手机预览复用项目里的 uni-app H5 演示页面。

## 安装

```bash
pnpm add weui-uniapp
```

## 全局注册

在 `src/main.js` 或项目入口中注册插件：

```js
import { createSSRApp } from 'vue';
import WeuiUni from 'weui-uniapp';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);
  app.use(WeuiUni);
  return { app };
}
```

在 `App.vue` 中按平台引入样式：

```scss
/* #ifdef MP */
@import 'weui-uniapp/styles/mp.scss';
/* #endif */

/* #ifndef MP */
@import 'weui-uniapp/styles/index.scss';
/* #endif */
```

## 开发文档站

开发文档时建议同时启动 uni-app H5 和 VitePress：

```bash
pnpm dev:h5
pnpm docs:dev
```

默认文档 iframe 会访问：

```text
http://127.0.0.1:5175/#/pages/button/index
```
