# Address Picker 地址选择

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/address-picker/index" title="Address Picker 地址选择" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-address-picker` 提供省市区多级联动地址选择，视觉结构参考官方 WeUI picker，支持动态层级和数据级联。组件内置全国省市区三级行政区划数据（`china.json`），开箱即用；也可通过 `options` 属性传入自定义数据。

## 基本用法

不传 `options` 时自动使用内置的全国行政区划数据。

```vue
<weui-address-picker
  v-model="address"
  v-model:visible="visible"
  title="选择地址"
  @confirm="handleConfirm"
/>
```

## 自定义数据源

传入 `options` 替代内置数据，支持通过 `valueKey`、`labelKey`、`childrenKey` 适配不同字段名。

```vue
<weui-address-picker
  v-model="address"
  v-model:visible="visible"
  :options="customOptions"
  value-key="id"
  label-key="text"
  children-key="subItems"
/>
```

## 数据格式

`options` 为嵌套树形结构，每一级的子项放在 `children` 数组中。组件会自动根据数据层级生成对应列数。

内置数据使用 `code` / `name` / `children` 字段：

```js
[
  {
    code: '11',
    name: '北京市',
    children: [
      {
        code: '1101',
        name: '市辖区',
        children: [
          { code: '110101', name: '东城区' },
          { code: '110102', name: '西城区' },
        ],
      },
    ],
  },
]
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值，各级 code 组成的数组 | `array` | `[]` |
| `visible` | 是否显示弹层，支持 `v-model:visible` | `boolean` | `false` |
| `options` | 自定义级联数据，不传则使用内置 `china.json` | `array` | `null` |
| `title` | 弹层标题 | `string` | `''` |
| `desc` | 标题下方描述 | `string` | `''` |
| `showClose` | 是否显示关闭按钮 | `boolean` | `true` |
| `closeText` | 关闭按钮文字 | `string` | `'关闭'` |
| `confirmText` | 确定按钮文字 | `string` | `'确定'` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `true` |
| `placeholder` | 无选项时的占位文字 | `string` | `'请选择'` |
| `valueKey` | 选项对象中值字段的键名 | `string` | `'code'` |
| `labelKey` | 选项对象中文本字段的键名 | `string` | `'name'` |
| `childrenKey` | 选项对象中子级字段的键名 | `string` | `'children'` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 确认后更新选中值 | `value`（各级 code 的数组） |
| `update:visible` | 显示状态变化 | `visible` |
| `change` | 滚动选项时触发 | `result` |
| `confirm` | 点击确定时触发 | `result` |
| `cancel` | 点击关闭或遮罩时触发 | — |
| `close` | 弹层关闭时触发 | — |

## confirm / change 事件 result

```js
{
  value: ['11', '1101', '110101'],
  items: [
    { code: '11', name: '北京市', children: [...] },
    { code: '1101', name: '市辖区', children: [...] },
    { code: '110101', name: '东城区' },
  ],
  labels: ['北京市', '市辖区', '东城区'],
}
```

  </div>
</div>
