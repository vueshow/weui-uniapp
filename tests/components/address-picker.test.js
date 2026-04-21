import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mountComponent } from '../helpers';
import WeuiAddressPicker from '../../uni_modules/weui-uni/components/weui-address-picker/weui-address-picker.vue';

describe('WeuiAddressPicker', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  const simpleOptions = [
    {
      name: '北京市',
      code: '110000',
      children: [
        { name: '北京市', code: '110100', children: [{ name: '东城区', code: '110101' }, { name: '西城区', code: '110102' }] },
      ],
    },
    {
      name: '上海市',
      code: '310000',
      children: [
        { name: '上海市', code: '310100', children: [{ name: '黄浦区', code: '310101' }, { name: '徐汇区', code: '310104' }] },
      ],
    },
  ];

  it('visible=false 默认不渲染', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: false, options: simpleOptions },
    });
    expect(wrapper.vm.rendered).toBe(false);
  });

  it('visible=true 渲染', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    expect(wrapper.vm.rendered).toBe(true);
  });

  it('computeLevelCount 计算3级', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    expect(wrapper.vm.computeLevelCount(simpleOptions)).toBe(3);
  });

  it('computeLevelCount 空数组返回1', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    expect(wrapper.vm.computeLevelCount([])).toBe(1);
  });

  it('normalizeColumn 对象数组', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    const column = wrapper.vm.normalizeColumn(simpleOptions, 0);
    expect(column.length).toBe(2);
    expect(column[0].label).toBe('北京市');
  });

  it('columns 返回3列', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    expect(wrapper.vm.columns.length).toBe(3);
    expect(wrapper.vm.columns[0].length).toBe(2); // 省
  });

  it('getInitialDraftValue 无选中值时全0', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions, modelValue: [] },
    });
    expect(wrapper.vm.getInitialDraftValue()).toEqual([0, 0, 0]);
  });

  it('getInitialDraftValue 有选中值时计算索引', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions, modelValue: ['310000', '310100', '310104'] },
    });
    const draft = wrapper.vm.getInitialDraftValue();
    expect(draft[0]).toBe(1); // 上海市
  });

  it('getResult 返回选中结果', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions, modelValue: ['110000', '110100', '110101'] },
    });
    const result = wrapper.vm.getResult();
    expect(result.value.length).toBe(3);
    expect(result.labels).toContain('北京市');
  });

  it('handleConfirm 触发 confirm 和 update:modelValue', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    wrapper.vm.handleConfirm();
    expect(wrapper.emitted('confirm')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('handleCancel 触发 cancel', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    wrapper.vm.handleCancel();
    expect(wrapper.emitted('cancel')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('handleMaskClick maskClosable=true 取消', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions, maskClosable: true },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });

  it('handleMaskClick maskClosable=false 不操作', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions, maskClosable: false },
    });
    wrapper.vm.handleMaskClick();
    expect(wrapper.emitted('cancel')).toBeFalsy();
  });

  it('setColumnValue 更新子列索引为0', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    wrapper.vm.draftValue = [0, 0, 0];
    wrapper.vm.setColumnValue(0, 1); // 选上海
    expect(wrapper.vm.draftValue[0]).toBe(1);
    expect(wrapper.vm.draftValue[1]).toBe(0); // 子列重置
    expect(wrapper.vm.draftValue[2]).toBe(0);
  });

  it('getTranslateByIndex 计算', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    expect(wrapper.vm.getTranslateByIndex(0)).toBe(112);
    expect(wrapper.vm.getTranslateByIndex(2)).toBe(0);
  });

  it('getEventY 提取 Y 坐标', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    expect(wrapper.vm.getEventY({ pageY: 100 })).toBe(100);
    expect(wrapper.vm.getEventY({})).toBe(0);
  });

  it('close 触发 update:visible 和 close', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    wrapper.vm.close();
    expect(wrapper.emitted('update:visible')).toBeTruthy();
    expect(wrapper.emitted('update:visible')[0]).toEqual([false]);
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('clearCloseTimer 清除定时器', () => {
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: { visible: true, options: simpleOptions },
    });
    wrapper.vm.closeTimer = setTimeout(() => {}, 1000);
    wrapper.vm.clearCloseTimer();
    expect(wrapper.vm.closeTimer).toBeNull();
  });

  it('自定义 valueKey/labelKey/childrenKey', () => {
    const customOptions = [
      {
        id: 'p1',
        title: '省份A',
        subs: [{ id: 'c1', title: '城市A1', subs: [{ id: 'd1', title: '区A1-1' }] }],
      },
    ];
    const wrapper = mountComponent(WeuiAddressPicker, {
      props: {
        visible: true,
        options: customOptions,
        valueKey: 'id',
        labelKey: 'title',
        childrenKey: 'subs',
      },
    });
    expect(wrapper.vm.columns[0][0].label).toBe('省份A');
  });
});
