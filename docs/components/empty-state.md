# Empty State 空状态

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/empty-state/index" title="Empty State 空状态" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-empty-state` 用于无数据、无权限、加载失败等空页面场景，可配置图标、标题、描述和操作按钮。

## 基础用法

```vue
<weui-empty-state
  title="暂无内容"
  desc="当前列表还没有任何数据"
  :actions="[{ text: '刷新' }]"
/>
```

## 自定义图标

```vue
<weui-empty-state title="搜索无结果">
  <template #icon>
    <weui-icon type="info-circle" size="msg-primary" />
  </template>
</weui-empty-state>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `icon` | 图标 class | `string` | `'weui-icon-info-circle'` |
| `title` | 标题 | `string` | `'暂无内容'` |
| `desc` | 描述 | `string` | `''` |
| `actions` | 操作按钮数组，支持 `{ text, type, disabled }` | `array` | `[]` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `icon` | 自定义图标 |
| `title` | 自定义标题 |
| `desc` | 自定义描述 |
| `actions` | 自定义操作区 |
| `extra` | 额外内容 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `action-click` | 点击默认操作按钮 | `action, index` |

  </div>
</div>
