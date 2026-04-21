import { describe, it, expect } from 'vitest';
import WeuiToast from '../../uni_modules/weui-uni/components/weui-toast/weui-toast.vue';
import { mountComponent } from '../helpers';

describe('WeuiToast', () => {
  it('modelValue=false 时不渲染', () => {
    const wrapper = mountComponent(WeuiToast, { props: { modelValue: false } });
    expect(wrapper.find('.weui-toast').exists()).toBe(false);
  });

  it('modelValue=true 时渲染', () => {
    const wrapper = mountComponent(WeuiToast, { props: { modelValue: true } });
    expect(wrapper.find('.weui-toast').exists()).toBe(true);
  });

  it('toastClass — text 类型', () => {
    const wrapper = mountComponent(WeuiToast, {
      props: { modelValue: true, type: 'text' },
    });
    expect(wrapper.vm.toastClass).toEqual({
      'weui-toast_text': true,
      'weui-toast_text-more': false,
    });
  });

  it('toastClass — textMore', () => {
    const wrapper = mountComponent(WeuiToast, {
      props: { modelValue: true, textMore: true },
    });
    expect(wrapper.vm.toastClass['weui-toast_text-more']).toBe(true);
  });

  it('close 触发 emit', () => {
    const wrapper = mountComponent(WeuiToast, { props: { modelValue: true } });
    wrapper.vm.close();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(false);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('closable 点击遮罩关闭', () => {
    const wrapper = mountComponent(WeuiToast, {
      props: { modelValue: true, closable: true, mask: true },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('不可关闭时点击遮罩不关闭', () => {
    const wrapper = mountComponent(WeuiToast, {
      props: { modelValue: true, closable: false, mask: true },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('text 内容渲染', () => {
    const wrapper = mountComponent(WeuiToast, {
      props: { modelValue: true, text: '操作成功' },
    });
    expect(wrapper.text()).toContain('操作成功');
  });
});
