# Toast 提示

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/toast/index" title="Toast 提示" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-toast` 用于轻量反馈，支持成功、警示、加载和纯文字提示。

## 基础用法

```vue
<weui-toast v-model="visible" type="success" text="已完成" />
<weui-toast v-model="loading" type="loading" text="加载中" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示，支持 `v-model` | `boolean` | `false` |
| `type` | 类型，可选 `success`、`warn`、`loading`、`text` | `string` | `'success'` |
| `text` | 提示文字 | `string` | `''` |
| `textMore` | 是否使用多行文字样式 | `boolean` | `false` |
| `mask` | 是否显示透明遮罩 | `boolean` | `true` |
| `closable` | 点击遮罩是否关闭 | `boolean` | `false` |

## Events

| 事件名 | 说明 |
| --- | --- |
| `update:modelValue` | 显示状态变化 |
| `close` | 关闭时触发 |

  </div>
</div>
