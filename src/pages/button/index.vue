<template>
  <view class="page button_default weui-uni-page">
    <view class="page__hd">
      <view class="page__title">Button</view>
      <view class="page__desc">按钮</view>
    </view>
    <view class="page__bd">
      <view class="button-sp-area">
        <weui-button text="主要操作" @click="handleClick('primary')" />
        <weui-button :loading="true" @click="handleClick('primary-loading-only')" />
        <weui-button text="主要操作" :loading="true" @click="handleClick('primary-loading')" />
        <weui-button text="主要操作" :disabled="true" />

        <weui-button text="次要操作" type="default" @click="handleClick('default')" />
        <weui-button type="default" :loading="true" @click="handleClick('default-loading-only')" />
        <weui-button
          text="次要操作"
          type="default"
          :loading="true"
          @click="handleClick('default-loading')"
        />
        <weui-button text="次要操作" type="default" :disabled="true" />

        <weui-button text="警示操作" type="warn" @click="handleClick('warn')" />
        <weui-button type="warn" :loading="true" @click="handleClick('warn-loading-only')" />
        <weui-button
          text="警示操作"
          type="warn"
          :loading="true"
          @click="handleClick('warn-loading')"
        />
        <weui-button text="警示操作" type="warn" :disabled="true" />
      </view>

      <view class="button-sp-area">
        <weui-button text="按钮宽度" @click="handleClick('width-short')" />
        <weui-button text="按钮宽度自适应内容" @click="handleClick('width-auto')" />
        <weui-button
          text="按钮宽度自适应内容，达到最大值后折行，最大行数两行的示例"
          @click="handleClick('width-multiline')"
        />
        <weui-button
          text="按钮宽度自适应内容"
          :loading="true"
          @click="handleClick('width-auto-loading')"
        />
        <weui-button
          text="按钮宽度自适应内容，达到最大值后折行，最大行数两行的示例"
          :loading="true"
          @click="handleClick('width-multiline-loading')"
        />
      </view>

      <view class="button-sp-area">
        <weui-button text="Medium" size="medium" @click="handleClick('medium')" />
        <weui-button
          text="Medium"
          type="default"
          size="medium"
          @click="handleClick('medium-default')"
        />
        <weui-button text="Medium" type="warn" size="medium" @click="handleClick('medium-warn')" />
      </view>

      <view class="button-sp-area overlay">
        <weui-button text="overlay 按钮" overlay @click="handleClick('overlay-primary')" />
        <weui-button
          text="overlay 按钮"
          type="default"
          overlay
          @click="handleClick('overlay-default')"
        />
        <weui-button text="overlay 按钮" type="warn" overlay @click="handleClick('overlay-warn')" />
      </view>

      <view class="button-sp-area overlay">
        <weui-button text="overlay 按钮" overlay :disabled="true" />
        <weui-button text="overlay 按钮" type="default" overlay :disabled="true" />
        <weui-button text="overlay 按钮" type="warn" overlay :disabled="true" />
      </view>

      <view class="button-sp-area">
        <weui-button
          text="按钮"
          type="primary"
          size="mini"
          :block="false"
          @click="handleClick('mini-primary')"
        />
        <weui-button
          text="按钮"
          type="default"
          size="mini"
          :block="false"
          @click="handleClick('mini-default')"
        />
        <weui-button
          text="按钮"
          type="warn"
          size="mini"
          :block="false"
          @click="handleClick('mini-warn')"
        />
      </view>

      <view class="button-sp-area margin">
        <weui-button
          class="weui-btn_margin-reset"
          text="按钮"
          type="default"
          size="mini"
          :block="false"
          @click="handleClick('mini-margin-default')"
        />
        <weui-button
          class="weui-btn_margin-reset"
          text="按钮"
          type="primary"
          size="mini"
          :block="false"
          @click="handleClick('mini-margin-primary')"
        />
        <weui-button
          class="weui-btn_margin-reset"
          text="按钮"
          type="warn"
          size="mini"
          :block="false"
          @click="handleClick('mini-margin-warn')"
        />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleClick(type) {
      uni.showToast({
        title: `点击: ${type}`,
        icon: 'none',
      });
    },
  },
};
</script>

<style>
.page {
  min-height: 100vh;
  color: var(--weui-FG-0);
}

.page__hd {
  padding: 40px;
}

.page__title {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}

.page__desc {
  margin-top: 4px;
  color: var(--weui-FG-1);
  text-align: left;
  font-size: 14px;
}

.page.button_default {
  background-color: var(--weui-BG-0);
}

.page.button_default .page__bd {
  padding: 0;
}

.button-sp-area {
  margin: 15px auto;
  padding: 15px;
}

.button-sp-area.overlay {
  padding: 15px 0;
  background: var(--weui-BRAND);
}

.button-sp-area.overlay .weui-btn_mini {
  margin-top: 16px;
}

.button-sp-area:not(.margin) {
  text-align: center;
}

.button-sp-area:not(.margin) .weui-btn_mini {
  vertical-align: middle;
  margin: 0 12px;
}

.button-sp-area.margin {
  display: flex;
  justify-content: space-between;
}
</style>
