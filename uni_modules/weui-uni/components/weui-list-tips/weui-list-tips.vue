<template>
  <view class="weui-list-tips" role="list">
    <slot>
      <view
        v-for="(item, index) in items"
        :key="getKey(item, index)"
        role="option"
        class="weui-list-tips__item"
      >
        {{ getText(item) }}
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
  name: 'WeuiListTips',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getText(item) {
      if (typeof item === 'string') {
        return item;
      }
      return item && item.text ? item.text : '';
    },
    getKey(item, index) {
      if (item && typeof item === 'object' && item.value) {
        return item.value;
      }
      return index;
    },
  },
};
</script>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
