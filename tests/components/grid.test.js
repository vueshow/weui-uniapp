import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiGrid from '../../uni_modules/weui-uni/components/weui-grid/weui-grid.vue';
import WeuiGridItem from '../../uni_modules/weui-uni/components/weui-grid-item/weui-grid-item.vue';

describe('WeuiGrid', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiGrid);
    expect(wrapper.find('.weui-grids').exists()).toBe(true);
  });

  it('插槽内容', () => {
    const wrapper = mountComponent(WeuiGrid, {
      slots: { default: '<div>grid内容</div>' },
    });
    expect(wrapper.text()).toContain('grid内容');
  });
});

describe('WeuiGridItem', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiGridItem);
    expect(wrapper.find('.weui-grid').exists()).toBe(true);
  });

  it('显示 label', () => {
    const wrapper = mountComponent(WeuiGridItem, { props: { label: '宫格' } });
    expect(wrapper.text()).toContain('宫格');
  });

  it('handleClick 触发 click 事件', async () => {
    const wrapper = mountComponent(WeuiGridItem);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
