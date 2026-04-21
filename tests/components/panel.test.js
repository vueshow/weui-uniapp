import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiPanel from '../../uni_modules/weui-uni/components/weui-panel/weui-panel.vue';

describe('WeuiPanel', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiPanel);
    expect(wrapper.find('.weui-panel').exists()).toBe(true);
  });

  it('显示 title', () => {
    const wrapper = mountComponent(WeuiPanel, { props: { title: '面板标题' } });
    expect(wrapper.text()).toContain('面板标题');
  });

  it('access 添加 class', () => {
    const wrapper = mountComponent(WeuiPanel, { props: { access: true } });
    expect(wrapper.find('.weui-panel_access').exists()).toBe(true);
  });

  it('无 title 不渲染标题', () => {
    const wrapper = mountComponent(WeuiPanel);
    expect(wrapper.find('.weui-panel__hd').exists()).toBe(false);
  });

  it('插槽内容', () => {
    const wrapper = mountComponent(WeuiPanel, {
      slots: { default: '<div>面板内容</div>' },
    });
    expect(wrapper.find('.weui-panel__bd').exists()).toBe(true);
  });
});
