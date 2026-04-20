<template>
  <view class="weui-search-bar" :class="searchbarClass">
    <view v-if="showBack" role="button" class="weui-search-bar__back-btn" @click="handleBack">
      <view role="img" aria-label="返回" class="weui-icon-back-arrow-thin" />
    </view>

    <view
      role="combobox"
      aria-haspopup="true"
      :aria-expanded="hasValue.toString()"
      class="weui-search-bar__form"
    >
      <view class="weui-search-bar__box" :aria-hidden="(!isActive).toString()">
        <view v-if="showSearchIcon" class="weui-icon-search" />
        <text v-if="words" class="weui-search-bar__words">{{ words }}</text>
        <input
          v-if="variant !== 'homepage'"
          class="weui-search-bar__input"
          type="search"
          :value="modelValue"
          :placeholder="placeholder"
          :focus="inputFocused"
          :disabled="disabled"
          confirm-type="search"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @confirm="handleSearch"
        />
        <view
          v-else
          class="weui-search-bar__input weui-search-bar__input_text"
          @click="handleHomepageClick"
        >
          {{ placeholder }}
        </view>
        <view v-if="variant !== 'homepage'" class="weui-search-bar__mask" />
        <view
          v-if="clearable && hasValue"
          role="button"
          title="清除"
          class="weui-icon-clear"
          @click="handleClear"
        />
        <slot name="right" />
      </view>

      <view
        v-if="showLabel"
        class="weui-search-bar__label"
        :aria-hidden="isActive.toString()"
        @click="focusInput"
      >
        <view class="weui-icon-search" />
        <text class="weui-search-bar__label__text">{{ placeholder }}</text>
      </view>
    </view>

    <view
      v-if="variant === 'outlined' && searchButton"
      role="button"
      class="weui-search-bar__search-btn weui-btn weui-btn_primary"
      @click="handleSearch"
    >
      {{ searchText }}
    </view>
    <view
      v-if="showCancelButton"
      role="button"
      class="weui-search-bar__cancel-btn"
      @click="handleCancel"
    >
      {{ cancelText }}
    </view>
  </view>
</template>

<script>
export default {
  options: {
    styleIsolation: 'shared',
    addGlobalClass: true,
  },
  name: 'WeuiSearchbar',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'grey', 'outlined', 'homepage'].includes(value),
    },
    words: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    searchText: {
      type: String,
      default: '搜索',
    },
    showBack: {
      type: Boolean,
      default: false,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    searchButton: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'input', 'search', 'clear', 'cancel', 'focus', 'blur', 'back', 'click'],
  data() {
    return {
      focused: false,
      inputFocused: false,
    };
  },
  computed: {
    hasValue() {
      return Boolean(this.modelValue);
    },
    isActive() {
      return this.variant === 'outlined' || this.variant === 'homepage' || this.focused || this.hasValue;
    },
    searchbarClass() {
      return {
        'weui-search-bar_focusing': this.variant !== 'outlined' && this.variant !== 'homepage' && this.isActive,
        'weui-search-bar_filled-grey': this.variant === 'grey',
        'weui-search-bar_outlined': this.variant === 'outlined',
        'weui-search-bar_homepage': this.variant === 'homepage',
      };
    },
    showLabel() {
      return this.variant !== 'outlined' && this.variant !== 'homepage';
    },
    showSearchIcon() {
      return this.variant !== 'outlined' && this.variant !== 'homepage';
    },
    showCancelButton() {
      if (!this.showCancel || this.variant === 'homepage') {
        return false;
      }
      return this.variant === 'outlined' || this.focused || this.hasValue;
    },
  },
  methods: {
    focusInput() {
      if (this.disabled) {
        return;
      }
      this.inputFocused = true;
      this.focused = true;
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.inputFocused = false;
      this.focused = false;
      this.$emit('blur', event);
    },
    handleInput(event) {
      const value = event.detail.value;
      this.$emit('update:modelValue', value);
      this.$emit('input', value);
    },
    handleSearch() {
      this.$emit('search', this.modelValue);
    },
    handleClear() {
      this.$emit('update:modelValue', '');
      this.$emit('clear');
      this.$nextTick(() => {
        this.focusInput();
      });
    },
    handleCancel() {
      this.$emit('update:modelValue', '');
      this.inputFocused = false;
      this.focused = false;
      this.$emit('cancel');
    },
    handleBack() {
      this.$emit('back');
    },
    handleHomepageClick() {
      this.$emit('click');
    },
  },
};
</script>
