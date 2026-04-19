# Flex 布局

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/flex/index" title="Flex 布局" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-flex` 和 `weui-flex-item` 是 WeUI 的基础弹性布局组件，用于等分列、横向排版等轻量布局场景。

## 基础用法

```vue
<template>
  <weui-flex>
    <weui-flex-item>weui</weui-flex-item>
    <weui-flex-item>weui</weui-flex-item>
    <weui-flex-item>weui</weui-flex-item>
  </weui-flex>
</template>
```

## API

`weui-flex` 和 `weui-flex-item` 仅提供布局 class，没有额外 Props 和 Events。

## Slots

| 组件 | 插槽名 | 说明 |
| --- | --- | --- |
| `weui-flex` | `default` | 布局内容，通常放置 `weui-flex-item` |
| `weui-flex-item` | `default` | 单个布局项内容 |

  </div>
</div>
