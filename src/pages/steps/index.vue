<template>
  <view class="page" :class="pageClass">
    <view class="page__hd">
      <view class="page__title">Steps</view>
      <view class="page__desc">步骤条</view>
    </view>
    <view class="page__bd page__bd_spacing">
      <button
        class="weui-btn"
        :class="activeTab === 0 ? 'weui-btn_primary' : 'weui-btn_default'"
        hover-class="weui-btn_active"
        @click="activeTab = 0"
      >
        垂直型
      </button>
      <button
        class="weui-btn"
        :class="activeTab === 1 ? 'weui-btn_primary' : 'weui-btn_default'"
        hover-class="weui-btn_active"
        @click="activeTab = 1"
      >
        水平型
      </button>
    </view>

    <view v-if="activeTab === 0" class="steps-demo">
      <weui-steps type="vertical" :items="baseSteps" />
      <weui-steps type="vertical" :items="oneSuccessSteps" />
      <weui-steps type="vertical" :items="waitingSteps" />
      <weui-steps type="vertical" :items="allSuccessSteps" />
    </view>

    <view v-else class="steps-demo">
      <weui-steps type="horizonal" :items="baseSteps" hide-content />
      <weui-steps type="horizonal" :items="oneSuccessSteps" hide-content />
      <weui-steps type="horizonal" :items="twoSuccessSteps" hide-content />
      <weui-steps type="horizonal" :items="allSuccessSteps" hide-content />
      <weui-steps type="horizonal-primary" :items="twoSuccessSteps" />
      <weui-steps type="horizonal-center" :items="twoSuccessSteps" />
    </view>
  </view>
</template>

<script>
const createSteps = (successCount = 0) => Array.from({ length: 4 }, (_, index) => ({
  title: '标题',
  desc: '描述内容详情',
  success: index < successCount,
}));

export default {
  data() {
    return {
      activeTab: 0,
      baseSteps: createSteps(0),
      oneSuccessSteps: createSteps(1),
      twoSuccessSteps: createSteps(2),
      waitingSteps: [
        { title: '标题', desc: '描述内容详情', success: true },
        { title: '标题', desc: '描述内容详情', success: true, iconPrev: true },
        { title: '标题', desc: '描述内容详情', icon: 'weui-icon-waiting' },
        { title: '标题', desc: '描述内容详情' },
      ],
      allSuccessSteps: [
        { title: '标题', desc: '描述内容详情', success: true },
        { title: '标题', desc: '描述内容详情', success: true },
        { title: '标题', desc: '描述内容详情', success: true, iconPrev: true },
        { title: '标题', desc: '描述内容详情', success: true, icon: 'weui-icon-success' },
      ],
    };
  },
  computed: {
    pageClass() {
      return this.activeTab === 0 ? 'steps_vertical' : 'steps_horizonal';
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

.steps_vertical .weui-steps,
.steps_horizonal .weui-steps {
  max-width: 50%;
  margin: 40px auto 80px;
}

.steps_horizonal .weui-steps_horizonal {
  max-width: none;
}

.weui-btn::after {
  border: 0;
}
</style>
