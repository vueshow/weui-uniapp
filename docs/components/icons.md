# Icons 图标

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/icons/index" title="Icons 图标" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-icon` 用于展示 WeUI 内置图标，支持普通尺寸、消息页尺寸和 toast 尺寸。

## 基础用法

```vue
<weui-icon type="success" />
<weui-icon type="warn" size="msg" />
<weui-icon type="success-no-circle" size="toast" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 图标类型，会拼接为 `weui-icon-${type}` | `string` | `'success'` |
| `size` | 尺寸样式，可选 `msg`、`msg-primary`、`toast` | `string` | `''` |
| `label` | 无障碍说明 | `string` | `''` |

## Slots

暂无。

## Events

暂无。

  </div>
</div>
