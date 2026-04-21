import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiMsg from '../../uni_modules/weui-uni/components/weui-msg/weui-msg.vue';

describe('WeuiMsg', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiMsg);
    expect(wrapper.find('.weui-msg').exists()).toBe(true);
  });

  it('默认 type=success 显示图标', () => {
    const wrapper = mountComponent(WeuiMsg);
    expect(wrapper.vm.showIcon).toBe(true);
  });

  it('type=none 不显示默认图标', () => {
    const wrapper = mountComponent(WeuiMsg, { props: { type: 'none' } });
    expect(wrapper.vm.showIcon).toBe(false);
  });

  it('iconClass 包含类型和 msg', () => {
    const wrapper = mountComponent(WeuiMsg, { props: { type: 'warn' } });
    expect(wrapper.vm.iconClass).toContain('weui-icon-warn');
    expect(wrapper.vm.iconClass).toContain('weui-icon_msg');
  });

  it('显示 title 和 desc', () => {
    const wrapper = mountComponent(WeuiMsg, { props: { title: '操作成功', desc: '描述信息' } });
    expect(wrapper.text()).toContain('操作成功');
    expect(wrapper.text()).toContain('描述信息');
  });

  it('alignTop 添加 class', () => {
    const wrapper = mountComponent(WeuiMsg, { props: { alignTop: true } });
    expect(wrapper.find('.weui-msg_align-top').exists()).toBe(true);
  });

  it('handleAction 非 disabled 触发事件', () => {
    const wrapper = mountComponent(WeuiMsg);
    const action = { text: '确定', type: 'primary' };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('action-click')).toBeTruthy();
    expect(wrapper.emitted('action-click')[0]).toEqual([action, 0]);
  });

  it('handleAction disabled 不触发', () => {
    const wrapper = mountComponent(WeuiMsg);
    const action = { text: '确定', disabled: true };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('action-click')).toBeFalsy();
  });
});
