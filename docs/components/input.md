# Input 输入框

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/input/index" title="Input 输入框" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-input` 是对 uni-app 原生 `input` 的 WeUI 样式封装，支持 `v-model`、输入类型、焦点、密码、确认按钮等常用能力。

## 基础用法

```vue
<weui-cell title="标题">
  <template #right>
    <weui-input v-model="value" placeholder="请输入" />
  </template>
</weui-cell>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 输入值，支持 `v-model` | `string \| number` | `''` |
| `type` | 输入类型，同 uni-app input | `string` | `'text'` |
| `placeholder` | 占位文字 | `string` | `''` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `maxlength` | 最大输入长度 | `number \| string` | `140` |
| `focus` | 是否自动聚焦 | `boolean` | `false` |
| `password` | 是否密码输入 | `boolean` | `false` |
| `confirmType` | 键盘确认按钮类型 | `string` | `'done'` |
| `placeholderStyle` | 占位符样式 | `string` | `''` |
| `placeholderClass` | 占位符 class | `string` | `''` |
| `cursorSpacing` | 光标与键盘距离 | `number \| string` | `0` |
| `cursor` | 指定光标位置 | `number \| string` | `-1` |
| `selectionStart` | 选区起点 | `number \| string` | `-1` |
| `selectionEnd` | 选区终点 | `number \| string` | `-1` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 输入值变化 | `value` |
| `input` | 输入时触发 | `event` |
| `change` | 内容变化时触发 | `event` |
| `confirm` | 点击完成按钮时触发 | `event` |
| `focus` | 聚焦时触发 | `event` |
| `blur` | 失焦时触发 | `event` |

  </div>
</div>
