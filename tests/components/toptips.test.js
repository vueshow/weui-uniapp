import { describe, it, expect, vi, beforeEach } from 'vitest';
import WeuiToptips from '../../uni_modules/weui-uni/components/weui-toptips/weui-toptips.vue';
import { mountComponent } from '../helpers';

describe('WeuiToptips', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('渲染 toptips', () => {
    const wrapper = mountComponent(WeuiToptips);
    expect(wrapper.find('.weui-toptips').exists()).toBe(true);
  });

  it('tipsClass — warn 类型', () => {
    const wrapper = mountComponent(WeuiToptips, { props: { type: 'warn' } });
    expect(wrapper.vm.tipsClass['weui-toptips_warn']).toBe(true);
  });

  it('tipsClass — info 类型', () => {
    const wrapper = mountComponent(WeuiToptips, { props: { type: 'info' } });
    expect(wrapper.vm.tipsClass['weui-toptips_info']).toBe(true);
  });

  it('tipsClass — success 类型', () => {
    const wrapper = mountComponent(WeuiToptips, { props: { type: 'success' } });
    expect(wrapper.vm.tipsClass['weui-toptips_success']).toBe(true);
  });

  it('show 设置 visible=true 并触发 emit', () => {
    const wrapper = mountComponent(WeuiToptips);
    wrapper.vm.show();
    expect(wrapper.vm.visible).toBe(true);
    expect(wrapper.emitted('show')).toBeTruthy();
  });

  it('show 设置自动关闭 timer', () => {
    const wrapper = mountComponent(WeuiToptips, { props: { duration: 2000 } });
    wrapper.vm.show();
    expect(wrapper.vm.timer).not.toBeNull();
    vi.advanceTimersByTime(2000);
    expect(wrapper.vm.visible).toBe(false);
  });

  it('duration=0 时不自动关闭', () => {
    const wrapper = mountComponent(WeuiToptips, { props: { duration: 0 } });
    wrapper.vm.show();
    expect(wrapper.vm.timer).toBeNull();
  });

  it('hide 触发 update:modelValue + close', () => {
    const wrapper = mountComponent(WeuiToptips);
    wrapper.vm.hide();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe(false);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('hide(false) 不触发 emit', () => {
    const wrapper = mountComponent(WeuiToptips);
    wrapper.vm.hide(false);
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('handleClick — closable 时关闭', () => {
    const wrapper = mountComponent(WeuiToptips, { props: { closable: true } });
    wrapper.vm.handleClick({});
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleClick — 不可关闭时不关闭', () => {
    const wrapper = mountComponent(WeuiToptips, { props: { closable: false } });
    wrapper.vm.handleClick({});
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('clearTimer 清除计时器', () => {
    const wrapper = mountComponent(WeuiToptips);
    wrapper.vm.timer = setTimeout(() => {}, 99999);
    wrapper.vm.clearTimer();
    expect(wrapper.vm.timer).toBeNull();
  });
});
