import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiTabbar from '../../uni_modules/weui-uni/components/weui-tabbar/weui-tabbar.vue';

describe('WeuiTabbar', () => {
  const items = [
    { label: '首页', value: 'home', icon: '/icon/home.png' },
    { label: '消息', value: 'msg', icon: '/icon/msg.png', badge: '3' },
    { label: '我的', value: 'me', iconText: '👤', dot: true },
  ];

  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiTabbar, { props: { items } });
    expect(wrapper.find('.weui-tabbar').exists()).toBe(true);
  });

  it('渲染所有项', () => {
    const wrapper = mountComponent(WeuiTabbar, { props: { items } });
    expect(wrapper.findAll('.weui-tabbar__item').length).toBe(3);
  });

  it('modelValue 选中状态', () => {
    const wrapper = mountComponent(WeuiTabbar, { props: { items, modelValue: 'msg' } });
    const activeItems = wrapper.findAll('.weui-bar__item_on');
    expect(activeItems.length).toBe(1);
  });

  it('handleSelect 触发事件', () => {
    const wrapper = mountComponent(WeuiTabbar, { props: { items, modelValue: 'home' } });
    wrapper.vm.handleSelect(items[1], 1);
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['msg']);
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  it('disabled 项不触发事件', () => {
    const disabledItems = [{ label: '禁用', value: 'd1', disabled: true }];
    const wrapper = mountComponent(WeuiTabbar, { props: { items: disabledItems } });
    wrapper.vm.handleSelect(disabledItems[0], 0);
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('有 badge 时渲染 badge 元素', () => {
    const wrapper = mountComponent(WeuiTabbar, { props: { items } });
    expect(wrapper.find('.weui-tabbar__badge').exists()).toBe(true);
  });

  it('有 dot 时渲染 dot 元素', () => {
    const wrapper = mountComponent(WeuiTabbar, { props: { items } });
    expect(wrapper.find('.weui-badge_dot').exists()).toBe(true);
  });
});
