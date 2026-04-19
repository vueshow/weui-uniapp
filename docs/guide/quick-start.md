# 安装使用

## 引入样式

推荐在全局样式入口引入 Sass：

```scss
@import 'weui-uniapp/styles/index.scss';
```

如果项目不方便编译 Sass，也可以直接引入 CSS：

```css
@import 'weui-uniapp/styles/weui.css';
```

## 基础示例

```vue
<template>
  <view class="weui-uni-page">
    <weui-button text="主要操作" />
    <weui-cell-group title="列表">
      <weui-cell title="标题文字" value="说明文字" arrow clickable />
    </weui-cell-group>
  </view>
</template>
```
