import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiFlex from '../../uni_modules/weui-uni/components/weui-flex/weui-flex.vue';
import WeuiFlexItem from '../../uni_modules/weui-uni/components/weui-flex-item/weui-flex-item.vue';

describe('WeuiFlex', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiFlex);
    expect(wrapper.find('.weui-flex').exists()).toBe(true);
  });

  it('插槽内容', () => {
    const wrapper = mountComponent(WeuiFlex, {
      slots: { default: '<span>flex内容</span>' },
    });
    expect(wrapper.text()).toContain('flex内容');
  });

  it('组件名', () => {
    expect(WeuiFlex.name).toBe('WeuiFlex');
  });
});

describe('WeuiFlexItem', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiFlexItem);
    expect(wrapper.find('.weui-flex__item').exists()).toBe(true);
  });

  it('插槽内容', () => {
    const wrapper = mountComponent(WeuiFlexItem, {
      slots: { default: '<span>item内容</span>' },
    });
    expect(wrapper.text()).toContain('item内容');
  });

  it('组件名', () => {
    expect(WeuiFlexItem.name).toBe('WeuiFlexItem');
  });
});
