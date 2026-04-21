import { describe, it, expect } from 'vitest';
import WeuiDialog from '../../uni_modules/weui-uni/components/weui-dialog/weui-dialog.vue';
import { mountComponent } from '../helpers';

describe('WeuiDialog', () => {
  it('modelValue=false 时不渲染', () => {
    const wrapper = mountComponent(WeuiDialog, { props: { modelValue: false } });
    expect(wrapper.find('.weui-dialog').exists()).toBe(false);
  });

  it('modelValue=true 时渲染', () => {
    const wrapper = mountComponent(WeuiDialog, { props: { modelValue: true } });
    expect(wrapper.find('.weui-dialog').exists()).toBe(true);
  });

  it('渲染标题和内容', () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true, title: '提示', content: '确定删除？' },
    });
    expect(wrapper.text()).toContain('提示');
    expect(wrapper.text()).toContain('确定删除？');
  });

  it('显示取消按钮', () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true, showCancel: true },
    });
    expect(wrapper.find('.weui-dialog__btn_default').exists()).toBe(true);
  });

  it('隐藏取消按钮', () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true, showCancel: false },
    });
    expect(wrapper.find('.weui-dialog__btn_default').exists()).toBe(false);
  });

  it('点击取消', async () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true, showCancel: true },
    });
    await wrapper.find('.weui-dialog__btn_default').trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(false);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('点击确认', async () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true },
    });
    await wrapper.find('.weui-dialog__btn_primary').trigger('click');
    expect(wrapper.emitted('confirm')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(false);
  });

  it('confirmType=warn', () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true, confirmType: 'warn' },
    });
    expect(wrapper.find('.weui-dialog__btn_warn').exists()).toBe(true);
  });

  it('maskClosable 点击遮罩关闭', async () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true, maskClosable: true },
    });
    await wrapper.find('.weui-mask').trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('maskClosable=false 点击遮罩不关闭', async () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true, maskClosable: false },
    });
    await wrapper.find('.weui-mask').trigger('click');
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('buttonWrap 模式', () => {
    const wrapper = mountComponent(WeuiDialog, {
      props: { modelValue: true, buttonWrap: true },
    });
    expect(wrapper.find('.weui-dialog_btn-wrap').exists()).toBe(true);
  });
});
