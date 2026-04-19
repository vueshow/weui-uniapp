# Searchbar 搜索栏

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/searchbar/index" title="Searchbar 搜索栏" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-searchbar` 用于搜索输入，支持默认、灰底、描边和首页样式，提供搜索、清空、取消、返回等事件。

## 基础用法

```vue
<weui-searchbar v-model="keyword" placeholder="搜索" @search="handleSearch" />
```

## 描边样式

```vue
<weui-searchbar v-model="keyword" variant="outlined" search-button />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 搜索关键词，支持 `v-model` | `string` | `''` |
| `placeholder` | 占位文字 | `string` | `'搜索'` |
| `variant` | 样式，可选 `default`、`grey`、`outlined`、`homepage` | `string` | `'default'` |
| `words` | 输入框前的关键词提示 | `string` | `''` |
| `cancelText` | 取消按钮文字 | `string` | `'取消'` |
| `searchText` | 搜索按钮文字 | `string` | `'搜索'` |
| `showBack` | 是否显示返回按钮 | `boolean` | `false` |
| `showCancel` | 是否显示取消按钮 | `boolean` | `true` |
| `searchButton` | 描边样式下是否显示搜索按钮 | `boolean` | `true` |
| `clearable` | 是否显示清空按钮 | `boolean` | `true` |
| `disabled` | 是否禁用 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `right` | 输入框右侧自定义内容 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 输入值变化 | `value` |
| `input` | 输入时触发 | `value` |
| `search` | 点击搜索或键盘搜索时触发 | `value` |
| `clear` | 点击清空按钮 | - |
| `cancel` | 点击取消按钮 | - |
| `focus` | 聚焦 | `event` |
| `blur` | 失焦 | `event` |
| `back` | 点击返回按钮 | - |
| `click` | 首页样式点击搜索框 | - |

  </div>
</div>
