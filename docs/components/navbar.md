# Navbar 顶部导航

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/navbar/index" title="Navbar 顶部导航" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-navbar` 用于页面顶部的分段切换，适合切换同一页面内的不同内容区域。

## 基础用法

```vue
<weui-navbar
  v-model="active"
  :items="[
    { label: '选项一', value: 'a' },
    { label: '选项二', value: 'b' }
  ]"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值，支持 `v-model` | `string \| number` | `''` |
| `items` | 导航项数组，支持 `{ label, value, disabled }` | `array` | `[]` |

## Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `item` | 自定义单个导航项 | `{ item, index, active }` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 选中值变化 | `value` |
| `change` | 切换导航项 | `item, index` |

  </div>
</div>
