<template>
  <view
    :role="loading ? 'alert' : 'status'"
    class="weui-loadmore"
    :class="loadmoreClass"
  >
    <template v-if="loading">
      <view aria-hidden="true" role="img" aria-label="正在加载" class="weui-primary-loading">
        <view class="weui-primary-loading__dot" />
      </view>
    </template>
    <view v-if="dot" class="weui-hidden_abs">{{ resolvedText }}</view>
    <text class="weui-loadmore__tips">{{ dot ? '' : resolvedText }}</text>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
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
    dot: {
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
    loadmoreClass() {
      return {
        'weui-loadmore_line': this.line || this.dot || this.empty || this.noMore,
        'weui-loadmore_dot': this.dot,
      };
    },
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

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
