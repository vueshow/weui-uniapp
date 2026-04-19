# Checkbox 复选框

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/checkbox/index" title="Checkbox 复选框" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-checkbox` 用于多选场景，可绑定布尔值，也可绑定数组实现多项选择。

## 基础用法

```vue
<template>
  <weui-cell-group variant="checkbox">
    <weui-checkbox v-model="checkedValues" value="wechat" label="微信" />
    <weui-checkbox v-model="checkedValues" value="phone" label="手机" />
  </weui-cell-group>
</template>
```

## 单个布尔值

```vue
<weui-checkbox v-model="checked" label="同意协议" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前值，支持 `boolean` 或数组 | `boolean \| array` | `false` |
| `label` | 选项文字 | `string` | `''` |
| `value` | 选项值，数组模式下会写入数组 | `string \| number \| boolean` | `true` |
| `disabled` | 是否禁用 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义选项文字 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 值变化 | `value` |
| `change` | 值变化 | `value` |

  </div>
</div>
