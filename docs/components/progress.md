# Progress 进度条

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/progress/index" title="Progress 进度条" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-progress` 用于展示任务进度，支持取消按钮，进度值会被限制在 `0` 到 `100` 之间。

## 基础用法

```vue
<weui-progress :percent="progress" @cancel="handleCancel" />
```

## 隐藏取消按钮

```vue
<weui-progress :percent="80" :show-cancel="false" />
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `percent` | 进度百分比，范围 `0-100` | `number` | `0` |
| `showCancel` | 是否显示取消按钮 | `boolean` | `true` |

## Events

| 事件名 | 说明 |
| --- | --- |
| `cancel` | 点击取消按钮时触发 |

  </div>
</div>
