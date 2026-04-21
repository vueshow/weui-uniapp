import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiFooter from '../../uni_modules/weui-uni/components/weui-footer/weui-footer.vue';

describe('WeuiFooter', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiFooter);
    expect(wrapper.find('.weui-footer').exists()).toBe(true);
  });

  it('显示 text', () => {
    const wrapper = mountComponent(WeuiFooter, { props: { text: '版权信息' } });
    expect(wrapper.text()).toContain('版权信息');
  });

  it('渲染 links', () => {
    const wrapper = mountComponent(WeuiFooter, {
      props: { links: [{ text: '链接1' }, { text: '链接2' }] },
    });
    expect(wrapper.findAll('.weui-footer__link').length).toBe(2);
  });

  it('fixed 添加 class', () => {
    const wrapper = mountComponent(WeuiFooter, { props: { fixed: true } });
    expect(wrapper.find('.weui-footer_fixed-bottom').exists()).toBe(true);
  });

  it('handleLinkClick 触发事件', () => {
    const wrapper = mountComponent(WeuiFooter);
    const link = { text: '链接' };
    wrapper.vm.handleLinkClick(link, 0);
    expect(wrapper.emitted('link-click')).toBeTruthy();
    expect(wrapper.emitted('link-click')[0]).toEqual([link, 0]);
  });
});
