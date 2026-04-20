<template>
  <view
    class="weui-media-box"
    :class="cardClass"
    :hover-class="clickable ? 'weui-media-box_active' : 'none'"
    hover-stay-time="70"
    @click="handleClick"
  >
    <view v-if="isAppmsg" class="weui-media-box__hd">
      <slot name="thumb">
        <image v-if="thumb" class="weui-media-box__thumb" :src="thumb" mode="aspectFill" />
      </slot>
    </view>
    <view class="weui-media-box__bd">
      <slot>
        <view class="weui-media-box__title">{{ title }}</view>
        <view v-if="desc" class="weui-media-box__desc">{{ desc }}</view>
      </slot>
      <view v-if="metaList.length || $slots.info" class="weui-media-box__info">
        <slot name="info">
          <view
            v-for="(item, index) in metaList"
            :key="`${item}-${index}`"
            class="weui-media-box__info__meta"
            :class="{ 'weui-media-box__info__meta_extra': index > 0 }"
          >
            {{ item }}
          </view>
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
  name: 'WeuiCard',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'appmsg'].includes(value),
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    thumb: {
      type: String,
      default: '',
    },
    info: {
      type: Array,
      default: () => [],
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  computed: {
    isAppmsg() {
      return this.type === 'appmsg';
    },
    cardClass() {
      return {
        'weui-media-box_appmsg': this.isAppmsg,
        'weui-media-box_text': !this.isAppmsg,
      };
    },
    metaList() {
      return Array.isArray(this.info) ? this.info : [];
    },
  },
  methods: {
    handleClick(event) {
      if (!this.clickable) {
        return;
      }
      this.$emit('click', event);
    },
  },
};
</script>

<style scoped>
.weui-media-box_active {
  background-color: var(--weui-BG-COLOR-ACTIVE);
}
</style>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
