import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiCard from '../../uni_modules/weui-uni/components/weui-card/weui-card.vue';

describe('WeuiCard', () => {
  it('默认渲染 text 类型', () => {
    const wrapper = mountComponent(WeuiCard);
    expect(wrapper.find('.weui-media-box').exists()).toBe(true);
    expect(wrapper.vm.isAppmsg).toBe(false);
  });

  it('type=appmsg 渲染图文模式', () => {
    const wrapper = mountComponent(WeuiCard, { props: { type: 'appmsg' } });
    expect(wrapper.vm.isAppmsg).toBe(true);
    expect(wrapper.vm.cardClass['weui-media-box_appmsg']).toBe(true);
  });

  it('显示 title 和 desc', () => {
    const wrapper = mountComponent(WeuiCard, { props: { title: '标题', desc: '描述' } });
    expect(wrapper.text()).toContain('标题');
    expect(wrapper.text()).toContain('描述');
  });

  it('clickable=true 时点击触发 click', async () => {
    const wrapper = mountComponent(WeuiCard, { props: { clickable: true } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('clickable=false 时不触发 click', async () => {
    const wrapper = mountComponent(WeuiCard);
    await wrapper.vm.handleClick({});
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('info 渲染为 metaList', () => {
    const wrapper = mountComponent(WeuiCard, {
      props: { info: ['阅读5万', '评论100'] },
    });
    expect(wrapper.vm.metaList).toEqual(['阅读5万', '评论100']);
  });

  it('info 非数组返回空', () => {
    const wrapper = mountComponent(WeuiCard, {
      props: { info: '不是数组' },
    });
    expect(wrapper.vm.metaList).toEqual([]);
  });
});
