# Form 表单

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/form/index" title="Form 表单" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-form` 提供 WeUI 表单页面结构，包含标题描述、控件区域、提示区域、底部操作和额外信息。

## 基础用法

```vue
<weui-form
  title="表单结构"
  desc="展示表单页面的信息层级"
  tips="底部说明文字"
  :actions="[{ text: '确定' }]"
>
  <weui-cell-group variant="form">
    <weui-cell title="微信号">
      <template #right>
        <weui-input v-model="wechat" placeholder="填写本人微信号" />
      </template>
    </weui-cell>
  </weui-cell-group>
</weui-form>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 表单标题 | `string` | `''` |
| `desc` | 表单描述 | `string` | `''` |
| `tips` | 底部提示 | `string` | `''` |
| `extra` | 额外信息 | `string` | `''` |
| `actions` | 操作按钮数组，支持 `{ text, type, disabled }` | `array` | `[]` |
| `bottomFixed` | 操作区是否固定在底部 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `header` | 自定义头部标题区域 |
| `default` | 表单控件区域 |
| `tips` | 自定义提示区域 |
| `actions` | 自定义操作区域 |
| `extra` | 自定义额外信息 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `action-click` | 点击默认操作按钮 | `action, index` |

  </div>
</div>
