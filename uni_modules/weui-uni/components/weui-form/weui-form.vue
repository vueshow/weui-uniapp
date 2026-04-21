<template>
  <view class="weui-form" :class="{ 'weui-bottom-fixed-opr-page': bottomFixed }">
    <view class="weui-form__bd" :class="{ 'weui-bottom-fixed-opr-page__content': bottomFixed }">
      <view v-if="title || desc || $slots.header" class="weui-form__text-area">
        <slot name="header">
          <view v-if="title" class="weui-form__title">{{ title }}</view>
          <view v-if="desc" class="weui-form__desc">{{ desc }}</view>
        </slot>
      </view>

      <view class="weui-form__control-area">
        <slot />
      </view>
    </view>

    <view
      v-if="tips || actions.length || extra || $slots.tips || $slots.actions || $slots.extra"
      class="weui-form__ft"
      :class="{ 'weui-bottom-fixed-opr-page__tool': bottomFixed }"
    >
      <view v-if="tips || $slots.tips" class="weui-form__tips-area">
        <slot name="tips">
          <view class="weui-form__tips">{{ tips }}</view>
        </slot>
      </view>

      <view
        v-if="actions.length || $slots.actions"
        class="weui-form__opr-area"
        :class="{ 'weui-bottom-fixed-opr': bottomFixed }"
      >
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

      <view v-if="extra || $slots.extra" class="weui-form__extra-area">
        <slot name="extra">
          {{ extra }}
        </slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiForm',
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
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
    bottomFixed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['action-click'],
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

<style lang="scss">
/* #ifdef MP */
@import '../../styles/mp.scss';
/* #endif */
</style>
