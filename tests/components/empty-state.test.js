import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiEmptyState from '../../uni_modules/weui-uni/components/weui-empty-state/weui-empty-state.vue';

describe('WeuiEmptyState', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiEmptyState);
    expect(wrapper.find('.weui-empty-state').exists()).toBe(true);
  });

  it('默认标题为暂无内容', () => {
    const wrapper = mountComponent(WeuiEmptyState);
    expect(wrapper.text()).toContain('暂无内容');
  });

  it('自定义标题', () => {
    const wrapper = mountComponent(WeuiEmptyState, { props: { title: '空状态' } });
    expect(wrapper.text()).toContain('空状态');
  });

  it('显示 desc', () => {
    const wrapper = mountComponent(WeuiEmptyState, { props: { desc: '描述文字' } });
    expect(wrapper.text()).toContain('描述文字');
  });

  it('getActionClass 返回 primary', () => {
    const wrapper = mountComponent(WeuiEmptyState);
    expect(wrapper.vm.getActionClass({ type: 'primary' })).toBe('weui-btn_primary');
  });

  it('getActionClass 默认返回 primary', () => {
    const wrapper = mountComponent(WeuiEmptyState);
    expect(wrapper.vm.getActionClass({ type: 'default' })).toBe('weui-btn_default');
  });

  it('handleAction 触发 action-click 事件', () => {
    const wrapper = mountComponent(WeuiEmptyState);
    const action = { text: '重试', type: 'primary' };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('action-click')).toBeTruthy();
    expect(wrapper.emitted('action-click')[0]).toEqual([action, 0]);
  });
});
