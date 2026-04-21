import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiIcon from '../../uni_modules/weui-uni/components/weui-icon/weui-icon.vue';

describe('WeuiIcon', () => {
  it('默认渲染 success 图标', () => {
    const wrapper = mountComponent(WeuiIcon);
    expect(wrapper.vm.iconClass).toContain('weui-icon-success');
  });

  it('type 属性设置图标类型', () => {
    const wrapper = mountComponent(WeuiIcon, { props: { type: 'warn' } });
    expect(wrapper.vm.iconClass).toContain('weui-icon-warn');
  });

  it('size=msg 添加 weui-icon_msg', () => {
    const wrapper = mountComponent(WeuiIcon, { props: { size: 'msg' } });
    expect(wrapper.vm.iconClass).toContain('weui-icon_msg');
  });

  it('size=msg-primary 添加 weui-icon_msg-primary', () => {
    const wrapper = mountComponent(WeuiIcon, { props: { size: 'msg-primary' } });
    expect(wrapper.vm.iconClass).toContain('weui-icon_msg-primary');
  });

  it('size=toast 添加 weui-icon_toast', () => {
    const wrapper = mountComponent(WeuiIcon, { props: { size: 'toast' } });
    expect(wrapper.vm.iconClass).toContain('weui-icon_toast');
  });

  it('size 为空不添加额外 class', () => {
    const wrapper = mountComponent(WeuiIcon);
    expect(wrapper.vm.iconClass).not.toContain('weui-icon_msg');
    expect(wrapper.vm.iconClass).not.toContain('weui-icon_toast');
  });

  it('aria-label 使用 label 或 type', () => {
    const wrapper = mountComponent(WeuiIcon, { props: { label: '成功' } });
    expect(wrapper.find('[aria-label="成功"]').exists()).toBe(true);
  });
});
