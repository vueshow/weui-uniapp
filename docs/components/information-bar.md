# Information Bar 信息栏

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/information-bar/index" title="Information Bar 信息栏" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-information-bar` 用于页面顶部或内容区的信息提示，支持警示、提示、弱提示、无色提示以及关闭和链接操作。

## 基础用法

```vue
<weui-information-bar
  v-model="visible"
  type="warn-strong"
  text="当前网络不可用"
  link-text="查看详情"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示，支持 `v-model` | `boolean` | `true` |
| `text` | 提示文字 | `string` | `''` |
| `type` | 类型，可选 `warn-strong`、`warn-weak`、`warn-no-color`、`tips-strong`、`tips-weak` | `string` | `'warn-strong'` |
| `icon` | 左侧图标 class | `string` | `'weui-icon-outlined-warn'` |
| `showIcon` | 是否显示左侧图标 | `boolean` | `true` |
| `linkText` | 右侧链接文字 | `string` | `''` |
| `closeable` | 是否显示关闭按钮 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义提示内容 |
| `left` | 自定义左侧图标 |
| `right` | 自定义右侧操作 |

## Events

| 事件名 | 说明 |
| --- | --- |
| `update:modelValue` | 显示状态变化 |
| `close` | 点击关闭 |
| `link-click` | 点击链接 |

  </div>
</div>
