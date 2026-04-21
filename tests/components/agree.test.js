import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiAgree from '../../uni_modules/weui-uni/components/weui-agree/weui-agree.vue';

describe('WeuiAgree', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiAgree);
    expect(wrapper.find('.weui-agree').exists()).toBe(true);
  });

  it('默认 modelValue=false 时未选中', () => {
    const wrapper = mountComponent(WeuiAgree);
    expect(wrapper.vm.checked).toBe(false);
  });

  it('modelValue=true 时选中', () => {
    const wrapper = mountComponent(WeuiAgree, { props: { modelValue: true } });
    expect(wrapper.vm.checked).toBe(true);
    expect(wrapper.find('.weui-agree__checkbox_checked').exists()).toBe(true);
  });

  it('toggle 切换状态', async () => {
    const wrapper = mountComponent(WeuiAgree, { props: { modelValue: false } });
    await wrapper.vm.toggle();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([true]);
    expect(wrapper.emitted('change')[0]).toEqual([true]);
  });

  it('disabled 时不触发切换', async () => {
    const wrapper = mountComponent(WeuiAgree, { props: { modelValue: false, disabled: true } });
    await wrapper.vm.toggle();
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    expect(wrapper.emitted('change')).toBeFalsy();
  });

  it('warn 属性添加 class', () => {
    const wrapper = mountComponent(WeuiAgree, { props: { warn: true } });
    expect(wrapper.vm.agreeClass['weui-agree_warn']).toBe(true);
  });

  it('animated 属性添加 class', () => {
    const wrapper = mountComponent(WeuiAgree, { props: { animated: true } });
    expect(wrapper.vm.agreeClass['weui-agree_animate']).toBe(true);
  });

  it('hotarea 默认为 true', () => {
    const wrapper = mountComponent(WeuiAgree);
    expect(wrapper.vm.agreeClass['weui-wa-hotarea']).toBe(true);
  });

  it('hotarea=false 移除 class', () => {
    const wrapper = mountComponent(WeuiAgree, { props: { hotarea: false } });
    expect(wrapper.vm.agreeClass['weui-wa-hotarea']).toBe(false);
  });
});
