<template>
  <view role="tablist" :aria-label="ariaLabel" class="weui-tabbar">
    <view
      v-for="(item, index) in items"
      :key="item.value"
      role="tab"
      class="weui-tabbar__item"
      :class="{ 'weui-bar__item_on': item.value === modelValue }"
      :aria-selected="(item.value === modelValue).toString()"
      @click="handleSelect(item, index)"
    >
      <view v-if="item.badge || item.dot" class="weui-tabbar__icon-wrap">
        <image v-if="item.icon" class="weui-tabbar__icon" :src="item.icon" mode="aspectFit" />
        <text v-else class="weui-tabbar__icon">{{ item.iconText }}</text>
        <text v-if="item.badge" class="weui-badge weui-tabbar__badge">{{ item.badge }}</text>
        <text v-else-if="item.dot" class="weui-badge weui-badge_dot weui-tabbar__badge-dot" />
      </view>
      <image v-else-if="item.icon" class="weui-tabbar__icon" :src="item.icon" mode="aspectFit" />
      <text v-else class="weui-tabbar__icon">{{ item.iconText }}</text>
      <view class="weui-tabbar__label">{{ item.label }}</view>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiTabbar',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    ariaLabel: {
      type: String,
      default: '选项卡标题',
    },
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    handleSelect(item, index) {
      if (item.disabled) {
        return;
      }
      this.$emit('update:modelValue', item.value);
      this.$emit('change', item, index);
    },
  },
};
</script>

<style scoped>
.weui-tabbar__icon-wrap {
  position: relative;
  display: inline-block;
}

.weui-tabbar__badge {
  position: absolute;
  top: -2px;
  right: -13px;
}

.weui-tabbar__badge-dot {
  position: absolute;
  top: 0;
  right: -6px;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
