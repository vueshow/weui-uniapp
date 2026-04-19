# Picker 选择器

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/picker/index" title="Picker 选择器" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-picker` 提供底部半屏选择器，视觉结构参考官方 WeUI picker，支持单列、多列和日期选择。

## 基础用法

```vue
<template>
  <weui-button type="default" text="日期选择器" @click="visible = true" />
  <weui-picker
    v-model="date"
    v-model:visible="visible"
    mode="date"
    title="多列选择器"
    start="1990"
    end="2026"
  />
</template>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值 | `string \| number \| array` | `''` |
| `visible` | 是否显示弹层 | `boolean` | `false` |
| `mode` | 选择器模式，可选 `selector`、`multiSelector`、`date` | `string` | `selector` |
| `title` | 弹层标题 | `string` | `''` |
| `range` | 选项列表 | `array` | `[]` |
| `showClose` | 是否显示关闭按钮 | `boolean` | `true` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `true` |

### Events

| 事件名 | 说明 |
| --- | --- |
| `change` | 滚动选项时触发 |
| `confirm` | 点击确定时触发 |
| `cancel` | 点击遮罩或关闭按钮时触发 |

  </div>
</div>
