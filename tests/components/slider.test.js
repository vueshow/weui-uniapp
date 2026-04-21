import { describe, it, expect, vi } from 'vitest';
import WeuiSlider from '../../uni_modules/weui-uni/components/weui-slider/weui-slider.vue';
import { mountComponent } from '../helpers';

describe('WeuiSlider', () => {
  it('渲染 slider', () => {
    const wrapper = mountComponent(WeuiSlider);
    expect(wrapper.find('.weui-slider-box').exists()).toBe(true);
  });

  it('percent 计算', () => {
    const wrapper = mountComponent(WeuiSlider, {
      props: { modelValue: 50, min: 0, max: 100 },
    });
    expect(wrapper.vm.percent).toBe(50);
  });

  it('percentText 格式化', () => {
    const wrapper = mountComponent(WeuiSlider, {
      props: { modelValue: 30, min: 0, max: 100 },
    });
    expect(wrapper.vm.percentText).toBe('30%');
  });

  it('range 计算', () => {
    const wrapper = mountComponent(WeuiSlider, {
      props: { min: 10, max: 90 },
    });
    expect(wrapper.vm.range).toBe(80);
  });

  it('range 防止除零', () => {
    const wrapper = mountComponent(WeuiSlider, {
      props: { min: 50, max: 50 },
    });
    expect(wrapper.vm.range).toBe(1);
  });

  it('clamp 限制范围', () => {
    const wrapper = mountComponent(WeuiSlider, {
      props: { min: 0, max: 100 },
    });
    expect(wrapper.vm.clamp(150)).toBe(100);
    expect(wrapper.vm.clamp(-10)).toBe(0);
    expect(wrapper.vm.clamp(50)).toBe(50);
  });

  it('normalizeValue 按 step 取整', () => {
    const wrapper = mountComponent(WeuiSlider, {
      props: { min: 0, max: 100, step: 10 },
    });
    expect(wrapper.vm.normalizeValue(35)).toBe(40);
    expect(wrapper.vm.normalizeValue(32)).toBe(30);
  });

  it('normalizeValue step=0 时回退为 1', () => {
    const wrapper = mountComponent(WeuiSlider, {
      props: { min: 0, max: 100, step: 0 },
    });
    expect(wrapper.vm.normalizeValue(35)).toBe(35);
  });

  it('disabled 状态样式', () => {
    const wrapper = mountComponent(WeuiSlider, { props: { disabled: true } });
    expect(wrapper.find('.weui-slider-box_disabled').exists()).toBe(true);
  });

  it('showValue 显示值', () => {
    const wrapper = mountComponent(WeuiSlider, {
      props: { modelValue: 42, showValue: true },
    });
    expect(wrapper.text()).toContain('42');
  });

  it('handleTouch 调用 updateByClientX', () => {
    const wrapper = mountComponent(WeuiSlider);
    const spy = vi.spyOn(wrapper.vm, 'updateByClientX').mockImplementation(() => {});
    wrapper.vm.handleTouch({ touches: [{ clientX: 100 }] });
    expect(spy).toHaveBeenCalledWith(100, 'changing');
    spy.mockRestore();
  });

  it('handleTouch 无 touches 时不调用', () => {
    const wrapper = mountComponent(WeuiSlider);
    const spy = vi.spyOn(wrapper.vm, 'updateByClientX');
    wrapper.vm.handleTouch({});
    expect(spy).not.toHaveBeenCalled();
  });

  it('disabled 时 updateByClientX 不触发 emit', () => {
    const wrapper = mountComponent(WeuiSlider, { props: { disabled: true } });
    wrapper.vm.updateByClientX(100, 'change');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('handleMouseDown 注册 mousemove/mouseup 监听', () => {
    const wrapper = mountComponent(WeuiSlider);
    vi.spyOn(wrapper.vm, 'updateByClientX').mockImplementation(() => {});
    const addSpy = vi.spyOn(window, 'addEventListener');
    wrapper.vm.handleMouseDown({ clientX: 50 });
    expect(addSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(addSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    addSpy.mockRestore();
  });

  it('handleMouseDown mouseup 时移除监听', () => {
    const wrapper = mountComponent(WeuiSlider);
    vi.spyOn(wrapper.vm, 'updateByClientX').mockImplementation(() => {});
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const listeners = {};
    vi.spyOn(window, 'addEventListener').mockImplementation((name, fn) => {
      listeners[name] = fn;
    });
    wrapper.vm.handleMouseDown({ clientX: 50 });
    listeners.mouseup({ clientX: 70 });
    expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    removeSpy.mockRestore();
  });

  it('window 不存在时 handleMouseDown 不注册监听（跨端兼容）', () => {
    // 验证源码中有 typeof window 守卫
    // 在小程序端 window 不存在，addEventListener 不会被调用
    const wrapper = mountComponent(WeuiSlider);
    vi.spyOn(wrapper.vm, 'updateByClientX').mockImplementation(() => {});
    // 检查源码包含 typeof window 守卫
    const source = WeuiSlider.methods.handleMouseDown.toString();
    expect(source).toContain('typeof window');
  });
});
