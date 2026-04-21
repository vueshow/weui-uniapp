import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiCell from '../../uni_modules/weui-uni/components/weui-cell/weui-cell.vue';

describe('WeuiCell', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiCell);
    expect(wrapper.find('.weui-cell').exists()).toBe(true);
  });

  it('显示 title', () => {
    const wrapper = mountComponent(WeuiCell, { props: { title: '标题' } });
    expect(wrapper.text()).toContain('标题');
  });

  it('显示 label', () => {
    const wrapper = mountComponent(WeuiCell, { props: { label: '描述' } });
    expect(wrapper.text()).toContain('描述');
  });

  it('显示 value', () => {
    const wrapper = mountComponent(WeuiCell, { props: { value: '值' } });
    expect(wrapper.text()).toContain('值');
  });

  it('arrow 添加 access class', () => {
    const wrapper = mountComponent(WeuiCell, { props: { arrow: true } });
    expect(wrapper.vm.cellClass['weui-cell_access']).toBe(true);
  });

  it('border=false 移除边框', () => {
    const wrapper = mountComponent(WeuiCell, { props: { border: false } });
    expect(wrapper.vm.cellClass['weui-cell_no-border']).toBe(true);
  });

  it('arrow=true 时点击触发 click', async () => {
    const wrapper = mountComponent(WeuiCell, { props: { arrow: true } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('arrow=false 且 clickable=false 时不触发 click', async () => {
    const wrapper = mountComponent(WeuiCell);
    await wrapper.vm.handleClick({});
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('clickable=true 时触发 click', async () => {
    const wrapper = mountComponent(WeuiCell, { props: { clickable: true } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('hoverClass 在 clickable 或 arrow 时为 weui-cell_active', () => {
    const wrapper = mountComponent(WeuiCell, { props: { clickable: true } });
    expect(wrapper.vm.hoverClass).toBe('weui-cell_active');
  });

  it('extraClass 正确应用', () => {
    const wrapper = mountComponent(WeuiCell, { props: { extraClass: 'custom-class' } });
    expect(wrapper.vm.cellClass['custom-class']).toBe(true);
  });
});
