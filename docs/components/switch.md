# Switch 开关

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/switch/index" title="Switch 开关" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-switch` 用于开关类设置项，支持 `v-model` 和禁用状态，常放在 `weui-cell` 的右侧。

## 基础用法

```vue
<weui-cell title="标题文字">
  <template #right>
    <weui-switch v-model="checked" />
  </template>
</weui-cell>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否开启，支持 `v-model` | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 开关状态变化 | `checked` |
| `change` | 开关状态变化 | `checked` |

  </div>
</div>
