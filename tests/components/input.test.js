import { describe, it, expect } from 'vitest';
import WeuiInput from '../../uni_modules/weui-uni/components/weui-input/weui-input.vue';
import { mountComponent } from '../helpers';

describe('WeuiInput', () => {
  it('渲染 input', () => {
    const wrapper = mountComponent(WeuiInput);
    expect(wrapper.find('.weui-input').exists()).toBe(true);
  });

  it('displayValue — 字符串', () => {
    const wrapper = mountComponent(WeuiInput, { props: { modelValue: 'hello' } });
    expect(wrapper.vm.displayValue).toBe('hello');
  });

  it('displayValue — 数字转字符串', () => {
    const wrapper = mountComponent(WeuiInput, { props: { modelValue: 123 } });
    expect(wrapper.vm.displayValue).toBe('123');
  });

  it('displayValue — null/undefined 返回空字符串', () => {
    const nullWrapper = mountComponent(WeuiInput, { props: { modelValue: null } });
    expect(nullWrapper.vm.displayValue).toBe('');

    const undefWrapper = mountComponent(WeuiInput, { props: { modelValue: undefined } });
    expect(undefWrapper.vm.displayValue).toBe('');
  });

  it('handleInput 触发 update:modelValue', () => {
    const wrapper = mountComponent(WeuiInput);
    wrapper.vm.handleInput({ detail: { value: 'test' } });
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('test');
  });

  it('handleInput 无 detail 时返回空字符串', () => {
    const wrapper = mountComponent(WeuiInput);
    wrapper.vm.handleInput({});
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('');
  });

  it('handleChange 触发 update:modelValue + change', () => {
    const wrapper = mountComponent(WeuiInput);
    const event = { detail: { value: 'changed' } };
    wrapper.vm.handleChange(event);
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('changed');
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  it('handleConfirm 触发 confirm', () => {
    const wrapper = mountComponent(WeuiInput);
    wrapper.vm.handleConfirm({});
    expect(wrapper.emitted('confirm')).toBeTruthy();
  });

  it('handleFocus 触发 focus', () => {
    const wrapper = mountComponent(WeuiInput);
    wrapper.vm.handleFocus({});
    expect(wrapper.emitted('focus')).toBeTruthy();
  });

  it('handleBlur 触发 blur', () => {
    const wrapper = mountComponent(WeuiInput);
    wrapper.vm.handleBlur({});
    expect(wrapper.emitted('blur')).toBeTruthy();
  });

  it('placeholder prop', () => {
    const wrapper = mountComponent(WeuiInput, { props: { placeholder: '请输入' } });
    expect(wrapper.find('.weui-input').attributes('placeholder')).toBe('请输入');
  });
});
