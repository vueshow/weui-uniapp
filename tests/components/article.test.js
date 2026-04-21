import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiArticle from '../../uni_modules/weui-uni/components/weui-article/weui-article.vue';

describe('WeuiArticle', () => {
  it('默认渲染', () => {
    const wrapper = mountComponent(WeuiArticle);
    expect(wrapper.find('.weui-article').exists()).toBe(true);
  });

  it('插槽内容', () => {
    const wrapper = mountComponent(WeuiArticle, {
      slots: { default: '<p>文章内容</p>' },
    });
    expect(wrapper.find('.weui-article').text()).toContain('文章内容');
  });

  it('组件名', () => {
    expect(WeuiArticle.name).toBe('WeuiArticle');
  });
});
