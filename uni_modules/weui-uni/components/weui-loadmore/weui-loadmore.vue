<template>
  <view class="weui-uni-loadmore" :class="{ 'weui-uni-loadmore_line': line }">
    <view v-if="loading" class="weui-uni-loadmore__loading" />
    <text class="weui-uni-loadmore__tips">{{ resolvedText }}</text>
  </view>
</template>

<script>
export default {
  name: 'WeuiLoadmore',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    line: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    noMore: {
      type: Boolean,
      default: false,
    },
    empty: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    resolvedText() {
      if (this.text) {
        return this.text;
      }
      if (this.empty) {
        return '暂无数据';
      }
      if (this.noMore) {
        return '没有更多了';
      }
      return this.loading ? '正在加载' : '加载更多';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/theme.scss';

.weui-uni-loadmore {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  margin: 24px auto;
  color: var(--weui-FG-1, #{$weui-fg-1});
  font-size: 14px;
}

.weui-uni-loadmore_line {
  @include weui-hairline(top);

  padding-top: 16px;
}

.weui-uni-loadmore__loading {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  border: 2px solid var(--weui-FG-2, #{$weui-fg-2});
  border-top-color: transparent;
  border-radius: 50%;
  animation: weui-uni-spin 0.9s linear infinite;
}

.weui-uni-loadmore__tips {
  color: var(--weui-FG-1, #{$weui-fg-1});
}

@keyframes weui-uni-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
