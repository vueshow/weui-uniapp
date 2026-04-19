# Loadmore 加载更多

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/loadmore/index" title="Loadmore 加载更多" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-loadmore` 用于列表底部的加载、无更多、空数据和分割线提示。

## 基础用法

```vue
<weui-loadmore />
<weui-loadmore :loading="false" text="加载更多" />
<weui-loadmore no-more />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `loading` | 是否显示加载动画 | `boolean` | `true` |
| `line` | 是否显示横线样式 | `boolean` | `false` |
| `dot` | 是否显示点状分割 | `boolean` | `false` |
| `text` | 自定义提示文字 | `string` | `''` |
| `noMore` | 是否显示“没有更多了” | `boolean` | `false` |
| `empty` | 是否显示“暂无数据” | `boolean` | `false` |

## Events

暂无。

  </div>
</div>
