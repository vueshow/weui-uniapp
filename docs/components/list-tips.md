# List Tips 列表提示

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/list-tips/index" title="List Tips 列表提示" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-list-tips` 用于展示列表型提示内容，例如规则说明、风险提示、操作注意事项。

## 基础用法

```vue
<weui-list-tips :items="['提示一', '提示二']" />
```

## 自定义内容

```vue
<weui-list-tips>
  <view class="weui-list-tips__item">自定义提示内容</view>
</weui-list-tips>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 提示项数组，支持字符串或 `{ text, value }` | `array` | `[]` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义提示列表 |

## Events

暂无。

  </div>
</div>
