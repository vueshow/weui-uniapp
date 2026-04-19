# Dialog 对话框

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/dialog/index" title="Dialog 对话框" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-dialog` 用于确认、提醒、二次确认等强反馈场景，支持单按钮、双按钮、警示按钮和自定义内容。

## 基础用法

```vue
<template>
  <weui-button text="打开弹窗" @click="visible = true" />
  <weui-dialog
    v-model="visible"
    title="弹窗标题"
    content="弹窗内容，告知当前状态、信息和解决方法。"
  />
</template>
```

## 自定义内容

```vue
<weui-dialog v-model="visible" title="确认操作">
  这里可以放自定义内容。
</weui-dialog>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示弹窗，支持 `v-model` | `boolean` | `false` |
| `title` | 标题 | `string` | `''` |
| `content` | 内容 | `string` | `''` |
| `cancelText` | 取消按钮文字 | `string` | `'辅助操作'` |
| `confirmText` | 确认按钮文字 | `string` | `'主操作'` |
| `confirmType` | 确认按钮类型，可选 `primary`、`warn`、`default` | `string` | `'primary'` |
| `showCancel` | 是否显示取消按钮 | `boolean` | `true` |
| `buttonWrap` | 按钮是否换行排列 | `boolean` | `false` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义内容 |
| `title` | 自定义标题 |

## Events

| 事件名 | 说明 |
| --- | --- |
| `update:modelValue` | 显示状态变化 |
| `cancel` | 点击取消按钮 |
| `confirm` | 点击确认按钮 |
| `close` | 弹窗关闭 |

  </div>
</div>
