<template>
  <view class="weui-footer" :class="{ 'weui-footer_fixed-bottom': fixed }">
    <view v-if="links.length || $slots.links" class="weui-footer__links">
      <slot name="links">
        <text
          v-for="(link, index) in links"
          :key="link.text || index"
          class="weui-footer__link weui-wa-hotarea"
          @click="handleLinkClick(link, index)"
        >
          {{ link.text }}
        </text>
      </slot>
    </view>
    <view v-if="text || $slots.default" class="weui-footer__text">
      <slot>{{ text }}</slot>
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiFooter',
  props: {
    text: {
      type: String,
      default: '',
    },
    links: {
      type: Array,
      default: () => [],
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['link-click'],
  methods: {
    handleLinkClick(link, index) {
      this.$emit('link-click', link, index);
    },
  },
};
</script>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
