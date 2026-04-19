# List 列表

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/list/index" title="List 列表" />
  </div>
  <div class="demo-layout__main">

## 介绍

List 示例主要由 `weui-panel` 和 `weui-card` 组合而成，用于图文列表、纯文本列表和带元信息的内容列表。

## 基础用法

```vue
<weui-panel title="图文组合列表">
  <weui-card
    type="appmsg"
    title="标题一"
    desc="由各种物质组成的巨型球状天体。"
    thumb="/static/pic_160.png"
    clickable
  />
</weui-panel>
```

## Card Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 卡片类型，可选 `text`、`appmsg` | `string` | `'text'` |
| `title` | 标题 | `string` | `''` |
| `desc` | 描述 | `string` | `''` |
| `thumb` | 缩略图地址，仅 `appmsg` 常用 | `string` | `''` |
| `info` | 底部元信息数组 | `array` | `[]` |
| `clickable` | 是否可点击 | `boolean` | `false` |

## Card Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义主体内容 |
| `thumb` | 自定义缩略图 |
| `info` | 自定义底部元信息 |

## Card Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击可点击卡片时触发 | `event` |

  </div>
</div>
