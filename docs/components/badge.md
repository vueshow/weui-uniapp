# Badge 徽章

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/badge/index" title="Badge 徽章" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-badge` 用于数字提醒、状态标记和红点提示，可展示数字、文本或仅展示小圆点。

## 基础用法

```vue
<template>
  <weui-badge text="8" />
  <weui-badge text="new" />
  <weui-badge dot />
</template>
```

## 最大值

```vue
<weui-badge :text="120" :max="99" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 徽章内容 | `string \| number` | `''` |
| `dot` | 是否显示为红点 | `boolean` | `false` |
| `max` | 数字超过最大值时显示为 `max+` | `number` | `99` |
| `type` | 类型，可选 `warn`、`primary`、`default` | `string` | `'warn'` |

## Slots

暂无。

## Events

暂无。

  </div>
</div>
