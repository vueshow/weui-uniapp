import { defineConfig } from 'vitepress';

const base = process.env.VITEPRESS_BASE || '/';

const componentSidebar = [
  {
    text: '基础组件',
    items: [
      { text: 'Article 文章', link: '/components/article' },
      { text: 'Badge 徽章', link: '/components/badge' },
      { text: 'Button 按钮', link: '/components/button' },
      { text: 'Empty State 空状态', link: '/components/empty-state' },
      { text: 'Footer 页脚', link: '/components/footer' },
      { text: 'Icons 图标', link: '/components/icons' },
      { text: 'Loading 加载', link: '/components/loading' },
      { text: 'Loadmore 加载更多', link: '/components/loadmore' },
      { text: 'Progress 进度条', link: '/components/progress' },
    ],
  },
  {
    text: '布局组件',
    items: [
      { text: 'Cell 列表项', link: '/components/cell' },
      { text: 'Flex 布局', link: '/components/flex' },
      { text: 'Grid 九宫格', link: '/components/grid' },
      { text: 'List 列表', link: '/components/list' },
      { text: 'List Tips 列表提示', link: '/components/list-tips' },
      { text: 'Panel 面板', link: '/components/panel' },
      { text: 'Steps 步骤条', link: '/components/steps' },
    ],
  },
  {
    text: '表单组件',
    items: [
      { text: 'Agree 协议', link: '/components/agree' },
      { text: 'Checkbox 复选框', link: '/components/checkbox' },
      { text: 'Form 表单', link: '/components/form' },
      { text: 'Form Preview 表单预览', link: '/components/form-preview' },
      { text: 'Input 输入框', link: '/components/input' },
      { text: 'Picker 选择器', link: '/components/picker' },
      { text: 'Radio 单选框', link: '/components/radio' },
      { text: 'Slider 滑块', link: '/components/slider' },
      { text: 'Switch 开关', link: '/components/switch' },
      { text: 'Uploader 上传', link: '/components/uploader' },
    ],
  },
  {
    text: '反馈组件',
    items: [
      { text: 'ActionSheet 菜单', link: '/components/actionsheet' },
      { text: 'Dialog 对话框', link: '/components/dialog' },
      { text: 'Gallery 画廊', link: '/components/gallery' },
      { text: 'Half-screen Dialog 半屏弹窗', link: '/components/half-screen-dialog' },
      { text: 'Information Bar 信息栏', link: '/components/information-bar' },
      { text: 'Msg 提示页', link: '/components/msg' },
      { text: 'Toast 提示', link: '/components/toast' },
      { text: 'Toptips 顶部提示', link: '/components/toptips' },
    ],
  },
  {
    text: '导航搜索',
    items: [
      { text: 'Navbar 顶部导航', link: '/components/navbar' },
      { text: 'Search Bar 搜索栏', link: '/components/searchbar' },
      { text: 'Tabbar 底部导航', link: '/components/tabbar' },
    ],
  },
];

export default defineConfig({
  base,
  title: 'WeUI UniApp',
  description: '基于 WeUI 视觉体系封装的 uni-app Vue 3 组件库',
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#07c160' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/' },
      { text: '更新日志', link: '/guide/changelog' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/weui-uniapp' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装使用', link: '/guide/quick-start' },
            { text: '主题样式', link: '/guide/theme' },
            { text: '更新日志', link: '/guide/changelog' },
          ],
        },
      ],
      '/components/': componentSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vueshow/weui-uniapp' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2026 WeUI UniApp',
    },
  },
});
