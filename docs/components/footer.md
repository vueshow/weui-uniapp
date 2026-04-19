# Footer 页脚

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/footer/index" title="Footer 页脚" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-footer` 用于页面底部版权、辅助链接、品牌说明等内容展示，支持普通页脚和固定底部页脚。

## 基础用法

```vue
<weui-footer
  text="Copyright © 2026"
  :links="[{ text: '底部链接' }]"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 页脚文字 | `string` | `''` |
| `links` | 链接数组，支持 `{ text }` | `array` | `[]` |
| `fixed` | 是否固定在底部 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义页脚文字 |
| `links` | 自定义链接区域 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `link-click` | 点击默认链接 | `link, index` |

  </div>
</div>
