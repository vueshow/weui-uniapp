# Grid 九宫格

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/grid/index" title="Grid 九宫格" />
  </div>
  <div class="demo-layout__main">

`weui-grid` 与 `weui-grid-item` 用于展示宫格入口，常用于首页功能入口、频道入口等场景。

## 引入

组件库全局注册后可直接使用：

```vue
<template>
  <weui-grid>
    <weui-grid-item label="Grid" icon="/static/icon_tabbar.png" />
    <weui-grid-item label="Grid" icon="/static/icon_tabbar.png" />
    <weui-grid-item label="Grid" icon="/static/icon_tabbar.png" />
  </weui-grid>
</template>
```

## 基础用法

`weui-grid` 默认展示三列，边线、图标尺寸、文字字号和点击态对齐 WeUI 官方 Grid 样式。

```vue
<template>
  <weui-grid>
    <weui-grid-item
      v-for="item in 9"
      :key="item"
      label="Grid"
      icon="/static/icon_tabbar.png"
      @click="handleClick(item)"
    />
  </weui-grid>
</template>
```

## 自定义图标

可以使用 `#icon` 插槽自定义图标内容，默认图标区域尺寸为 `28px * 28px`。

```vue
<template>
  <weui-grid>
    <weui-grid-item label="自定义">
      <template #icon>
        <view class="custom-icon" />
      </template>
    </weui-grid-item>
  </weui-grid>
</template>
```

## API

### Grid Props

`weui-grid` 仅作为容器使用，暂无额外属性。

### GridItem Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `label` | 宫格文字 | `string` | `''` |
| `icon` | 图标地址 | `string` | `''` |

### GridItem Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义文字内容 |
| `icon` | 自定义图标内容 |

### GridItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `click` | 点击宫格时触发 | `event` |

  </div>
</div>
