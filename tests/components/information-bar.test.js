import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiInformationBar from '../../uni_modules/weui-uni/components/weui-information-bar/weui-information-bar.vue';

describe('WeuiInformationBar', () => {
  it('默认 modelValue=true 时显示', () => {
    const wrapper = mountComponent(WeuiInformationBar);
    expect(wrapper.find('.weui-information-bar').exists()).toBe(true);
  });

  it('modelValue=false 时隐藏', () => {
    const wrapper = mountComponent(WeuiInformationBar, { props: { modelValue: false } });
    expect(wrapper.find('.weui-information-bar').exists()).toBe(false);
  });

  it('visible 计算属性', () => {
    const wrapper = mountComponent(WeuiInformationBar, { props: { modelValue: true } });
    expect(wrapper.vm.visible).toBe(true);
  });

  it('barClass 根据类型生成', () => {
    const wrapper = mountComponent(WeuiInformationBar, { props: { type: 'tips-strong' } });
    expect(wrapper.vm.barClass).toBe('weui-information-bar_tips-strong');
  });

  it('close 触发 update:modelValue 和 close 事件', () => {
    const wrapper = mountComponent(WeuiInformationBar);
    wrapper.vm.close();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([false]);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleLink 触发 link-click 事件', () => {
    const wrapper = mountComponent(WeuiInformationBar);
    wrapper.vm.handleLink();
    expect(wrapper.emitted('link-click')).toBeTruthy();
  });

  it('显示文本', () => {
    const wrapper = mountComponent(WeuiInformationBar, { props: { text: '警告信息' } });
    expect(wrapper.text()).toContain('警告信息');
  });

  it('closeable=true 显示关闭按钮', () => {
    const wrapper = mountComponent(WeuiInformationBar, { props: { closeable: true } });
    expect(wrapper.find('.weui-btn_icon').exists()).toBe(true);
  });

  it('linkText 显示链接', () => {
    const wrapper = mountComponent(WeuiInformationBar, { props: { linkText: '查看详情' } });
    expect(wrapper.find('.weui-link').exists()).toBe(true);
  });
});
