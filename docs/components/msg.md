# Msg 提示页

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/msg/index" title="Msg 提示页" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-msg` 用于结果页、状态页和业务反馈页，支持成功、警示、信息、等待和无图标样式。

## 基础用法

```vue
<weui-msg
  type="success"
  title="操作成功"
  desc="内容详情，可根据实际需要安排"
  :actions="[{ text: '推荐操作' }, { text: '辅助操作', type: 'default' }]"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 类型，可选 `success`、`warn`、`info`、`waiting`、`none` | `string` | `'success'` |
| `title` | 标题 | `string` | `''` |
| `desc` | 描述 | `string` | `''` |
| `primaryDesc` | 强调描述 | `string` | `''` |
| `tips` | 底部提示 | `string` | `''` |
| `extra` | 额外信息 | `string` | `''` |
| `actions` | 操作按钮数组，支持 `{ text, type, disabled }` | `array` | `[]` |
| `alignTop` | 是否顶部对齐 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `icon` | 自定义图标 |
| `text` | 自定义标题和描述区域 |
| `custom` | 自定义内容区域 |
| `actions` | 自定义操作区域 |
| `tips` | 自定义提示区域 |
| `extra` | 自定义额外区域 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `action-click` | 点击默认操作按钮 | `action, index` |

  </div>
</div>
