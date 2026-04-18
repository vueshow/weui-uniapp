<template>
  <view class="page weui-uni-page">
    <view class="page__hd">
      <view class="page__title">SearchBar</view>
      <view class="page__desc">搜索栏</view>
    </view>

    <view class="page__bd">
      <weui-cell-group title="Filled">
        <weui-searchbar
          v-model="filledValue"
          words="微信"
          placeholder="搜索"
          @search="handleSearch"
          @cancel="handleCancel"
        />
        <view v-if="filledValue" role="listbox" class="weui-cells searchbar-result">
          <weui-cell
            v-for="item in results"
            :key="item"
            :title="item"
            arrow
            clickable
            @click="handleResult(item)"
          />
        </view>
      </weui-cell-group>

      <weui-cell-group title="Filled Grey">
        <weui-searchbar
          v-model="greyValue"
          variant="grey"
          placeholder="搜索"
          @search="handleSearch"
        />
      </weui-cell-group>

      <weui-cell-group title="Outlined">
        <weui-searchbar
          v-model="outlinedValue"
          variant="outlined"
          placeholder="搜索"
          @search="handleSearch"
          @cancel="handleCancel"
        />
      </weui-cell-group>

      <weui-cell-group title="Homepage">
        <weui-searchbar variant="homepage" placeholder="搜索" @click="handleHomepageClick">
          <template #right>
            <view role="img" aria-label="拍摄" class="weui-icon-camera" />
          </template>
        </weui-searchbar>
      </weui-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      filledValue: '',
      greyValue: '',
      outlinedValue: '',
      results: ['实时搜索文本', '实时搜索文本', '实时搜索文本', '实时搜索文本'],
    };
  },
  methods: {
    handleSearch(value) {
      uni.showToast({
        title: value ? `搜索：${value}` : '请输入搜索内容',
        icon: 'none',
      });
    },
    handleCancel() {
      uni.showToast({
        title: '取消搜索',
        icon: 'none',
      });
    },
    handleResult(item) {
      uni.showToast({
        title: item,
        icon: 'none',
      });
    },
    handleHomepageClick() {
      uni.showToast({
        title: '点击首页搜索栏',
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

.searchbar-result {
  margin-top: 0;
}
</style>
