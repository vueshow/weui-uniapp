import { describe, it, expect } from 'vitest';
import WeuiRadio from '../../uni_modules/weui-uni/components/weui-radio/weui-radio.vue';
import { mountComponent } from '../helpers';

describe('WeuiRadio', () => {
  it('渲染 radio', () => {
    const wrapper = mountComponent(WeuiRadio);
    expect(wrapper.find('.weui-check__label').exists()).toBe(true);
  });

  it('未选中状态', () => {
    const wrapper = mountComponent(WeuiRadio, {
      props: { modelValue: 'a', value: 'b' },
    });
    expect(wrapper.vm.checked).toBe(false);
  });

  it('选中状态', () => {
    const wrapper = mountComponent(WeuiRadio, {
      props: { modelValue: 'a', value: 'a' },
    });
    expect(wrapper.vm.checked).toBe(true);
  });

  it('点击选中', async () => {
    const wrapper = mountComponent(WeuiRadio, {
      props: { modelValue: 'a', value: 'b' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('b');
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  it('已选中再点击不触发', async () => {
    const wrapper = mountComponent(WeuiRadio, {
      props: { modelValue: 'a', value: 'a' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('disabled 时不触发', async () => {
    const wrapper = mountComponent(WeuiRadio, {
      props: { modelValue: 'a', value: 'b', disabled: true },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('label 渲染', () => {
    const wrapper = mountComponent(WeuiRadio, { props: { label: '选项A' } });
    expect(wrapper.text()).toContain('选项A');
  });

  it('Number 类型 value', async () => {
    const wrapper = mountComponent(WeuiRadio, {
      props: { modelValue: 1, value: 2 },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(2);
  });
});
