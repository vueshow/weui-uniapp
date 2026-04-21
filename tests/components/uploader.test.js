import { describe, it, expect, beforeEach } from 'vitest';
import WeuiUploader from '../../uni_modules/weui-uni/components/weui-uploader/weui-uploader.vue';
import { mountComponent } from '../helpers';

describe('WeuiUploader', () => {
  beforeEach(() => {
    uni.previewImage.mockClear();
    uni.chooseImage.mockClear();
  });

  it('渲染 uploader', () => {
    const wrapper = mountComponent(WeuiUploader);
    expect(wrapper.find('.weui-uploader').exists()).toBe(true);
  });

  it('标题渲染', () => {
    const wrapper = mountComponent(WeuiUploader, { props: { title: '上传图片' } });
    expect(wrapper.text()).toContain('上传图片');
  });

  it('fileList — 字符串数组自动转对象', () => {
    const wrapper = mountComponent(WeuiUploader, {
      props: { modelValue: ['url1', 'url2'] },
    });
    expect(wrapper.vm.fileList).toEqual([{ url: 'url1' }, { url: 'url2' }]);
  });

  it('fileList — 对象数组保持不变', () => {
    const files = [{ url: 'url1', id: '1' }, { url: 'url2', status: 'uploading' }];
    const wrapper = mountComponent(WeuiUploader, { props: { modelValue: files } });
    expect(wrapper.vm.fileList).toEqual(files);
  });

  it('handleDelete 删除文件', () => {
    const files = [{ url: 'url1' }, { url: 'url2' }, { url: 'url3' }];
    const wrapper = mountComponent(WeuiUploader, { props: { modelValue: files } });
    wrapper.vm.handleDelete(1);
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual([{ url: 'url1' }, { url: 'url3' }]);
    expect(wrapper.emitted('delete')).toBeTruthy();
    expect(wrapper.emitted('delete')[0][0]).toBe(1);
  });

  it('handlePreview — native 模式调用 uni.previewImage', () => {
    const files = [{ url: 'a.jpg' }, { url: 'b.jpg' }];
    const wrapper = mountComponent(WeuiUploader, {
      props: { modelValue: files, previewMode: 'native' },
    });
    wrapper.vm.handlePreview(0);
    expect(uni.previewImage).toHaveBeenCalledWith({
      current: 'a.jpg',
      urls: ['a.jpg', 'b.jpg'],
    });
    expect(wrapper.emitted('preview')).toBeTruthy();
  });

  it('handlePreview — custom 模式不调用 uni.previewImage', () => {
    const files = [{ url: 'a.jpg' }];
    const wrapper = mountComponent(WeuiUploader, {
      props: { modelValue: files, previewMode: 'custom' },
    });
    wrapper.vm.handlePreview(0);
    expect(uni.previewImage).not.toHaveBeenCalled();
    expect(wrapper.emitted('preview')).toBeTruthy();
  });

  it('handlePreview — none 模式也不调用 uni.previewImage', () => {
    const files = [{ url: 'a.jpg' }];
    const wrapper = mountComponent(WeuiUploader, {
      props: { modelValue: files, previewMode: 'none' },
    });
    wrapper.vm.handlePreview(0);
    expect(uni.previewImage).not.toHaveBeenCalled();
    expect(wrapper.emitted('preview')).toBeTruthy();
  });

  it('handleChoose 调用 uni.chooseImage', () => {
    const wrapper = mountComponent(WeuiUploader, {
      props: { modelValue: [], maxCount: 9 },
    });
    wrapper.vm.handleChoose();
    expect(uni.chooseImage).toHaveBeenCalled();
  });

  it('handleChoose — 已满 maxCount 不调用', () => {
    const files = Array.from({ length: 9 }, (_, i) => ({ url: `url${i}` }));
    const wrapper = mountComponent(WeuiUploader, {
      props: { modelValue: files, maxCount: 9 },
    });
    wrapper.vm.handleChoose();
    expect(uni.chooseImage).not.toHaveBeenCalled();
  });

  it('showCount 显示计数', () => {
    const wrapper = mountComponent(WeuiUploader, {
      props: { modelValue: ['a', 'b'], showCount: true, maxCount: 9 },
    });
    expect(wrapper.text()).toContain('2/9');
  });

  it('disabled 不显示添加按钮', () => {
    const wrapper = mountComponent(WeuiUploader, {
      props: { modelValue: [], disabled: true },
    });
    expect(wrapper.find('.weui-uploader__input-box').exists()).toBe(false);
  });
});
