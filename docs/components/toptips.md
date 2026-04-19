# Toptips 顶部提示

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/toptips/index" title="Toptips 顶部提示" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-toptips` 用于页面顶部错误、成功或信息提示，支持自动关闭和点击关闭。

## 基础用法

```vue
<weui-toptips v-model="visible" type="warn" text="错误提示" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示，支持 `v-model` | `boolean` | `false` |
| `text` | 提示文字 | `string` | `''` |
| `type` | 类型，可选 `warn`、`info`、`success` | `string` | `'warn'` |
| `duration` | 自动关闭时间，`0` 表示不自动关闭 | `number` | `2000` |
| `closable` | 点击提示是否关闭 | `boolean` | `true` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义提示内容 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 显示状态变化 | `visible` |
| `show` | 显示时触发 | - |
| `close` | 关闭时触发 | - |
| `click` | 点击提示条 | `event` |

  </div>
</div>
