import { describe, it, expect } from 'vitest';
import WeuiSearchbar from '../../uni_modules/weui-uni/components/weui-searchbar/weui-searchbar.vue';
import { mountComponent, flush } from '../helpers';

describe('WeuiSearchbar', () => {
  it('渲染 searchbar', () => {
    const wrapper = mountComponent(WeuiSearchbar);
    expect(wrapper.find('.weui-search-bar').exists()).toBe(true);
  });

  it('默认 variant=default 模式', () => {
    const wrapper = mountComponent(WeuiSearchbar);
    expect(wrapper.find('.weui-search-bar').exists()).toBe(true);
  });

  it('variant=grey 模式', () => {
    const wrapper = mountComponent(WeuiSearchbar, { props: { variant: 'grey' } });
    expect(wrapper.find('.weui-search-bar_filled-grey').exists()).toBe(true);
  });

  it('outlined 变体', () => {
    const wrapper = mountComponent(WeuiSearchbar, { props: { variant: 'outlined' } });
    expect(wrapper.find('.weui-search-bar_outlined').exists()).toBe(true);
  });

  it('homepage 变体', () => {
    const wrapper = mountComponent(WeuiSearchbar, { props: { variant: 'homepage' } });
    expect(wrapper.find('.weui-search-bar_homepage').exists()).toBe(true);
  });

  it('hasValue 计算', () => {
    const withValue = mountComponent(WeuiSearchbar, { props: { modelValue: 'test' } });
    expect(withValue.vm.hasValue).toBe(true);

    const noValue = mountComponent(WeuiSearchbar, { props: { modelValue: '' } });
    expect(noValue.vm.hasValue).toBe(false);
  });

  it('handleInput 触发 emit', () => {
    const wrapper = mountComponent(WeuiSearchbar);
    wrapper.vm.handleInput({ detail: { value: '搜索词' } });
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('搜索词');
    expect(wrapper.emitted('input')).toBeTruthy();
  });

  it('handleSearch 触发 search emit', () => {
    const wrapper = mountComponent(WeuiSearchbar, { props: { modelValue: '关键词' } });
    wrapper.vm.handleSearch();
    expect(wrapper.emitted('search')).toBeTruthy();
    expect(wrapper.emitted('search')[0][0]).toBe('关键词');
  });

  it('handleClear 清空值', () => {
    const wrapper = mountComponent(WeuiSearchbar, { props: { modelValue: 'test' } });
    wrapper.vm.handleClear();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('');
    expect(wrapper.emitted('clear')).toBeTruthy();
  });

  it('handleCancel 取消', () => {
    const wrapper = mountComponent(WeuiSearchbar, { props: { modelValue: 'test' } });
    wrapper.vm.handleCancel();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('');
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });

  it('handleBack 返回', () => {
    const wrapper = mountComponent(WeuiSearchbar);
    wrapper.vm.handleBack();
    expect(wrapper.emitted('back')).toBeTruthy();
  });

  it('handleHomepageClick', () => {
    const wrapper = mountComponent(WeuiSearchbar);
    wrapper.vm.handleHomepageClick();
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('focusInput 聚焦', () => {
    const wrapper = mountComponent(WeuiSearchbar);
    wrapper.vm.focusInput();
    expect(wrapper.vm.focused).toBe(true);
    expect(wrapper.vm.inputFocused).toBe(true);
  });

  it('focusInput disabled 时不聚焦', () => {
    const wrapper = mountComponent(WeuiSearchbar, { props: { disabled: true } });
    wrapper.vm.focusInput();
    expect(wrapper.vm.focused).toBe(false);
  });

  it('showLabel — default 变体显示', () => {
    const wrapper = mountComponent(WeuiSearchbar);
    expect(wrapper.vm.showLabel).toBe(true);
  });

  it('showLabel — outlined 变体隐藏', () => {
    const wrapper = mountComponent(WeuiSearchbar, { props: { variant: 'outlined' } });
    expect(wrapper.vm.showLabel).toBe(false);
  });
});
