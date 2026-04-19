# Picker 选择器

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/picker/index" title="Picker 选择器" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-picker` 提供底部半屏选择器，视觉结构参考官方 WeUI picker，支持单列、多列和日期选择。

## 单列选择

```vue
<weui-picker
  v-model="value"
  v-model:visible="visible"
  title="单列选择器"
  :range="['飞机票', '火车票', '汽车票']"
/>
```

## 多列选择

```vue
<weui-picker
  v-model="multiValue"
  v-model:visible="visible"
  mode="multiSelector"
  title="多列选择器"
  :range="[
    ['2024年', '2025年', '2026年'],
    ['1月', '2月', '3月'],
    ['1日', '2日', '3日']
  ]"
/>
```

## 日期选择

```vue
<weui-picker
  v-model="date"
  v-model:visible="visible"
  mode="date"
  title="日期选择器"
  start="1990"
  end="2026"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值。单列为索引或值，多列和日期为数组 | `string \| number \| array` | `''` |
| `visible` | 是否显示弹层，支持 `v-model:visible` | `boolean` | `false` |
| `mode` | 选择器模式，可选 `selector`、`multiSelector`、`date` | `string` | `'selector'` |
| `title` | 弹层标题 | `string` | `''` |
| `desc` | 标题下方描述 | `string` | `''` |
| `showClose` | 是否显示关闭按钮 | `boolean` | `true` |
| `closeText` | 关闭按钮文字 | `string` | `'关闭'` |
| `range` | 选项列表，单列为一维数组，多列为二维数组 | `array` | `[]` |
| `rangeKey` | 选项对象中用于显示的字段名 | `string` | `''` |
| `start` | 日期模式开始年份 | `string \| number` | `1990` |
| `end` | 日期模式结束年份 | `string \| number` | `当前年份` |
| `confirmText` | 确认按钮文字 | `string` | `'确定'` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `true` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 确认后更新选中值 | `value` |
| `update:visible` | 显示状态变化 | `visible` |
| `change` | 滚动选项时触发 | `payload` |
| `confirm` | 点击确定时触发 | `payload` |
| `cancel` | 点击关闭或遮罩时触发 | - |
| `close` | 弹层关闭 | - |

  </div>
</div>
