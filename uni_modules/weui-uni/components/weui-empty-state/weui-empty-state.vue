<template>
  <view class="weui-empty-state">
    <view v-if="$slots.icon || icon" class="weui-empty-state__icon">
      <slot name="icon">
        <text class="weui-icon weui-icon_msg-primary" :class="icon" />
      </slot>
    </view>
    <view class="weui-empty-state__text-area">
      <view v-if="title || $slots.title" class="weui-empty-state__title">
        <slot name="title">{{ title }}</slot>
      </view>
      <view v-if="desc || $slots.desc" class="weui-empty-state__desc">
        <slot name="desc">{{ desc }}</slot>
      </view>
    </view>
    <view v-if="actions.length || $slots.actions" class="weui-empty-state__opr-area">
      <slot name="actions">
        <button
          v-for="(action, index) in actions"
          :key="action.text || index"
          class="weui-btn"
          :class="getActionClass(action)"
          hover-class="weui-btn_active"
          @click="handleAction(action, index)"
        >
          {{ action.text }}
        </button>
      </slot>
    </view>
    <view v-if="$slots.extra" class="weui-empty-state__extra-area">
      <slot name="extra" />
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiEmptyState',
  props: {
    icon: {
      type: String,
      default: 'weui-icon-info-circle',
    },
    title: {
      type: String,
      default: '暂无内容',
    },
    desc: {
      type: String,
      default: '',
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['action-click'],
  methods: {
    getActionClass(action) {
      return action.type === 'default' ? 'weui-btn_default' : 'weui-btn_primary';
    },
    handleAction(action, index) {
      this.$emit('action-click', action, index);
    },
  },
};
</script>

<style scoped>
.weui-empty-state {
  box-sizing: border-box;
  min-height: 100%;
  padding: 88px 40px 40px;
  text-align: center;
  color: var(--weui-FG-0);
}

.weui-empty-state__icon {
  margin-bottom: 24px;
}

.weui-empty-state__text-area {
  word-wrap: break-word;
  hyphens: auto;
}

.weui-empty-state__title {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.36;
}

.weui-empty-state__desc {
  margin-top: 16px;
  color: var(--weui-FG-1);
  font-size: 17px;
  line-height: 1.4;
}

.weui-empty-state__opr-area {
  margin-top: 32px;
}

.weui-empty-state__opr-area .weui-btn {
  margin-top: 16px;
}

.weui-empty-state__opr-area .weui-btn:first-child {
  margin-top: 0;
}

.weui-empty-state__extra-area {
  margin-top: 32px;
  color: var(--weui-FG-2);
  font-size: 14px;
  line-height: 1.4;
}

.weui-btn::after {
  border: 0;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
