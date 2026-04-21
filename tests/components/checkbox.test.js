import { describe, it, expect } from 'vitest';
import WeuiCheckbox from '../../uni_modules/weui-uni/components/weui-checkbox/weui-checkbox.vue';
import { mountComponent } from '../helpers';

describe('WeuiCheckbox', () => {
  it('渲染默认 checkbox', () => {
    const wrapper = mountComponent(WeuiCheckbox);
    expect(wrapper.find('.weui-check__label').exists()).toBe(true);
  });

  it('Boolean 模式 — 点击切换', async () => {
    const wrapper = mountComponent(WeuiCheckbox, { props: { modelValue: false } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(true);
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  it('Boolean 模式 — checked 状态', () => {
    const wrapper = mountComponent(WeuiCheckbox, { props: { modelValue: true } });
    expect(wrapper.vm.checked).toBe(true);
  });

  it('Array 模式 — 选中', async () => {
    const wrapper = mountComponent(WeuiCheckbox, {
      props: { modelValue: ['a'], value: 'b' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual(['a', 'b']);
  });

  it('Array 模式 — 取消选中', async () => {
    const wrapper = mountComponent(WeuiCheckbox, {
      props: { modelValue: ['a', 'b'], value: 'b' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual(['a']);
  });

  it('disabled 时不触发', async () => {
    const wrapper = mountComponent(WeuiCheckbox, {
      props: { modelValue: false, disabled: true },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('label prop 渲染', () => {
    const wrapper = mountComponent(WeuiCheckbox, { props: { label: '同意' } });
    expect(wrapper.text()).toContain('同意');
  });

  it('slot 渲染', () => {
    const wrapper = mountComponent(WeuiCheckbox, {
      slots: { default: '自定义' },
    });
    expect(wrapper.text()).toContain('自定义');
  });
});
