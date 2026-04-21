import { describe, it, expect } from 'vitest';
import WeuiProgress from '../../uni_modules/weui-uni/components/weui-progress/weui-progress.vue';
import { mountComponent } from '../helpers';

describe('WeuiProgress', () => {
  it('渲染 progress', () => {
    const wrapper = mountComponent(WeuiProgress);
    expect(wrapper.find('.weui-progress').exists()).toBe(true);
  });

  it('safePercent — 正常值', () => {
    const wrapper = mountComponent(WeuiProgress, { props: { percent: 50 } });
    expect(wrapper.vm.safePercent).toBe(50);
  });

  it('safePercent — 超过 100 截断', () => {
    const wrapper = mountComponent(WeuiProgress, { props: { percent: 150 } });
    expect(wrapper.vm.safePercent).toBe(100);
  });

  it('safePercent — 低于 0 截断', () => {
    const wrapper = mountComponent(WeuiProgress, { props: { percent: -10 } });
    expect(wrapper.vm.safePercent).toBe(0);
  });

  it('safePercent — NaN 回退为 0', () => {
    const wrapper = mountComponent(WeuiProgress, { props: { percent: NaN } });
    expect(wrapper.vm.safePercent).toBe(0);
  });

  it('percentText 格式化', () => {
    const wrapper = mountComponent(WeuiProgress, { props: { percent: 75 } });
    expect(wrapper.vm.percentText).toBe('75%');
  });

  it('showCancel 渲染取消按钮', () => {
    const wrapper = mountComponent(WeuiProgress, { props: { showCancel: true } });
    expect(wrapper.find('.weui-progress__opr').exists()).toBe(true);
  });

  it('隐藏取消按钮', () => {
    const wrapper = mountComponent(WeuiProgress, { props: { showCancel: false } });
    expect(wrapper.find('.weui-progress__opr').exists()).toBe(false);
  });

  it('handleCancel 触发 emit', async () => {
    const wrapper = mountComponent(WeuiProgress, { props: { showCancel: true } });
    await wrapper.find('.weui-progress__opr').trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });
});
