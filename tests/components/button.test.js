import { describe, it, expect } from 'vitest';
import WeuiButton from '../../uni_modules/weui-uni/components/weui-button/weui-button.vue';
import { mountComponent } from '../helpers';

describe('WeuiButton', () => {
  it('渲染默认按钮', () => {
    const wrapper = mountComponent(WeuiButton);
    expect(wrapper.find('.weui-btn').exists()).toBe(true);
    expect(wrapper.find('.weui-btn_primary').exists()).toBe(true);
  });

  it('渲染不同 type', () => {
    const warn = mountComponent(WeuiButton, { props: { type: 'warn' } });
    expect(warn.find('.weui-btn_warn').exists()).toBe(true);

    const def = mountComponent(WeuiButton, { props: { type: 'default' } });
    expect(def.find('.weui-btn_default').exists()).toBe(true);
  });

  it('渲染不同 size', () => {
    const mini = mountComponent(WeuiButton, { props: { size: 'mini' } });
    expect(mini.find('.weui-btn_mini').exists()).toBe(true);
  });

  it('block 模式', () => {
    const wrapper = mountComponent(WeuiButton, { props: { block: true } });
    expect(wrapper.find('.weui-btn_block').exists()).toBe(true);
  });

  it('disabled 状态', () => {
    const wrapper = mountComponent(WeuiButton, { props: { disabled: true } });
    expect(wrapper.find('.weui-btn_disabled').exists()).toBe(true);
  });

  it('loading 状态', () => {
    const wrapper = mountComponent(WeuiButton, { props: { loading: true } });
    expect(wrapper.find('.weui-btn_loading').exists()).toBe(true);
  });

  it('inline 模式', () => {
    const wrapper = mountComponent(WeuiButton, { props: { inline: true } });
    expect(wrapper.find('.weui-btn_inline').exists()).toBe(true);
  });

  it('overlay 模式', () => {
    const wrapper = mountComponent(WeuiButton, { props: { overlay: true } });
    expect(wrapper.find('.weui-btn_overlay').exists()).toBe(true);
  });

  it('点击触发 emit', async () => {
    const wrapper = mountComponent(WeuiButton);
    await wrapper.find('.weui-btn').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('disabled 时不触发点击', async () => {
    const wrapper = mountComponent(WeuiButton, { props: { disabled: true } });
    await wrapper.find('.weui-btn').trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('loading 时不触发点击', async () => {
    const wrapper = mountComponent(WeuiButton, { props: { loading: true } });
    await wrapper.find('.weui-btn').trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('text prop 渲染文字', () => {
    const wrapper = mountComponent(WeuiButton, { props: { text: '确定' } });
    expect(wrapper.text()).toContain('确定');
  });

  it('slot 渲染', () => {
    const wrapper = mountComponent(WeuiButton, {
      slots: { default: '自定义内容' },
    });
    expect(wrapper.text()).toContain('自定义内容');
  });
});
