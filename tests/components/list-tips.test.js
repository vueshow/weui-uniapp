import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiListTips from '../../uni_modules/weui-uni/components/weui-list-tips/weui-list-tips.vue';

describe('WeuiListTips', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiListTips);
    expect(wrapper.find('.weui-list-tips').exists()).toBe(true);
  });

  it('渲染字符串数组', () => {
    const wrapper = mountComponent(WeuiListTips, {
      props: { items: ['提示1', '提示2', '提示3'] },
    });
    expect(wrapper.findAll('.weui-list-tips__item').length).toBe(3);
    expect(wrapper.text()).toContain('提示1');
  });

  it('渲染对象数组', () => {
    const wrapper = mountComponent(WeuiListTips, {
      props: { items: [{ text: '对象提示', value: 'v1' }] },
    });
    expect(wrapper.text()).toContain('对象提示');
  });

  it('getText 字符串直接返回', () => {
    const wrapper = mountComponent(WeuiListTips);
    expect(wrapper.vm.getText('文本')).toBe('文本');
  });

  it('getText 对象返回 text 属性', () => {
    const wrapper = mountComponent(WeuiListTips);
    expect(wrapper.vm.getText({ text: '对象文本' })).toBe('对象文本');
  });

  it('getText 空对象返回空字符串', () => {
    const wrapper = mountComponent(WeuiListTips);
    expect(wrapper.vm.getText({})).toBe('');
  });

  it('getKey 对象有 value 返回 value', () => {
    const wrapper = mountComponent(WeuiListTips);
    expect(wrapper.vm.getKey({ value: 'k1' }, 0)).toBe('k1');
  });

  it('getKey 无 value 返回 index', () => {
    const wrapper = mountComponent(WeuiListTips);
    expect(wrapper.vm.getKey({}, 2)).toBe(2);
  });

  it('getKey 字符串返回 index', () => {
    const wrapper = mountComponent(WeuiListTips);
    expect(wrapper.vm.getKey('文本', 1)).toBe(1);
  });
});
