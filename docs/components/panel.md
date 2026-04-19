# Panel 面板

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/panel/index" title="Panel 面板" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-panel` 是内容分组面板，可承载 `weui-card`、列表项或自定义内容，常用于图文列表模块。

## 基础用法

```vue
<weui-panel title="图文组合列表">
  <weui-card title="标题" desc="描述文字" />
  <template #footer>
    <weui-cell title="查看更多" arrow clickable />
  </template>
</weui-panel>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `access` | 是否使用可进入面板样式 | `boolean` | `false` |
| `title` | 面板标题 | `string` | `''` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `header` | 自定义头部 |
| `default` | 面板主体 |
| `footer` | 面板底部 |

## Events

暂无。

  </div>
</div>
