# WeUI Uni

WeUI Uni 是基于本仓库 WeUI 样式体系封装的 uni-app 组件库骨架，目标是在保留 WeUI 视觉语义的同时，提供更适合 uni-app 的 Vue 组件 API。

## 安装

把 `uni_modules/weui-uni` 放到 uni-app 项目的 `uni_modules` 目录下即可使用。当前仓库已经内置该目录。

在 `App.vue` 或全局样式入口中引入基础主题样式：

```scss
@import '@/uni_modules/weui-uni/styles/index.scss';
```

如果项目没有开启 easycom，可以在 `main.js` 中全量注册：

```js
import { createSSRApp } from 'vue';
import App from './App.vue';
import WeuiUni from '@/uni_modules/weui-uni';

export function createApp() {
  const app = createSSRApp(App);
  app.use(WeuiUni);
  return { app };
}
```

## 组件

### weui-button

```vue
<weui-button text="主按钮" />
<weui-button text="普通按钮" type="default" />
<weui-button text="警告按钮" type="warn" />
<weui-button text="小按钮" size="mini" :block="false" />
```

属性：

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | String | '' | 按钮文本，也可使用默认插槽 |
| type | String | primary | primary、default、warn |
| size | String | default | default、medium、mini、xmini |
| plain | Boolean | false | 是否镂空 |
| disabled | Boolean | false | 是否禁用 |
| loading | Boolean | false | 是否展示自定义加载态 |
| nativeLoading | Boolean | false | 是否使用 uni button 原生 loading |
| block | Boolean | true | 是否占满容器宽度 |
| openType | String | '' | 透传给 uni-app button |
| formType | String | '' | 透传给 uni-app button |

### weui-cells / weui-cell

```vue
<weui-cells title="表单信息" tips="辅助说明">
  <weui-cell title="标题文字" value="说明文字" arrow clickable @click="onClick" />
  <weui-cell title="副标题" label="描述信息" />
</weui-cells>
```

`weui-cell` 支持 `icon`、`value`、`label`、`arrow`、`clickable`、`border`，也支持 `icon` 和 `value` 命名插槽。

### weui-badge

```vue
<weui-badge text="8" />
<weui-badge :text="128" :max="99" />
<weui-badge dot />
```

### weui-loadmore

```vue
<weui-loadmore />
<weui-loadmore no-more :loading="false" />
<weui-loadmore empty :loading="false" />
```

## 主题

基础主题变量在 `styles/theme.scss` 中维护。全局引入 `styles/index.scss` 后，会在 `page`、`body` 和 `.wx-root` 上写入 WeUI CSS 变量。

支持的模式：

```html
<view class="weui-uni-page" data-weui-theme="dark">
  ...
</view>

<view class="weui-uni-page" data-weui-mode="care">
  ...
</view>
```

## 当前封装范围

已完成基础骨架和首批高频组件：`weui-button`、`weui-cells`、`weui-cell`、`weui-badge`、`weui-loadmore`。

后续建议按原 WeUI 模块继续补齐：`dialog`、`toast`、`actionsheet`、`searchbar`、`tabbar`、`form`、`uploader`、`steps`。复杂交互组件建议不要直接搬 HTML 示例，而是重新设计 props、events 和 slot API。

## 示例

基础示例在 `uni_modules/weui-uni/examples/basic.vue`，可以复制到 uni-app 项目的 `pages` 目录中运行。
