# Gallery 画廊

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/gallery/index" title="Gallery 画廊" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-gallery` 用于全屏预览单张图片，支持点击关闭和删除操作，常与 `weui-uploader` 配合使用。

## 基础用法

```vue
<weui-gallery
  v-model="visible"
  src="/static/pic_160.png"
  deletable
  @delete="handleDelete"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 是否显示画廊，支持 `v-model` | `boolean` | `false` |
| `src` | 图片地址 | `string` | `''` |
| `label` | 图片无障碍说明 | `string` | `'图片详情'` |
| `deletable` | 是否显示删除按钮 | `boolean` | `false` |
| `closeOnClickImage` | 点击图片区域是否关闭 | `boolean` | `true` |

## Events

| 事件名 | 说明 |
| --- | --- |
| `update:modelValue` | 显示状态变化 |
| `close` | 关闭画廊 |
| `delete` | 点击删除按钮 |

  </div>
</div>
