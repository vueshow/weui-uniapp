import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiNavbar from '../../uni_modules/weui-uni/components/weui-navbar/weui-navbar.vue';

describe('WeuiNavbar', () => {
  const items = [
    { label: '标签1', value: 'tab1' },
    { label: '标签2', value: 'tab2' },
    { label: '标签3', value: 'tab3' },
  ];

  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiNavbar, { props: { items } });
    expect(wrapper.find('.weui-navbar').exists()).toBe(true);
  });

  it('渲染所有标签', () => {
    const wrapper = mountComponent(WeuiNavbar, { props: { items } });
    expect(wrapper.findAll('.weui-navbar__item').length).toBe(3);
  });

  it('modelValue 选中状态', () => {
    const wrapper = mountComponent(WeuiNavbar, { props: { items, modelValue: 'tab2' } });
    const activeItems = wrapper.findAll('.weui-bar__item_on');
    expect(activeItems.length).toBe(1);
  });

  it('handleSelect 触发 change 事件', () => {
    const wrapper = mountComponent(WeuiNavbar, { props: { items, modelValue: 'tab1' } });
    wrapper.vm.handleSelect(items[1], 1);
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['tab2']);
    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')[0]).toEqual([items[1], 1]);
  });

  it('disabled 项不触发事件', () => {
    const disabledItems = [{ label: '禁用', value: 'd1', disabled: true }];
    const wrapper = mountComponent(WeuiNavbar, { props: { items: disabledItems } });
    wrapper.vm.handleSelect(disabledItems[0], 0);
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
});
