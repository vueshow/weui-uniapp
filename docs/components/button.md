# Button 按钮

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/button/index" title="Button 按钮" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-button` 用于触发页面主操作、次操作和警示操作，封装了 WeUI 官方按钮样式，支持加载、禁用、不同尺寸和小程序开放能力。

## 基础用法

```vue
<template>
  <weui-button text="主要操作" />
  <weui-button type="default" text="次要操作" />
  <weui-button type="warn" text="警示操作" />
</template>
```

## 加载与禁用

```vue
<weui-button text="主要操作" loading />
<weui-button text="主要操作" disabled />
```

## 尺寸

```vue
<weui-button size="medium" text="中按钮" />
<weui-button size="mini" text="小按钮" inline />
<weui-button size="xmini" text="超小按钮" inline />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 按钮文字 | `string` | `''` |
| `type` | 按钮类型，可选 `primary`、`default`、`warn` | `string` | `'primary'` |
| `size` | 按钮尺寸，可选 `default`、`medium`、`mini`、`xmini` | `string` | `'default'` |
| `plain` | 是否朴素按钮，预留给 WeUI plain 样式 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `loading` | 是否显示加载状态 | `boolean` | `false` |
| `nativeLoading` | 是否使用原生 button loading | `boolean` | `false` |
| `block` | 是否块级显示 | `boolean` | `false` |
| `inline` | 是否行内显示 | `boolean` | `false` |
| `overlay` | 是否使用 overlay 样式 | `boolean` | `false` |
| `openType` | 小程序开放能力，同原生 button `open-type` | `string` | `''` |
| `formType` | 表单行为，同原生 button `form-type` | `string` | `''` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义按钮内容 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发，禁用或加载状态下不会触发 | `event` |

  </div>
</div>
