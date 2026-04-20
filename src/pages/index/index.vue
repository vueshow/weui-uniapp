<template>
  <view class="page home">
    <view class="page__hd">
      <view class="page__title">
        <image class="page__logo" src="/static/weui-home/logo.png" mode="heightFix" />
      </view>
      <view class="page__desc">
        WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。
      </view>
    </view>

    <view class="page__bd page__bd_spacing">
      <view role="menubar" aria-label="WeUI组件列表">
        <view
          v-for="(category, index) in categories"
          :key="category.name"
          class="category"
          :class="{ js_show: activeCategory === index }"
          role="none"
        >
          <view
            class="weui-flex js_category"
            role="button"
            :aria-expanded="(activeCategory === index).toString()"
            @click="toggleCategory(index)"
          >
            <view class="weui-flex__item">{{ category.name }}</view>
            <image class="category__icon" :src="category.icon" mode="aspectFit" />
          </view>
          <view class="page__category" :aria-hidden="(activeCategory !== index).toString()">
            <view class="weui-cells page__category-content">
              <view
                v-for="item in category.items"
                :key="item.name"
                class="weui-cell weui-cell_active weui-cell_access js_item"
                role="menuitem"
                @click="go(item.path)"
              >
                <view class="weui-cell__bd">
                  <view>{{ item.name }}</view>
                </view>
                <view class="weui-cell__ft" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const iconBase = '/static/weui-home/';

export default {
  data() {
    return {
      activeCategory: -1,
      categories: [
        {
          name: '表单',
          icon: `${iconBase}icon_nav_form.png`,
          items: [
            { name: 'Button', path: '/pages/button/index' },
            { name: 'Form', path: '/pages/form/index' },
            { name: 'List', path: '/pages/list/index' },
            { name: 'Slider', path: '/pages/slider/index' },
            { name: 'Uploader', path: '/pages/uploader/index' },
          ],
        },
        {
          name: '基础组件',
          icon: `${iconBase}icon_nav_layout.png`,
          items: [
            { name: 'Article', path: '/pages/article/index' },
            { name: 'Badge', path: '/pages/badge/index' },
            { name: 'Flex', path: '/pages/flex/index' },
            { name: 'Footer', path: '/pages/footer/index' },
            { name: 'Gallery', path: '/pages/gallery/index' },
            { name: 'Grid', path: '/pages/grid/index' },
            { name: 'Icons', path: '/pages/icons/index' },
            { name: 'Loading', path: '/pages/loading/index' },
            { name: 'Loadmore', path: '/pages/loadmore/index' },
            { name: 'Panel', path: '/pages/panel/index' },
            { name: 'Preview', path: '/pages/form-preview/index' },
            { name: 'Progress', path: '/pages/progress/index' },
            { name: 'Steps', path: '/pages/steps/index' },
          ],
        },
        {
          name: '操作反馈',
          icon: `${iconBase}icon_nav_feedback.png`,
          items: [
            { name: 'Actionsheet', path: '/pages/actionsheet/index' },
            { name: 'Dialog', path: '/pages/dialog/index' },
            { name: 'Half-screen Dialog', path: '/pages/half-screen-dialog/index' },
            { name: 'Msg', path: '/pages/msg/index' },
            { name: 'Picker', path: '/pages/picker/index' },
            { name: 'Address Picker', path: '/pages/address-picker/index' },
            { name: 'Toast', path: '/pages/toast/index' },
            { name: 'Information Bar', path: '/pages/information-bar/index' },
          ],
        },
        {
          name: '导航相关',
          icon: `${iconBase}icon_nav_nav.png`,
          items: [
            { name: 'Navbar', path: '/pages/navbar/index' },
            { name: 'Tabbar', path: '/pages/tabbar/index' },
          ],
        },
        {
          name: '搜索相关',
          icon: `${iconBase}icon_nav_search.png`,
          items: [
            { name: 'Search Bar', path: '/pages/searchbar/index' },
          ],
        },
      ],
    };
  },
  methods: {
    toggleCategory(index) {
      this.activeCategory = this.activeCategory === index ? -1 : index;
    },
    go(url) {
      uni.navigateTo({
        url,
        fail: () => {
          if (typeof window !== 'undefined') {
            window.location.hash = `#${url}`;
          }
        },
      });
    },
  },
};
</script>

<style>
.page.home {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background-color: var(--weui-BG-0);
  color: var(--weui-FG-0);
  line-height: 1.6;
}

.page__hd {
  padding: 40px;
}

.page__title {
  margin-bottom: 15px;
  font-size: 0;
  text-align: left;
}

.page__logo {
  height: 21px;
  vertical-align: top;
}

.page__desc {
  margin-top: 4px;
  color: var(--weui-FG-1);
  text-align: left;
  font-size: 14px;
  line-height: 1.6;
}

.page__bd_spacing {
  padding: 0 16px;
}

.category {
  margin: 8px 0;
  overflow: hidden;
  border-radius: 2px;
  background-color: var(--weui-BG-2);
  cursor: default;
}

.category:first-child {
  margin-top: 0;
}

.category.js_show .js_category {
  opacity: 0.5;
}

.category.js_show .page__category {
  height: auto;
}

.category.js_show .page__category-content {
  opacity: 1;
  transform: translateY(0);
}

.js_category {
  display: flex;
  align-items: center;
  padding: 20px;
  transition: 0.3s;
}

.js_category:active {
  background-color: var(--weui-BG-COLOR-ACTIVE);
}

.weui-flex__item {
  flex: 1;
}

.category__icon {
  width: 30px;
  height: 30px;
}

.page__category {
  height: 0;
  overflow: hidden;
}

.page__category-content {
  margin-top: 0;
  opacity: 0;
  transform: translateY(-50%);
  transition: 0.3s;
}

.page__category-content::before,
.page__category-content::after {
  display: none;
}

.page__category-content .weui-cell {
  padding-left: 20px;
  padding-right: 20px;
}

.page__category-content .weui-cell::before {
  left: 20px;
  right: 20px;
}
</style>
