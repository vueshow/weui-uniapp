# Loading 加载

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/loading/index" title="Loading 加载" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-loading` 用于局部加载状态展示，支持普通 loading、mask loading 和 primary loading。

## 基础用法

```vue
<weui-loading text="加载中" />
<weui-loading type="primary" text="加载中" />
```

## 垂直布局

```vue
<weui-loading type="primary" text="加载中" vertical />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 类型，可选 `loading`、`mask`、`primary` | `string` | `'mask'` |
| `size` | 图标尺寸 | `number \| string` | `16` |
| `color` | 颜色，primary 支持 `brand`、`transparent` | `string` | `''` |
| `text` | 加载文字 | `string` | `''` |
| `label` | 无障碍说明 | `string` | `'正在加载'` |
| `vertical` | 是否垂直排列 | `boolean` | `false` |

## Events

暂无。

  </div>
</div>
