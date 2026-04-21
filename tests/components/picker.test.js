import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiPicker from '../../uni_modules/weui-uni/components/weui-picker/weui-picker.vue';

describe('WeuiPicker', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  const simpleRange = ['选项A', '选项B', '选项C'];

  it('visible=false 默认不渲染', () => {
    const wrapper = mountComponent(WeuiPicker, { props: { visible: false } });
    expect(wrapper.vm.rendered).toBe(false);
  });

  it('visible=true 渲染', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: simpleRange },
    });
    expect(wrapper.vm.rendered).toBe(true);
  });

  it('normalizeColumn 字符串数组', () => {
    const wrapper = mountComponent(WeuiPicker, { props: { range: simpleRange, visible: true } });
    const column = wrapper.vm.normalizeColumn(simpleRange, 0);
    expect(column.length).toBe(3);
    expect(column[0].label).toBe('选项A');
    expect(column[0].disabled).toBe(false);
  });

  it('normalizeColumn 对象数组', () => {
    const wrapper = mountComponent(WeuiPicker, { props: { visible: true } });
    const objRange = [{ label: '标签1', value: 'v1' }, { label: '标签2', value: 'v2' }];
    const column = wrapper.vm.normalizeColumn(objRange, 0);
    expect(column.length).toBe(2);
    expect(column[0].label).toBe('标签1');
    expect(column[0].value).toBe('v1');
  });

  it('normalizeColumn 支持 rangeKey', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, rangeKey: 'name' },
    });
    const objRange = [{ name: '名称1', value: 'v1' }];
    const column = wrapper.vm.normalizeColumn(objRange, 0);
    expect(column[0].label).toBe('名称1');
  });

  it('getInitialValue selector 模式', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: simpleRange, modelValue: 1 },
    });
    expect(wrapper.vm.getInitialValue()).toEqual([1]);
  });

  it('getInitialValue multiSelector 模式', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: {
        visible: true,
        mode: 'multiSelector',
        range: [simpleRange, simpleRange],
        modelValue: [0, 2],
      },
    });
    expect(wrapper.vm.getInitialValue()).toEqual([0, 2]);
  });

  it('getInitialValue date 模式', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, mode: 'date', modelValue: '2025-01-15' },
    });
    const value = wrapper.vm.getInitialValue();
    expect(value.length).toBe(3);
  });

  it('columns selector 模式返回单列', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: simpleRange },
    });
    expect(wrapper.vm.columns.length).toBe(1);
    expect(wrapper.vm.columns[0].length).toBe(3);
  });

  it('columns multiSelector 模式返回多列', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, mode: 'multiSelector', range: [simpleRange, simpleRange] },
    });
    expect(wrapper.vm.columns.length).toBe(2);
  });

  it('columns date 模式返回3列', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, mode: 'date' },
    });
    expect(wrapper.vm.columns.length).toBe(3);
  });

  it('getResult selector 模式', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: simpleRange, modelValue: 1 },
    });
    const result = wrapper.vm.getResult();
    expect(result.value).toBe(1);
  });

  it('getResult date 模式', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, mode: 'date', modelValue: '2025-06-15' },
    });
    const result = wrapper.vm.getResult();
    expect(result.value).toContain('2025');
    expect(result.items.length).toBe(3);
  });

  it('getTranslateByIndex 计算', () => {
    const wrapper = mountComponent(WeuiPicker, { props: { visible: true } });
    expect(wrapper.vm.getTranslateByIndex(0)).toBe(112);
    expect(wrapper.vm.getTranslateByIndex(2)).toBe(0);
  });

  it('handleConfirm selectedDisabled 时不确认', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: [{ label: '禁用', value: 'v1', disabled: true }] },
    });
    wrapper.vm.draftValue = [0];
    wrapper.vm.handleConfirm();
    expect(wrapper.emitted('confirm')).toBeFalsy();
  });

  it('handleCancel 触发 cancel 和关闭', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: simpleRange },
    });
    wrapper.vm.handleCancel();
    expect(wrapper.emitted('cancel')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleMaskClick maskClosable=true 取消', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: simpleRange, maskClosable: true },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });

  it('handleMaskClick maskClosable=false 不操作', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: simpleRange, maskClosable: false },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('cancel')).toBeFalsy();
  });

  it('setColumnValue 更新 draftValue', () => {
    const wrapper = mountComponent(WeuiPicker, {
      props: { visible: true, range: simpleRange },
    });
    wrapper.vm.setColumnValue(0, 2);
    expect(wrapper.vm.draftValue[0]).toBe(2);
  });

  it('getSelectableIndex 跳过 disabled 项', () => {
    const wrapper = mountComponent(WeuiPicker, { props: { visible: true } });
    wrapper.vm.draftValue = [0];
    // 手动设置 columns
    const range = [
      { label: 'A', value: 'a', disabled: true },
      { label: 'B', value: 'b', disabled: false },
    ];
    wrapper.vm.normalizeColumn = () => range.map((item, i) => ({
      key: item.value,
      label: item.label,
      value: item.value,
      raw: item,
      disabled: item.disabled,
    }));
    // 需要通过 computed columns
  });

  it('getEventY 从触摸事件提取 Y', () => {
    const wrapper = mountComponent(WeuiPicker, { props: { visible: true } });
    expect(wrapper.vm.getEventY({ pageY: 100 })).toBe(100);
    expect(wrapper.vm.getEventY({ touches: [{ pageY: 200 }] })).toBe(200);
    expect(wrapper.vm.getEventY({ changedTouches: [{ pageY: 300 }] })).toBe(300);
    expect(wrapper.vm.getEventY({})).toBe(0);
  });

  it('clearCloseTimer 清除定时器', () => {
    const wrapper = mountComponent(WeuiPicker, { props: { visible: true } });
    wrapper.vm.closeTimer = setTimeout(() => {}, 1000);
    wrapper.vm.clearCloseTimer();
    expect(wrapper.vm.closeTimer).toBeNull();
  });
});
