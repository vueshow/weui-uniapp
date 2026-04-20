<template>
  <view
    role="alert"
    class="weui-toptips"
    :class="tipsClass"
    :aria-hidden="(!visible).toString()"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiToptips',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'warn',
      validator: (value) => ['warn', 'info', 'success'].includes(value),
    },
    duration: {
      type: Number,
      default: 2000,
    },
    closable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue', 'show', 'close', 'click'],
  data() {
    return {
      visible: this.modelValue,
      timer: null,
    };
  },
  computed: {
    tipsClass() {
      return {
        'weui-toptips_show': this.visible,
        'weui-toptips_warn': this.type === 'warn',
        'weui-toptips_info': this.type === 'info',
        'weui-toptips_success': this.type === 'success',
      };
    },
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(value) {
        if (value) {
          this.show();
          return;
        }
        this.hide(false);
      },
    },
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    show() {
      this.clearTimer();
      this.visible = true;
      this.$emit('show');

      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.hide();
        }, this.duration);
      }
    },
    hide(emitUpdate = true) {
      this.clearTimer();
      this.visible = false;

      if (emitUpdate) {
        this.$emit('update:modelValue', false);
        this.$emit('close');
      }
    },
    handleClick(event) {
      this.$emit('click', event);
      if (this.closable) {
        this.hide();
      }
    },
  },
};
</script>

<style scoped>
.weui-toptips {
  opacity: 0;
  transform: translate3d(0, -8px, 0);
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.weui-toptips_show {
  display: block;
  opacity: 1;
  transform: translateZ(0);
}

.weui-toptips_info {
  background-color: var(--weui-BLUE);
}

.weui-toptips_success {
  background-color: var(--weui-BRAND);
}
</style>

<style lang="scss">
/* #ifdef MP */
@import "../../styles/mp.scss";
/* #endif */
</style>
