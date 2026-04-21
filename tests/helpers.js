/**
 * 测试工具函数 — 简化组件测试的通用 helpers
 */
import { mount, shallowMount } from '@vue/test-utils';

/**
 * 挂载 uni-app 组件，自动处理全局 stub
 */
export function mountComponent(component, options = {}) {
  const { props = {}, slots = {}, global = {}, ...rest } = options;

  return mount(component, {
    props,
    slots,
    global: {
      // stub uni-app 内置组件为透传标签
      stubs: {
        view: { template: '<div class="view"><slot /></div>' },
        text: { template: '<span class="text"><slot /></span>' },
        image: { template: '<img class="image" />' },
        'scroll-view': { template: '<div class="scroll-view"><slot /></div>' },
        checkbox: {
          template: '<input type="checkbox" class="checkbox" />',
          props: ['checked', 'disabled', 'value'],
        },
        radio: {
          template: '<input type="radio" class="radio" />',
          props: ['checked', 'disabled', 'value'],
        },
        input: {
          template: '<input class="input" />',
          props: ['value', 'type', 'placeholder', 'disabled', 'focus'],
        },
        switch: {
          template: '<input type="checkbox" class="switch" />',
          props: ['checked', 'disabled'],
        },
        slider: {
          template: '<input type="range" class="slider" />',
          props: ['value', 'min', 'max', 'step', 'disabled'],
        },
        button: {
          template: '<button class="button"><slot /></button>',
          props: ['disabled', 'loading', 'openType', 'formType', 'hoverClass'],
        },
        textarea: {
          template: '<textarea class="textarea" />',
          props: ['value', 'placeholder', 'disabled'],
        },
        navigator: { template: '<a class="navigator"><slot /></a>' },
        icon: { template: '<i class="icon" />' },
        picker: {
          template: '<div class="picker"><slot /></div>',
          props: ['value', 'range', 'rangeKey', 'mode', 'disabled'],
        },
        form: {
          template: '<form class="form"><slot /></form>',
        },
        ...global.stubs,
      },
      ...global,
    },
    ...rest,
  });
}

/**
 * 浅挂载 uni-app 组件（不渲染子组件）
 */
export function shallowMountComponent(component, options = {}) {
  return shallowMount(component, {
    ...options,
    global: {
      stubs: {
        view: { template: '<div class="view"><slot /></div>' },
        text: { template: '<span class="text"><slot /></span>' },
      },
      ...options.global,
    },
  });
}

/**
 * 等待 Vue 下一个更新周期
 */
export async function flush() {
  await new Promise((r) => setTimeout(r, 0));
}
