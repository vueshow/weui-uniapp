import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiForm from '../../uni_modules/weui-uni/components/weui-form/weui-form.vue';

describe('WeuiForm', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiForm);
    expect(wrapper.find('.weui-form').exists()).toBe(true);
  });

  it('显示 title 和 desc', () => {
    const wrapper = mountComponent(WeuiForm, { props: { title: '表单', desc: '描述' } });
    expect(wrapper.text()).toContain('表单');
    expect(wrapper.text()).toContain('描述');
  });

  it('显示 tips', () => {
    const wrapper = mountComponent(WeuiForm, { props: { tips: '提示' } });
    expect(wrapper.text()).toContain('提示');
  });

  it('bottomFixed 添加 class', () => {
    const wrapper = mountComponent(WeuiForm, { props: { bottomFixed: true } });
    expect(wrapper.find('.weui-bottom-fixed-opr-page').exists()).toBe(true);
  });

  it('handleAction 非 disabled 时触发事件', () => {
    const wrapper = mountComponent(WeuiForm);
    const action = { text: '提交', type: 'primary' };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('action-click')).toBeTruthy();
    expect(wrapper.emitted('action-click')[0]).toEqual([action, 0]);
  });

  it('handleAction disabled 时不触发事件', () => {
    const wrapper = mountComponent(WeuiForm);
    const action = { text: '提交', disabled: true };
    wrapper.vm.handleAction(action, 0);
    expect(wrapper.emitted('action-click')).toBeFalsy();
  });
});
