# Button 按钮

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/button/index" title="Button 按钮" />
  </div>
  <div class="demo-layout__main">

## 介绍

按钮用于触发一个操作，如提交表单、确认弹窗、发起支付等。`weui-button` 封装了 WeUI 官方按钮样式，支持主要、次要、警示、加载、禁用和不同尺寸。

## 引入

全局注册后可直接使用：

```vue
<weui-button text="主要操作" />
```

## 基础用法

```vue
<template>
  <weui-button text="主要操作" />
  <weui-button type="default" text="次要操作" />
  <weui-button type="warn" text="警示操作" />
</template>
```

## 加载状态

```vue
<template>
  <weui-button text="主要操作" loading />
  <weui-button type="default" text="次要操作" loading />
</template>
```

## 禁用状态

```vue
<template>
  <weui-button text="主要操作" disabled />
</template>
```

## API

<div class="api-table">

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 按钮类型，可选 `primary`、`default`、`warn` | `string` | `primary` |
| `text` | 按钮文字 | `string` | `''` |
| `size` | 按钮尺寸，可选 `default`、`medium`、`mini` | `string` | `default` |
| `loading` | 是否显示加载状态 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |

</div>

### Events

| 事件名 | 说明 |
| --- | --- |
| `click` | 点击按钮时触发，禁用或加载状态下不会触发 |

  </div>
</div>
