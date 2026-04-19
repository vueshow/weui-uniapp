# Cell 列表项

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/cell/index" title="Cell 列表项" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-cell-group` 和 `weui-cell` 用于展示列表、表单项、入口项等常见结构，视觉上对齐 WeUI 的 cells/cell 体系。

## 基础用法

```vue
<template>
  <weui-cell-group title="带说明的列表项">
    <weui-cell title="标题文字" value="说明文字" />
    <weui-cell title="可点击列表项" value="说明文字" arrow clickable />
  </weui-cell-group>
</template>
```

## 插槽用法

```vue
<weui-cell arrow clickable>
  <template #left>
    <image class="icon" src="/static/logo.png" />
  </template>
  自定义内容
  <template #right>详情</template>
</weui-cell>
```

## CellGroup Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 分组标题 | `string` | `''` |
| `tips` | 分组底部提示 | `string` | `''` |
| `inset` | 是否使用圆角内嵌样式 | `boolean` | `false` |
| `variant` | 变体，可选 `form`、`checkbox`、`radio` | `string` | `''` |

## Cell Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 主标题 | `string` | `''` |
| `label` | 标题下方描述 | `string` | `''` |
| `value` | 右侧内容 | `string` | `''` |
| `icon` | 左侧图标地址 | `string` | `''` |
| `arrow` | 是否显示进入箭头 | `boolean` | `false` |
| `clickable` | 是否可点击 | `boolean` | `false` |
| `border` | 是否显示顶部分割线 | `boolean` | `true` |
| `active` | 是否强制显示点击态 class | `boolean` | `false` |
| `extraClass` | 额外 class | `string` | `''` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | Cell 主体内容 |
| `left` | 左侧区域，推荐使用 |
| `right` | 右侧区域，推荐使用 |
| `icon` | 左侧图标区域 |
| `value` | 右侧值区域 |
| `hd` | 兼容旧版左侧插槽 |
| `ft` | 兼容旧版右侧插槽 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击可点击 Cell 时触发 | `event` |

  </div>
</div>
