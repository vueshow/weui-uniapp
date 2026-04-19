# ActionSheet 操作菜单

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/actionsheet/index" title="ActionSheet 操作菜单" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-actionsheet` 用于从底部或页面中部唤起操作菜单，适合展示一组与当前场景相关的操作项。

## 基础用法

```vue
<template>
  <weui-button text="打开菜单" @click="visible = true" />
  <weui-actionsheet
    v-model="visible"
    title="请选择操作"
    :items="items"
    @select="handleSelect"
  />
</template>
```

## Android 样式

```vue
<weui-actionsheet v-model="visible" skin="android" :items="items" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示菜单，支持 `v-model` | `boolean` | `false` |
| `title` | iOS 样式下的标题 | `string` | `''` |
| `items` | 菜单项，支持字符串或对象 `{ label, value, tips, type }` | `array` | `[]` |
| `cancelText` | 取消按钮文字 | `string` | `'取消'` |
| `showCancel` | 是否显示取消按钮 | `boolean` | `true` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `true` |
| `closeOnSelect` | 选择菜单项后是否关闭 | `boolean` | `true` |
| `skin` | 样式类型，可选 `ios`、`android` | `string` | `'ios'` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义菜单区域 |
| `title` | 自定义标题 |
| `action` | 自定义取消操作区域 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 显示状态变化 | `visible` |
| `select` | 点击菜单项 | `item, index` |
| `cancel` | 点击取消按钮 | - |
| `close` | 菜单关闭 | - |

  </div>
</div>
