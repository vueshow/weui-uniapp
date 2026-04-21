import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiHalfScreenDialog from '../../uni_modules/weui-uni/components/weui-half-screen-dialog/weui-half-screen-dialog.vue';

describe('WeuiHalfScreenDialog', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('modelValue=false 默认不渲染', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: false } });
    expect(wrapper.vm.rendered).toBe(false);
  });

  it('modelValue=true 渲染并显示', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    expect(wrapper.vm.rendered).toBe(true);
  });

  it('close 触发 update:modelValue 和 close', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    wrapper.vm.close();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([false]);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleMaskClick maskClosable=true 关闭', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, {
      props: { modelValue: true, maskClosable: true },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleMaskClick maskClosable=false 不关闭', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, {
      props: { modelValue: true, maskClosable: false },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('handleAction 非 disabled 触发事件', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    const action = { text: '确定', type: 'primary' };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('action-click')).toBeTruthy();
    expect(wrapper.emitted('action-click')[0]).toEqual([action, 0]);
  });

  it('handleAction disabled 不触发事件', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    const action = { text: '确定', disabled: true };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('action-click')).toBeFalsy();
  });

  it('handleAction close=false 不自动关闭', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    const action = { text: '确定', close: false };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('handleAction 默认自动关闭', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    const action = { text: '确定' };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleAttachment 触发 attachment-click', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    wrapper.vm.handleAttachment();
    expect(wrapper.emitted('attachment-click')).toBeTruthy();
  });

  it('getActionClass 返回正确的类', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    expect(wrapper.vm.getActionClass({ type: 'default' })).toContain('weui-btn_default');
  });

  it('getActionClass disabled 添加 disabled class', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    const result = wrapper.vm.getActionClass({ type: 'primary', disabled: true });
    expect(result[1]['weui-btn_disabled']).toBe(true);
  });

  it('closeIconClass 根据 closeIcon 生成', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, {
      props: { modelValue: true, closeIcon: 'slide-down' },
    });
    expect(wrapper.vm.closeIconClass).toBe('weui-icon-slide-down');
  });

  it('large=true 添加 class', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, {
      props: { modelValue: true, large: true },
    });
    expect(wrapper.vm.dialogClass['weui-half-screen-dialog_large']).toBe(true);
  });

  it('grab=true 添加 class', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, {
      props: { modelValue: true, grab: true },
    });
    expect(wrapper.vm.dialogClass['weui-half-screen-dialog_grab']).toBe(true);
  });

  it('clearCloseTimer 清除定时器', () => {
    const wrapper = mountComponent(WeuiHalfScreenDialog, { props: { modelValue: true } });
    wrapper.vm.closeTimer = setTimeout(() => {}, 1000);
    wrapper.vm.clearCloseTimer();
    expect(wrapper.vm.closeTimer).toBeNull();
  });
});
