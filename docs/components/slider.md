# Slider 滑块

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/slider/index" title="Slider 滑块" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-slider` 用于在连续或分段范围内选择数值，支持最小值、最大值、步长、实时值展示和禁用状态。

## 基础用法

```vue
<weui-slider v-model="value" show-value />
```

## 步长

```vue
<weui-slider v-model="value" :step="10" show-value />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前值，支持 `v-model` | `number` | `0` |
| `min` | 最小值 | `number` | `0` |
| `max` | 最大值 | `number` | `100` |
| `step` | 步长 | `number` | `1` |
| `showValue` | 是否显示当前值 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 值变化 | `value` |
| `changing` | 拖动过程中触发 | `value` |
| `change` | 鼠标拖动结束时触发 | `value` |

  </div>
</div>
