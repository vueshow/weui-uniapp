# Half-screen Dialog 半屏弹窗

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/half-screen-dialog/index" title="Half-screen Dialog 半屏弹窗" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-half-screen-dialog` 用于承载相对复杂的操作流程或说明内容，弹层从底部出现，视觉上对齐 WeUI 半屏弹窗。

## 基础用法

```vue
<weui-half-screen-dialog
  v-model="visible"
  title="标题"
  subtitle="辅助说明"
  :actions="[{ text: '确定' }]"
>
  弹窗内容
</weui-half-screen-dialog>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示弹窗，支持 `v-model` | `boolean` | `false` |
| `title` | 标题 | `string` | `''` |
| `subtitle` | 副标题 | `string` | `''` |
| `actions` | 底部按钮数组，支持 `{ text, type, disabled, close }` | `array` | `[]` |
| `attachment` | 底部附加链接文字 | `string` | `''` |
| `showClose` | 是否显示关闭按钮 | `boolean` | `true` |
| `closeText` | 关闭按钮文字 | `string` | `'关闭'` |
| `closeIcon` | 关闭图标，可选 `close-thin`、`slide-down`、`back-arrow-thin` | `string` | `'close-thin'` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `true` |
| `large` | 是否使用大尺寸样式 | `boolean` | `false` |
| `grab` | 是否显示抓手样式 | `boolean` | `false` |
| `bottomFixed` | 底部操作是否固定 | `boolean` | `false` |
| `buttonWrap` | 按钮是否换行排列 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 弹窗主体内容 |
| `header` | 自定义完整头部 |
| `left` | 头部左侧 |
| `title` | 头部标题区域 |
| `right` | 头部右侧 |
| `footer` | 底部区域 |
| `attachment` | 附加链接区域 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 显示状态变化 | `visible` |
| `close` | 弹窗关闭 | - |
| `action-click` | 点击默认操作按钮 | `action, index` |
| `attachment-click` | 点击附加链接 | - |

  </div>
</div>
