<template>
  <view class="weui-slider-box" :class="{ 'weui-slider-box_disabled': disabled }">
    <view class="weui-slider">
      <view
        class="weui-slider__inner"
        @touchstart="handleTouch"
        @touchmove="handleTouch"
        @mousedown="handleMouseDown"
      >
        <view class="weui-slider__track" :style="{ width: percentText }" />
        <view
          role="slider"
          class="weui-slider__handler weui-wa-hotarea"
          :aria-valuemin="min"
          :aria-valuemax="max"
          :aria-valuenow="modelValue"
          :style="{ left: percentText }"
        />
      </view>
    </view>
    <view v-if="showValue" role="alert" class="weui-slider-box__value">{{ modelValue }}</view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiSlider',
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    showValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change', 'changing'],
  computed: {
    range() {
      return Math.max(this.max - this.min, 1);
    },
    percent() {
      const value = this.clamp(this.modelValue);
      return ((value - this.min) / this.range) * 100;
    },
    percentText() {
      return `${this.percent}%`;
    },
  },
  methods: {
    clamp(value) {
      return Math.min(this.max, Math.max(this.min, Number(value)));
    },
    normalizeValue(value) {
      const safeStep = this.step > 0 ? this.step : 1;
      const stepped = Math.round((value - this.min) / safeStep) * safeStep + this.min;
      return this.clamp(Math.round(stepped));
    },
    updateByClientX(clientX, eventName) {
      if (this.disabled) {
        return;
      }
      uni.createSelectorQuery()
        .in(this)
        .select('.weui-slider__inner')
        .boundingClientRect((rect) => {
          if (!rect || !rect.width) {
            return;
          }
          const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
          const nextValue = this.normalizeValue(this.min + ratio * this.range);
          this.$emit('update:modelValue', nextValue);
          this.$emit(eventName, nextValue);
        })
        .exec();
    },
    getTouchClientX(event) {
      return event?.touches?.[0]?.clientX ?? event?.changedTouches?.[0]?.clientX;
    },
    handleTouch(event) {
      const clientX = this.getTouchClientX(event);
      if (clientX === undefined) {
        return;
      }
      this.updateByClientX(clientX, 'changing');
    },
    handleMouseDown(event) {
      this.updateByClientX(event.clientX, 'changing');
      const handleMouseMove = (moveEvent) => {
        this.updateByClientX(moveEvent.clientX, 'changing');
      };
      const handleMouseUp = (upEvent) => {
        this.updateByClientX(upEvent.clientX, 'change');
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    },
  },
};
</script>

<style scoped>
.weui-slider-box_disabled {
  opacity: 0.35;
}
</style>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
