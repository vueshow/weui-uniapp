<template>
  <view
    role="img"
    :aria-label="label || type"
    class="weui-icon"
    :class="iconClass"
  />
</template>

<script>
export default {
  name: 'WeuiIcon',
  props: {
    type: {
      type: String,
      default: 'success',
    },
    size: {
      type: String,
      default: '',
      validator: (value) => ['', 'msg', 'msg-primary', 'toast'].includes(value),
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconClass() {
      const classes = [`weui-icon-${this.type}`];

      if (this.size === 'msg') {
        classes.push('weui-icon_msg');
      }

      if (this.size === 'msg-primary') {
        classes.push('weui-icon_msg-primary');
      }

      if (this.size === 'toast') {
        classes.push('weui-icon_toast');
      }

      return classes;
    },
  },
};
</script>
