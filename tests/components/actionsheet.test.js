import { describe, it, expect, vi, beforeEach } from 'vitest';
import WeuiActionsheet from '../../uni_modules/weui-uni/components/weui-actionsheet/weui-actionsheet.vue';
import { mountComponent } from '../helpers';

describe('WeuiActionsheet', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('modelValue=false 时不渲染', () => {
    const wrapper = mountComponent(WeuiActionsheet, { props: { modelValue: false } });
    expect(wrapper.vm.rendered).toBe(false);
  });

  it('modelValue=true 时渲染', async () => {
    const wrapper = mountComponent(WeuiActionsheet, { props: { modelValue: true } });
    await vi.advanceTimersByTimeAsync(50);
    expect(wrapper.vm.rendered).toBe(true);
    expect(wrapper.vm.visible).toBe(true);
  });

  it('normalizedItems — 字符串数组', () => {
    const wrapper = mountComponent(WeuiActionsheet, {
      props: { items: ['选项1', '选项2'] },
    });
    expect(wrapper.vm.normalizedItems).toHaveLength(2);
    expect(wrapper.vm.normalizedItems[0].label).toBe('选项1');
    expect(wrapper.vm.normalizedItems[0].type).toBe('default');
  });

  it('normalizedItems — 对象数组', () => {
    const items = [{ label: '删除', type: 'warn', tips: '不可恢复' }];
    const wrapper = mountComponent(WeuiActionsheet, { props: { items } });
    expect(wrapper.vm.normalizedItems[0].label).toBe('删除');
    expect(wrapper.vm.normalizedItems[0].type).toBe('warn');
    expect(wrapper.vm.normalizedItems[0].tips).toBe('不可恢复');
  });

  it('close 触发 emit', () => {
    const wrapper = mountComponent(WeuiActionsheet);
    wrapper.vm.close();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(false);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleSelect — closeOnSelect=true 时关闭', () => {
    const wrapper = mountComponent(WeuiActionsheet, {
      props: { closeOnSelect: true },
    });
    wrapper.vm.handleSelect({ label: 'test' }, 0);
    expect(wrapper.emitted('select')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleSelect — closeOnSelect=false 时不关闭', () => {
    const wrapper = mountComponent(WeuiActionsheet, {
      props: { closeOnSelect: false },
    });
    wrapper.vm.handleSelect({ label: 'test' }, 0);
    expect(wrapper.emitted('select')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('handleCancel 取消', () => {
    const wrapper = mountComponent(WeuiActionsheet);
    wrapper.vm.handleCancel();
    expect(wrapper.emitted('cancel')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleMaskClick — maskClosable=true 时关闭', () => {
    const wrapper = mountComponent(WeuiActionsheet, {
      props: { maskClosable: true },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleMaskClick — maskClosable=false 时不关闭', () => {
    const wrapper = mountComponent(WeuiActionsheet, {
      props: { maskClosable: false },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('openWithTransition 设置 rendered+visible', async () => {
    const wrapper = mountComponent(WeuiActionsheet);
    wrapper.vm.openWithTransition();
    expect(wrapper.vm.rendered).toBe(true);
    await vi.advanceTimersByTimeAsync(50);
    expect(wrapper.vm.visible).toBe(true);
  });

  it('closeWithTransition 延迟设置 rendered=false', () => {
    const wrapper = mountComponent(WeuiActionsheet);
    wrapper.vm.rendered = true;
    wrapper.vm.visible = true;
    wrapper.vm.closeWithTransition();
    expect(wrapper.vm.visible).toBe(false);
    expect(wrapper.vm.rendered).toBe(true);
    vi.advanceTimersByTime(300);
    expect(wrapper.vm.rendered).toBe(false);
  });

  it('clearCloseTimer', () => {
    const wrapper = mountComponent(WeuiActionsheet);
    wrapper.vm.closeTimer = setTimeout(() => {}, 99999);
    wrapper.vm.clearCloseTimer();
    expect(wrapper.vm.closeTimer).toBeNull();
  });

  it('skin=android 样式', async () => {
    const wrapper = mountComponent(WeuiActionsheet, {
      props: { modelValue: true, skin: 'android' },
    });
    await vi.advanceTimersByTimeAsync(50);
    expect(wrapper.find('.weui-skin_android').exists()).toBe(true);
  });
});
