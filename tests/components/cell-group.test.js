import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiCellGroup from '../../uni_modules/weui-uni/components/weui-cell-group/weui-cell-group.vue';

describe('WeuiCellGroup', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiCellGroup);
    expect(wrapper.find('.weui-cells').exists()).toBe(true);
  });

  it('显示 title', () => {
    const wrapper = mountComponent(WeuiCellGroup, { props: { title: '分组标题' } });
    expect(wrapper.find('.weui-cells__title').exists()).toBe(true);
    expect(wrapper.text()).toContain('分组标题');
  });

  it('显示 tips', () => {
    const wrapper = mountComponent(WeuiCellGroup, { props: { tips: '提示信息' } });
    expect(wrapper.find('.weui-cells__tips').exists()).toBe(true);
    expect(wrapper.text()).toContain('提示信息');
  });

  it('inset 添加 class', () => {
    const wrapper = mountComponent(WeuiCellGroup, { props: { inset: true } });
    expect(wrapper.vm.cellsClass['weui-cells_inset']).toBe(true);
  });

  it('variant=form 添加 class', () => {
    const wrapper = mountComponent(WeuiCellGroup, { props: { variant: 'form' } });
    expect(wrapper.vm.cellsClass['weui-cells_form']).toBe(true);
  });

  it('variant 默认为空', () => {
    const wrapper = mountComponent(WeuiCellGroup);
    expect(wrapper.vm.cellsClass['weui-cells_']).toBeFalsy();
  });

  it('无 title 时不渲染标题区域', () => {
    const wrapper = mountComponent(WeuiCellGroup);
    expect(wrapper.find('.weui-cells__title').exists()).toBe(false);
  });
});
