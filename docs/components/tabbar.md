# Tabbar 底部导航

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/tabbar/index" title="Tabbar 底部导航" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-tabbar` 用于页面底部主导航，支持图标、文字、数字徽章和红点。

## 基础用法

```vue
<weui-tabbar
  v-model="active"
  :items="[
    { label: '微信', value: 'wechat', icon: '/static/icon_tabbar.png' },
    { label: '通讯录', value: 'contact', iconText: '通讯' }
  ]"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值，支持 `v-model` | `string \| number` | `''` |
| `items` | 导航项数组，支持 `{ label, value, icon, iconText, badge, dot, disabled }` | `array` | `[]` |
| `ariaLabel` | 无障碍标签 | `string` | `'选项卡标题'` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 选中值变化 | `value` |
| `change` | 切换导航项 | `item, index` |

  </div>
</div>
