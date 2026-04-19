# Article 文章

<div class="demo-layout">
  <div class="demo-layout__preview">
    <DemoFrame path="/pages/article/index" title="Article 文章" />
  </div>
  <div class="demo-layout__main">

## 介绍

`weui-article` 提供 WeUI 官方文章排版容器，适合展示协议、说明文档、公告正文等长文本内容。

## 基础用法

```vue
<template>
  <weui-article>
    <h1>大标题</h1>
    <section>
      <h2>章标题</h2>
      <p>这里是正文内容。</p>
    </section>
  </weui-article>
</template>
```

## API

`weui-article` 仅作为排版容器使用，没有额外 Props 和 Events。

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 文章内容 |

  </div>
</div>
