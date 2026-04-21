import { describe, it, expect } from 'vitest';
import WeuiLoading from '../../uni_modules/weui-uni/components/weui-loading/weui-loading.vue';
import { mountComponent } from '../helpers';

describe('WeuiLoading', () => {
  it('渲染 loading', () => {
    const wrapper = mountComponent(WeuiLoading);
    expect(wrapper.find('.weui-loading-wrap').exists()).toBe(true);
  });

  it('loadingClass — loading 类型', () => {
    const wrapper = mountComponent(WeuiLoading, { props: { type: 'loading' } });
    expect(wrapper.vm.loadingClass).toBe('weui-loading');
  });

  it('loadingClass — mask 类型', () => {
    const wrapper = mountComponent(WeuiLoading, { props: { type: 'mask' } });
    expect(wrapper.vm.loadingClass).toBe('weui-mask-loading');
  });

  it('primaryClass — brand 颜色', () => {
    const wrapper = mountComponent(WeuiLoading, {
      props: { type: 'primary', color: 'brand' },
    });
    expect(wrapper.vm.primaryClass).toBe('weui-primary-loading_brand');
  });

  it('primaryClass — transparent 颜色', () => {
    const wrapper = mountComponent(WeuiLoading, {
      props: { type: 'primary', color: 'transparent' },
    });
    expect(wrapper.vm.primaryClass).toBe('weui-primary-loading_transparent');
  });

  it('iconStyle — 数字 size 转 px', () => {
    const wrapper = mountComponent(WeuiLoading, { props: { size: 20 } });
    expect(wrapper.vm.iconStyle.fontSize).toBe('20px');
  });

  it('iconStyle — 字符串 size 保持原样', () => {
    const wrapper = mountComponent(WeuiLoading, { props: { size: '2em' } });
    expect(wrapper.vm.iconStyle.fontSize).toBe('2em');
  });

  it('iconStyle — 自定义颜色', () => {
    const wrapper = mountComponent(WeuiLoading, {
      props: { type: 'mask', color: '#ff0000' },
    });
    expect(wrapper.vm.iconStyle.color).toBe('#ff0000');
  });

  it('iconStyle — primary 类型不设自定义颜色', () => {
    const wrapper = mountComponent(WeuiLoading, {
      props: { type: 'primary', color: '#ff0000' },
    });
    expect(wrapper.vm.iconStyle.color).toBeUndefined();
  });

  it('text 渲染', () => {
    const wrapper = mountComponent(WeuiLoading, { props: { text: '加载中' } });
    expect(wrapper.text()).toContain('加载中');
  });

  it('vertical 模式', () => {
    const wrapper = mountComponent(WeuiLoading, { props: { vertical: true } });
    expect(wrapper.find('.weui-loading-wrap_vertical').exists()).toBe(true);
  });
});
