# Agree 协议

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/agree/index" title="Agree 协议" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-agree` 用于协议确认、隐私授权、条款阅读确认等场景，支持默认文案、插槽文案、警示态和禁用态。

## 基础用法

```vue
<template>
  <weui-agree v-model="checked">
    阅读并同意相关协议
  </weui-agree>
</template>
```

## 警示与禁用

```vue
<weui-agree v-model="checked" warn animated text="请先阅读并勾选协议" />
<weui-agree v-model="checked" disabled text="不可操作协议" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否选中，支持 `v-model` | `boolean` | `false` |
| `text` | 默认协议文字 | `string` | `''` |
| `warn` | 是否显示警示态 | `boolean` | `false` |
| `animated` | 是否启用警示动画 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `hotarea` | 是否启用 WeUI 扩展点击热区 | `boolean` | `true` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义协议文本，可放链接或富文本 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 选中状态变化 | `checked` |
| `change` | 选中状态变化 | `checked` |

  </div>
</div>
