# Steps 步骤条

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/steps/index" title="Steps 步骤条" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-steps` 用于展示流程进度，支持纵向、横向、居中横向和主色横向样式。

## 基础用法

```vue
<weui-steps
  :items="[
    { title: '步骤一', desc: '描述内容', status: 'success' },
    { title: '步骤二', desc: '描述内容' }
  ]"
/>
```

## 横向步骤

```vue
<weui-steps type="horizonal" :items="items" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 步骤数组，支持 `{ title, desc, status, success, icon, iconPrev }` | `array` | `[]` |
| `type` | 类型，可选 `vertical`、`horizonal`、`horizonal-primary`、`horizonal-center` | `string` | `'vertical'` |
| `hideContent` | 是否隐藏步骤文案 | `boolean` | `false` |
| `title` | 默认标题 | `string` | `'标题'` |
| `desc` | 默认描述 | `string` | `'描述内容详情'` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义完整步骤结构 |

## Events

暂无。

  </div>
</div>
