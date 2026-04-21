import { describe, it, expect } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiGallery from '../../uni_modules/weui-uni/components/weui-gallery/weui-gallery.vue';

describe('WeuiGallery', () => {
  it('modelValue=true 时显示', () => {
    const wrapper = mountComponent(WeuiGallery, { props: { modelValue: true } });
    expect(wrapper.find('.weui-gallery').exists()).toBe(true);
  });

  it('modelValue=false 时 v-show 隐藏', () => {
    const wrapper = mountComponent(WeuiGallery, { props: { modelValue: false } });
    const el = wrapper.find('.weui-gallery').element;
    expect(el.style.display).toBe('none');
  });

  it('imageUrl 计算属性返回 src', () => {
    const wrapper = mountComponent(WeuiGallery, {
      props: { modelValue: true, src: 'https://example.com/img.jpg' },
    });
    expect(wrapper.vm.imageUrl).toBe('https://example.com/img.jpg');
  });

  it('close 触发 update:modelValue 和 close 事件', () => {
    const wrapper = mountComponent(WeuiGallery, { props: { modelValue: true } });
    wrapper.vm.close();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([false]);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('closeOnClickImage=true 时点击触发关闭', () => {
    const wrapper = mountComponent(WeuiGallery, {
      props: { modelValue: true, closeOnClickImage: true },
    });
    wrapper.vm.handleClose();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('closeOnClickImage=false 时不关闭', () => {
    const wrapper = mountComponent(WeuiGallery, {
      props: { modelValue: true, closeOnClickImage: false },
    });
    wrapper.vm.handleClose();
    expect(wrapper.emitted('close')).toBeFalsy();
  });

  it('deletable=true 时显示删除按钮', () => {
    const wrapper = mountComponent(WeuiGallery, {
      props: { modelValue: true, deletable: true },
    });
    expect(wrapper.find('.weui-gallery__opr').exists()).toBe(true);
  });

  it('handleDelete 触发 delete 事件并关闭', () => {
    const wrapper = mountComponent(WeuiGallery, {
      props: { modelValue: true, deletable: true },
    });
    wrapper.vm.handleDelete();
    expect(wrapper.emitted('delete')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});
