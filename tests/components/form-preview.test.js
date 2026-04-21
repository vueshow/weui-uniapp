import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiFormPreview from '../../uni_modules/weui-uni/components/weui-form-preview/weui-form-preview.vue';

describe('WeuiFormPreview', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiFormPreview);
    expect(wrapper.find('.weui-form-preview').exists()).toBe(true);
  });

  it('显示 label 和 value', () => {
    const wrapper = mountComponent(WeuiFormPreview, {
      props: { label: '金额', value: '¥100.00' },
    });
    expect(wrapper.text()).toContain('金额');
    expect(wrapper.text()).toContain('¥100.00');
  });

  it('渲染 items 列表', () => {
    const wrapper = mountComponent(WeuiFormPreview, {
      props: { items: [{ label: '名称', value: '商品A' }, { label: '价格', value: '50' }] },
    });
    expect(wrapper.text()).toContain('名称');
    expect(wrapper.text()).toContain('商品A');
  });

  it('handleAction 触发事件', () => {
    const wrapper = mountComponent(WeuiFormPreview);
    const action = { text: '操作' };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('action-click')).toBeTruthy();
    expect(wrapper.emitted('action-click')[0]).toEqual([action, 0]);
  });
});
