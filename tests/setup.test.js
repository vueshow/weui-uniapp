import { describe, it, expect } from 'vitest';

describe('Vitest 配置验证', () => {
  it('uni 全局 API 已 mock', () => {
    expect(uni).toBeDefined();
    expect(uni.showToast).toBeDefined();
    expect(uni.getSystemInfoSync).toBeDefined();
  });

  it('wx 等价于 uni', () => {
    expect(wx).toBe(uni);
  });

  it('getCurrentPages / getApp 已 mock', () => {
    expect(getCurrentPages).toBeDefined();
    expect(getApp).toBeDefined();
  });
});
