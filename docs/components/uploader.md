# Uploader 上传

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/uploader/index" title="Uploader 上传" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-uploader` 用于图片选择、预览和删除。组件内部调用 `uni.chooseImage`，文件列表通过 `v-model` 维护。

## 基础用法

```vue
<weui-uploader v-model="files" title="图片上传" />
```

## 可删除

```vue
<weui-uploader v-model="files" deletable />
```

## 文件格式

`modelValue` 支持字符串数组，也支持对象数组。对象格式推荐：

```js
[
  { url: '/static/pic_160.png' },
  { url: '/static/pic_160.png', status: '上传失败', message: '上传失败' }
]
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 图片列表，支持 `v-model` | `array` | `[]` |
| `title` | 标题 | `string` | `'图片上传'` |
| `maxCount` | 最大图片数量 | `number` | `9` |
| `showCount` | 是否显示数量 | `boolean` | `true` |
| `deletable` | 是否显示删除按钮 | `boolean` | `false` |
| `disabled` | 是否禁用选择 | `boolean` | `false` |
| `sourceType` | 图片来源，同 `uni.chooseImage` | `array` | `['album', 'camera']` |
| `sizeType` | 图片尺寸类型，同 `uni.chooseImage` | `array` | `['original', 'compressed']` |
| `previewMode` | 预览方式，可选 `native`、`custom`、`none` | `string` | `'native'` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 文件列表变化 | `files` |
| `change` | 文件列表变化 | `files` |
| `delete` | 删除图片 | `index` |
| `preview` | 预览图片 | `index` |
| `choose` | 选择图片成功 | `selected` |

  </div>
</div>
