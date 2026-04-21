import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiBadge from '../../uni_modules/weui-uni/components/weui-badge/weui-badge.vue';

describe('WeuiBadge', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiBadge);
    expect(wrapper.find('.weui-badge').exists()).toBe(true);
  });

  it('显示 text 内容', () => {
    const wrapper = mountComponent(WeuiBadge, { props: { text: '5' } });
    expect(wrapper.vm.displayText).toBe('5');
  });

  it('数字超过 max 显示 max+', () => {
    const wrapper = mountComponent(WeuiBadge, { props: { text: 100, max: 99 } });
    expect(wrapper.vm.displayText).toBe('99+');
  });

  it('数字等于 max 显示原值', () => {
    const wrapper = mountComponent(WeuiBadge, { props: { text: 99, max: 99 } });
    expect(wrapper.vm.displayText).toBe('99');
  });

  it('dot 模式添加 class', () => {
    const wrapper = mountComponent(WeuiBadge, { props: { dot: true } });
    expect(wrapper.vm.badgeClass['weui-badge_dot']).toBe(true);
  });

  it('type=primary 添加 class', () => {
    const wrapper = mountComponent(WeuiBadge, { props: { type: 'primary' } });
    expect(wrapper.vm.badgeClass['weui-badge_primary']).toBe(true);
  });

  it('type=default 添加 class', () => {
    const wrapper = mountComponent(WeuiBadge, { props: { type: 'default' } });
    expect(wrapper.vm.badgeClass['weui-badge_default']).toBe(true);
  });

  it('文本内容转为字符串', () => {
    const wrapper = mountComponent(WeuiBadge, { props: { text: '新消息' } });
    expect(wrapper.vm.displayText).toBe('新消息');
  });
});
