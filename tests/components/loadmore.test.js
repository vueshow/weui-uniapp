import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiLoadmore from '../../uni_modules/weui-uni/components/weui-loadmore/weui-loadmore.vue';

describe('WeuiLoadmore', () => {
  it('默认渲染（loading=true）', () => {
    const wrapper = mountComponent(WeuiLoadmore);
    expect(wrapper.find('.weui-loadmore').exists()).toBe(true);
  });

  it('loading=true 默认文本"正在加载"', () => {
    const wrapper = mountComponent(WeuiLoadmore);
    expect(wrapper.vm.resolvedText).toBe('正在加载');
  });

  it('loading=false 默认文本"加载更多"', () => {
    const wrapper = mountComponent(WeuiLoadmore, { props: { loading: false } });
    expect(wrapper.vm.resolvedText).toBe('加载更多');
  });

  it('自定义 text 优先级最高', () => {
    const wrapper = mountComponent(WeuiLoadmore, { props: { text: '加载中...' } });
    expect(wrapper.vm.resolvedText).toBe('加载中...');
  });

  it('empty=true 显示"暂无数据"', () => {
    const wrapper = mountComponent(WeuiLoadmore, { props: { empty: true } });
    expect(wrapper.vm.resolvedText).toBe('暂无数据');
  });

  it('noMore=true 显示"没有更多了"', () => {
    const wrapper = mountComponent(WeuiLoadmore, { props: { noMore: true } });
    expect(wrapper.vm.resolvedText).toBe('没有更多了');
  });

  it('line=true 添加 weui-loadmore_line', () => {
    const wrapper = mountComponent(WeuiLoadmore, { props: { line: true } });
    expect(wrapper.vm.loadmoreClass['weui-loadmore_line']).toBe(true);
  });

  it('dot=true 添加 dot 和 line class', () => {
    const wrapper = mountComponent(WeuiLoadmore, { props: { dot: true } });
    expect(wrapper.vm.loadmoreClass['weui-loadmore_dot']).toBe(true);
    expect(wrapper.vm.loadmoreClass['weui-loadmore_line']).toBe(true);
  });
});
