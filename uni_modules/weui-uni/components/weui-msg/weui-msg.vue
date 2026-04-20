<template>
  <view class="weui-msg" :class="{ 'weui-msg_align-top': alignTop }">
    <view v-if="showIcon" class="weui-msg__icon-area">
      <slot name="icon">
        <view :class="iconClass" />
      </slot>
    </view>

    <view class="weui-msg__text-area">
      <slot name="text">
        <view v-if="title" class="weui-msg__title">{{ title }}</view>
        <view v-if="desc" class="weui-msg__desc">{{ desc }}</view>
        <view v-if="primaryDesc" class="weui-msg__desc-primary">{{ primaryDesc }}</view>
      </slot>
      <view v-if="$slots.custom" class="weui-msg__custom-area">
        <slot name="custom" />
      </view>
    </view>

    <view v-if="actions.length || $slots.actions" class="weui-msg__opr-area">
      <view class="weui-btn-area">
        <slot name="actions">
          <weui-button
            v-for="(action, index) in actions"
            :key="action.text || index"
            :type="action.type || 'primary'"
            :text="action.text"
            :disabled="Boolean(action.disabled)"
            @click="handleAction(action, index)"
          />
        </slot>
      </view>
    </view>

    <view v-if="tips || $slots.tips" class="weui-msg__tips-area">
      <slot name="tips">
        <view class="weui-msg__tips">{{ tips }}</view>
      </slot>
    </view>

    <view v-if="extra || $slots.extra" class="weui-msg__extra-area">
      <slot name="extra">
        {{ extra }}
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiMsg',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: (value) => ['success', 'warn', 'info', 'waiting', 'none'].includes(value),
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    primaryDesc: {
      type: String,
      default: '',
    },
    tips: {
      type: String,
      default: '',
    },
    extra: {
      type: String,
      default: '',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    alignTop: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['action-click'],
  computed: {
    showIcon() {
      return this.type !== 'none' || Boolean(this.$slots.icon);
    },
    iconClass() {
      return [`weui-icon-${this.type}`, 'weui-icon_msg'];
    },
  },
  methods: {
    handleAction(action, index) {
      if (action.disabled) {
        return;
      }
      this.$emit('action-click', action, index);
    },
  },
};
</script>
