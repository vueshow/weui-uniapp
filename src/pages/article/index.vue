<template>
  <view class="page weui-uni-page">
    <weui-article>
      <view class="article-h1">文章页大标题</view>
      <view class="article-section">
        <view class="article-h2">二级标题</view>
        <view class="article-section">
          <view class="article-h3">三级标题</view>
          <view class="article-section">
            <view class="article-h4">四级标题</view>
            <view class="article-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </view>
            <view class="article-p">
              Ut enim ad minim veniam, cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident.
            </view>
            <image class="article-img" src="/static/logo.png" mode="aspectFit" />
            <image class="article-img" src="/static/logo.png" mode="aspectFit" />
          </view>
          <view class="article-section">
            <view class="article-h4">列表示例</view>
            <view class="article-h5">无序列表</view>
            <view class="article-list">
              <view class="article-li">Elit quo illum ut voluptate possimus. Maxime</view>
              <view class="article-li">Elit facilis nam nam</view>
              <view class="article-li">Elit quo illum ut voluptate possimus. Maxime</view>
            </view>
            <view class="article-h5">有序列表</view>
            <view class="article-list article-list_order">
              <view class="article-li">Adipisicing adipisci labore deleniti</view>
              <view class="article-li">Adipisicing adipisci labore deleniti</view>
              <view class="article-li">Adipisicing adipisci labore deleniti</view>
            </view>
          </view>
        </view>
      </view>
    </weui-article>
  </view>
</template>

<script>
export default {};
</script>

<style>
.page {
  min-height: 100vh;
}

.article-h1 {
  margin-bottom: 48px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;
}

.article-section {
  margin-bottom: 32px;
}

.article-h2 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
}

.article-h3 {
  margin-bottom: 8px;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.4;
}

.article-h4,
.article-h5 {
  margin-bottom: 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.4;
}

.article-p {
  margin-bottom: 24px;
}

.article-img {
  display: block;
  width: 100%;
  height: 120px;
  margin-bottom: 12px;
}

.article-list {
  margin-bottom: 24px;
  padding-left: 1.2em;
}

.article-li {
  margin: 8px 0;
}

.article-li::before {
  content: '•';
  margin-right: 8px;
}

.article-list_order {
  counter-reset: article-list;
}

.article-list_order .article-li {
  counter-increment: article-list;
}

.article-list_order .article-li::before {
  content: counter(article-list) '.';
}
</style>
