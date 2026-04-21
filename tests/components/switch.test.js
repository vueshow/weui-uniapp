import { describe, it, expect } from 'vitest';
import WeuiSwitch from '../../uni_modules/weui-uni/components/weui-switch/weui-switch.vue';
import { mountComponent } from '../helpers';

describe('WeuiSwitch', () => {
  it('渲染 switch', () => {
    const wrapper = mountComponent(WeuiSwitch);
    expect(wrapper.find('.weui-switch-cp').exists()).toBe(true);
  });

  it('默认关闭', () => {
    const wrapper = mountComponent(WeuiSwitch, { props: { modelValue: false } });
    expect(wrapper.find('.weui-switch-cp__box_checked').exists()).toBe(false);
  });

  it('打开状态', () => {
    const wrapper = mountComponent(WeuiSwitch, { props: { modelValue: true } });
    expect(wrapper.find('.weui-switch-cp__box_checked').exists()).toBe(true);
  });

  it('点击切换', async () => {
    const wrapper = mountComponent(WeuiSwitch, { props: { modelValue: false } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(true);
    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')[0][0]).toBe(true);
  });

  it('再次点击关闭', async () => {
    const wrapper = mountComponent(WeuiSwitch, { props: { modelValue: true } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(false);
  });

  it('disabled 时不触发', async () => {
    const wrapper = mountComponent(WeuiSwitch, {
      props: { modelValue: false, disabled: true },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });
});
