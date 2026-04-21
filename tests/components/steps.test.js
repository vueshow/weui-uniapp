import { describe, it, expect } from 'vitest';
import WeuiSteps from '../../uni_modules/weui-uni/components/weui-steps/weui-steps.vue';
import { mountComponent } from '../helpers';

describe('WeuiSteps', () => {
  it('渲染 steps', () => {
    const wrapper = mountComponent(WeuiSteps);
    expect(wrapper.find('.weui-steps').exists()).toBe(true);
  });

  it('stepsClass — vertical 类型', () => {
    const wrapper = mountComponent(WeuiSteps, { props: { type: 'vertical' } });
    expect(wrapper.vm.stepsClass).toBe('weui-steps_vertical');
  });

  it('stepsClass — horizonal 类型', () => {
    const wrapper = mountComponent(WeuiSteps, { props: { type: 'horizonal' } });
    expect(wrapper.vm.stepsClass).toBe('weui-steps_horizonal');
  });

  it('getItemClass — success 状态', () => {
    const wrapper = mountComponent(WeuiSteps);
    const cls = wrapper.vm.getItemClass({ status: 'success' });
    expect(cls['weui-steps__item_success']).toBe(true);
  });

  it('getItemClass — success 快捷属性', () => {
    const wrapper = mountComponent(WeuiSteps);
    const cls = wrapper.vm.getItemClass({ success: true });
    expect(cls['weui-steps__item_success']).toBe(true);
  });

  it('getItemClass — icon', () => {
    const wrapper = mountComponent(WeuiSteps);
    const cls = wrapper.vm.getItemClass({ icon: 'check' });
    expect(cls['weui-steps__item_icon']).toBe(true);
  });

  it('getItemClass — iconPrev', () => {
    const wrapper = mountComponent(WeuiSteps);
    const cls = wrapper.vm.getItemClass({ iconPrev: 'arrow' });
    expect(cls['weui-steps__item_icon-prev']).toBe(true);
  });

  it('items 渲染', () => {
    const items = [
      { title: '步骤1', desc: '描述1' },
      { title: '步骤2', desc: '描述2', status: 'success' },
    ];
    const wrapper = mountComponent(WeuiSteps, { props: { items } });
    expect(wrapper.text()).toContain('步骤1');
    expect(wrapper.text()).toContain('步骤2');
  });

  it('hideContent 模式', () => {
    const items = [{ title: '步骤1' }];
    const wrapper = mountComponent(WeuiSteps, {
      props: { items, hideContent: true },
    });
    const inner = wrapper.find('.weui-steps__item__inner');
    expect(inner.attributes('style')).toContain('display: none');
  });
});
