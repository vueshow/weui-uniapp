# Radio 单选框

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/radio/index" title="Radio 单选框" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-radio` 用于单选列表，通常放在 `weui-cell-group variant="radio"` 中使用。

## 基础用法

```vue
<weui-cell-group variant="radio">
  <weui-radio v-model="value" label="选项一" value="1" />
  <weui-radio v-model="value" label="选项二" value="2" />
</weui-cell-group>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值，支持 `v-model` | `string \| number \| boolean` | `''` |
| `label` | 选项文字 | `string` | `''` |
| `value` | 当前选项值 | `string \| number \| boolean` | `''` |
| `disabled` | 是否禁用 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义选项文字 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 选中值变化 | `value` |
| `change` | 选中值变化 | `value` |

  </div>
</div>
