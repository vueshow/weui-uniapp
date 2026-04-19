# Form Preview 表单预览

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/form-preview/index" title="Form Preview 表单预览" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-form-preview` 用于提交前确认、账单信息、支付结果明细等只读信息展示。

## 基础用法

```vue
<weui-form-preview
  label="付款金额"
  value="¥2400.00"
  :items="[{ label: '商品', value: '微信气泡狗' }]"
  :actions="[{ text: '辅助操作' }, { text: '主操作', type: 'primary' }]"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 顶部左侧标签 | `string` | `''` |
| `value` | 顶部右侧值 | `string` | `''` |
| `items` | 明细项数组，支持 `{ label, value }` | `array` | `[]` |
| `actions` | 操作按钮数组，支持 `{ text, type }` | `array` | `[]` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `header` | 自定义头部 |
| `default` | 自定义明细区域 |
| `actions` | 自定义操作区域 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `action-click` | 点击默认操作按钮 | `action, index` |

  </div>
</div>
