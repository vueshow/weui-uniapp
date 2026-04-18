import type { App, DefineComponent, Plugin } from 'vue';

export type WeuiComponent = DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;

export const WeuiButton: WeuiComponent;
export const WeuiCellGroup: WeuiComponent;
export const WeuiCell: WeuiComponent;
export const WeuiBadge: WeuiComponent;
export const WeuiLoadmore: WeuiComponent;
export const WeuiLoading: WeuiComponent;
export const WeuiInput: WeuiComponent;
export const WeuiPanel: WeuiComponent;
export const WeuiCard: WeuiComponent;
export const WeuiToast: WeuiComponent;
export const WeuiDialog: WeuiComponent;
export const WeuiPicker: WeuiComponent;
export const WeuiSwitch: WeuiComponent;
export const WeuiCheckbox: WeuiComponent;
export const WeuiRadio: WeuiComponent;
export const WeuiSlider: WeuiComponent;
export const WeuiUploader: WeuiComponent;
export const WeuiGallery: WeuiComponent;
export const WeuiProgress: WeuiComponent;
export const WeuiTabbar: WeuiComponent;
export const WeuiNavbar: WeuiComponent;
export const WeuiGrid: WeuiComponent;
export const WeuiGridItem: WeuiComponent;
export const WeuiIcon: WeuiComponent;
export const WeuiArticle: WeuiComponent;
export const WeuiFooter: WeuiComponent;
export const WeuiFlex: WeuiComponent;
export const WeuiFlexItem: WeuiComponent;
export const WeuiActionsheet: WeuiComponent;
export const WeuiMsg: WeuiComponent;
export const WeuiSearchbar: WeuiComponent;
export const WeuiForm: WeuiComponent;
export const WeuiFormPreview: WeuiComponent;
export const WeuiToptips: WeuiComponent;
export const WeuiHalfScreenDialog: WeuiComponent;
export const WeuiAgree: WeuiComponent;
export const WeuiInformationBar: WeuiComponent;
export const WeuiListTips: WeuiComponent;
export const WeuiSteps: WeuiComponent;
export const WeuiEmptyState: WeuiComponent;

declare const WeuiUni: Plugin & {
  install: (app: App) => void;
};

export default WeuiUni;
