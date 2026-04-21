/**
 * Vitest 全局 setup — mock uni-app 运行时
 */
import { vi } from 'vitest';

// ---- mock uni 全局 API ----
const uni = {
  showToast: vi.fn(),
  hideToast: vi.fn(),
  showLoading: vi.fn(),
  hideLoading: vi.fn(),
  showModal: vi.fn(),
  showActionSheet: vi.fn(),
  navigateTo: vi.fn(),
  navigateBack: vi.fn(),
  redirectTo: vi.fn(),
  switchTab: vi.fn(),
  reLaunch: vi.fn(),
  getSystemInfoSync: vi.fn(() => ({
    windowWidth: 375,
    windowHeight: 667,
    pixelRatio: 2,
    platform: 'devtools',
  })),
  createSelectorQuery: vi.fn(() => ({
    select: vi.fn(() => ({
      boundingClientRect: vi.fn(() => ({
        exec: vi.fn((cb) => cb([])),
      })),
    })),
    selectAll: vi.fn(() => ({
      boundingClientRect: vi.fn(() => ({
        exec: vi.fn((cb) => cb([])),
      })),
    })),
    exec: vi.fn((cb) => cb([])),
  })),
  getStorageSync: vi.fn(),
  setStorageSync: vi.fn(),
  removeStorageSync: vi.fn(),
  request: vi.fn(),
  uploadFile: vi.fn(),
  chooseImage: vi.fn(),
  chooseMedia: vi.fn(),
  getImageInfo: vi.fn(),
  previewImage: vi.fn(),
  getLocation: vi.fn(),
  makePhoneCall: vi.fn(),
  setClipboardData: vi.fn(),
  getClipboardData: vi.fn(),
  vibrateShort: vi.fn(),
  vibrateLong: vi.fn(),
  onWindowResize: vi.fn(),
  offWindowResize: vi.fn(),
};

globalThis.uni = uni;
// wx 在小程序端等价于 uni
globalThis.wx = uni;

// ---- mock getCurrentPages / getApp ----
globalThis.getCurrentPages = vi.fn(() => []);
globalThis.getApp = vi.fn(() => ({}));
