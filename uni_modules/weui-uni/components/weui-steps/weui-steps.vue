<template>
  <view class="weui-steps" :class="stepsClass">
    <slot>
      <view
        v-for="(item, index) in items"
        :key="item.key || item.title || index"
        class="weui-steps__item"
        :class="getItemClass(item)"
      >
        <view class="weui-steps__item__inner" :style="hideContent ? 'display: none;' : ''">
          <text class="weui-steps__item__title">{{ item.title || title }}</text>
          <text class="weui-steps__item__desc">{{ item.desc || desc }}</text>
          <text v-if="item.icon" class="weui-icon weui-steps__icon" :class="item.icon" />
        </view>
      </view>
    </slot>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiSteps',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'vertical',
      validator: (value) => ['vertical', 'horizonal', 'horizonal-primary', 'horizonal-center'].includes(value),
    },
    hideContent: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '标题',
    },
    desc: {
      type: String,
      default: '描述内容详情',
    },
  },
  computed: {
    stepsClass() {
      return `weui-steps_${this.type}`;
    },
  },
  methods: {
    getItemClass(item) {
      return {
        'weui-steps__item_success': item.status === 'success' || item.success,
        'weui-steps__item_icon': Boolean(item.icon),
        'weui-steps__item_icon-prev': Boolean(item.iconPrev),
      };
    },
  },
};
</script>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
