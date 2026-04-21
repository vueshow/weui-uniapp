import type { App, DefineComponent, Plugin } from 'vue';

// ============================================================
// Shared Types
// ============================================================

/** Action item used by multiple components (Dialog, HalfScreenDialog, Msg, Form, etc.) */
export interface WeuiActionItem {
  text: string;
  type?: 'primary' | 'default' | 'warn';
  disabled?: boolean;
  close?: boolean;
}

/** Link item used by Footer */
export interface WeuiLinkItem {
  text: string;
  url?: string;
}

/** Nav/Tabbar item */
export interface WeuiNavItem {
  label: string;
  value: string | number;
  disabled?: boolean;
}

/** Tabbar item */
export interface WeuiTabbarItem {
  label: string;
  value: string | number;
  icon?: string;
  iconText?: string;
  badge?: string | number;
  dot?: boolean;
  disabled?: boolean;
}

/** Uploader file item */
export interface WeuiUploaderFile {
  url: string;
  id?: string;
  status?: string;
  message?: string;
}

/** Picker result */
export interface WeuiPickerResult {
  value: string | number | number[];
  items: unknown[];
}

/** Address picker result */
export interface WeuiAddressPickerResult {
  value: (string | number)[];
  items: unknown[];
  labels: string[];
}

/** Steps item */
export interface WeuiStepsItem {
  key?: string | number;
  title?: string;
  desc?: string;
  icon?: string;
  iconPrev?: boolean;
  status?: 'success' | 'error' | 'active' | 'waiting';
  success?: boolean;
}

/** Actionsheet item (object form) */
export interface WeuiActionsheetItem {
  label?: string;
  value?: string | number;
  tips?: string;
  type?: 'default' | 'warn';
}

/** Card info item */
export interface WeuiCardInfoItem {
  text?: string;
}

/** Form preview item */
export interface WeuiFormPreviewItem {
  label: string;
  value: string;
}

/** List tips item */
export interface WeuiListTipsItem {
  text?: string;
  value?: string | number;
}

// ============================================================
// Component Props Types
// ============================================================

// --- WeuiActionsheet ---
export type WeuiActionsheetProps = {
  modelValue?: boolean;
  title?: string;
  items?: (string | WeuiActionsheetItem)[];
  cancelText?: string;
  showCancel?: boolean;
  maskClosable?: boolean;
  closeOnSelect?: boolean;
  skin?: 'ios' | 'android';
};

// --- WeuiAddressPicker ---
export type WeuiAddressPickerProps = {
  modelValue?: (string | number)[];
  visible?: boolean;
  options?: Record<string, unknown>[];
  title?: string;
  desc?: string;
  showClose?: boolean;
  closeText?: string;
  confirmText?: string;
  maskClosable?: boolean;
  placeholder?: string;
  valueKey?: string;
  labelKey?: string;
  childrenKey?: string;
};

// --- WeuiAgree ---
export type WeuiAgreeProps = {
  modelValue?: boolean;
  text?: string;
  warn?: boolean;
  animated?: boolean;
  disabled?: boolean;
  hotarea?: boolean;
};

// --- WeuiArticle ---
export type WeuiArticleProps = Record<string, never>;

// --- WeuiBadge ---
export type WeuiBadgeProps = {
  text?: string | number;
  dot?: boolean;
  max?: number;
  type?: 'warn' | 'primary' | 'default';
};

// --- WeuiButton ---
export type WeuiButtonProps = {
  text?: string;
  type?: 'primary' | 'default' | 'warn';
  size?: 'default' | 'medium' | 'mini' | 'xmini';
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  nativeLoading?: boolean;
  block?: boolean;
  inline?: boolean;
  overlay?: boolean;
  openType?: string;
  formType?: string;
};

// --- WeuiCard ---
export type WeuiCardProps = {
  type?: 'text' | 'appmsg';
  title?: string;
  desc?: string;
  thumb?: string;
  info?: WeuiCardInfoItem[];
  clickable?: boolean;
};

// --- WeuiCellGroup ---
export type WeuiCellGroupProps = {
  title?: string;
  tips?: string;
  inset?: boolean;
  variant?: '' | 'form' | 'checkbox' | 'radio';
};

// --- WeuiCell ---
export type WeuiCellProps = {
  title?: string;
  label?: string;
  value?: string;
  icon?: string;
  arrow?: boolean;
  clickable?: boolean;
  border?: boolean;
  active?: boolean;
  extraClass?: string;
  isLink?: boolean;
  size?: '' | 'large';
  required?: boolean;
  disabled?: boolean;
  center?: boolean;
  arrowDirection?: 'right' | 'left' | 'up' | 'down';
};

// --- WeuiCheckbox ---
export type WeuiCheckboxProps = {
  modelValue?: boolean | (string | number | boolean)[];
  label?: string;
  value?: string | number | boolean;
  disabled?: boolean;
};

// --- WeuiDialog ---
export type WeuiDialogProps = {
  modelValue?: boolean;
  title?: string;
  content?: string;
  cancelText?: string;
  confirmText?: string;
  confirmType?: 'primary' | 'warn' | 'default';
  showCancel?: boolean;
  buttonWrap?: boolean;
  maskClosable?: boolean;
};

// --- WeuiEmptyState ---
export type WeuiEmptyStateProps = {
  icon?: string;
  title?: string;
  desc?: string;
  actions?: WeuiActionItem[];
};

// --- WeuiFlexItem ---
export type WeuiFlexItemProps = Record<string, never>;

// --- WeuiFlex ---
export type WeuiFlexProps = Record<string, never>;

// --- WeuiFooter ---
export type WeuiFooterProps = {
  text?: string;
  links?: WeuiLinkItem[];
  fixed?: boolean;
};

// --- WeuiFormPreview ---
export type WeuiFormPreviewProps = {
  label?: string;
  value?: string;
  items?: WeuiFormPreviewItem[];
  actions?: WeuiActionItem[];
};

// --- WeuiForm ---
export type WeuiFormProps = {
  title?: string;
  desc?: string;
  tips?: string;
  extra?: string;
  actions?: WeuiActionItem[];
  bottomFixed?: boolean;
};

// --- WeuiGallery ---
export type WeuiGalleryProps = {
  modelValue?: boolean;
  src?: string;
  label?: string;
  deletable?: boolean;
  closeOnClickImage?: boolean;
};

// --- WeuiGridItem ---
export type WeuiGridItemProps = {
  label?: string;
  icon?: string;
};

// --- WeuiGrid ---
export type WeuiGridProps = Record<string, never>;

// --- WeuiHalfScreenDialog ---
export type WeuiHalfScreenDialogProps = {
  modelValue?: boolean;
  title?: string;
  subtitle?: string;
  actions?: WeuiActionItem[];
  attachment?: string;
  showClose?: boolean;
  closeText?: string;
  closeIcon?: 'close-thin' | 'slide-down' | 'back-arrow-thin';
  maskClosable?: boolean;
  large?: boolean;
  grab?: boolean;
  bottomFixed?: boolean;
  buttonWrap?: boolean;
};

// --- WeuiIcon ---
export type WeuiIconProps = {
  type?: string;
  size?: '' | 'msg' | 'msg-primary' | 'toast';
  label?: string;
};

// --- WeuiInformationBar ---
export type WeuiInformationBarProps = {
  modelValue?: boolean;
  text?: string;
  type?: 'warn-strong' | 'warn-weak' | 'warn-no-color' | 'tips-strong' | 'tips-weak';
  icon?: string;
  showIcon?: boolean;
  linkText?: string;
  closeable?: boolean;
};

// --- WeuiInput ---
export type WeuiInputProps = {
  modelValue?: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  maxlength?: number | string;
  focus?: boolean;
  password?: boolean;
  confirmType?: string;
  placeholderStyle?: string;
  placeholderClass?: string;
  cursorSpacing?: number | string;
  cursor?: number | string;
  selectionStart?: number | string;
  selectionEnd?: number | string;
};

// --- WeuiListTips ---
export type WeuiListTipsProps = {
  items?: (string | WeuiListTipsItem)[];
};

// --- WeuiLoading ---
export type WeuiLoadingProps = {
  type?: 'loading' | 'mask' | 'primary';
  size?: number | string;
  color?: string;
  text?: string;
  label?: string;
  vertical?: boolean;
};

// --- WeuiLoadmore ---
export type WeuiLoadmoreProps = {
  loading?: boolean;
  line?: boolean;
  dot?: boolean;
  text?: string;
  noMore?: boolean;
  empty?: boolean;
};

// --- WeuiMsg ---
export type WeuiMsgProps = {
  type?: 'success' | 'warn' | 'info' | 'waiting' | 'none';
  title?: string;
  desc?: string;
  primaryDesc?: string;
  tips?: string;
  extra?: string;
  actions?: WeuiActionItem[];
  alignTop?: boolean;
};

// --- WeuiNavbar ---
export type WeuiNavbarProps = {
  modelValue?: string | number;
  items?: WeuiNavItem[];
};

// --- WeuiPanel ---
export type WeuiPanelProps = {
  access?: boolean;
  title?: string;
};

// --- WeuiPicker ---
export type WeuiPickerProps = {
  modelValue?: string | number | number[];
  visible?: boolean;
  mode?: 'selector' | 'multiSelector' | 'date';
  title?: string;
  desc?: string;
  showClose?: boolean;
  closeText?: string;
  range?: unknown[];
  rangeKey?: string;
  start?: string | number;
  end?: string | number;
  confirmText?: string;
  maskClosable?: boolean;
};

// --- WeuiProgress ---
export type WeuiProgressProps = {
  percent?: number;
  showCancel?: boolean;
};

// --- WeuiRadio ---
export type WeuiRadioProps = {
  modelValue?: string | number | boolean;
  label?: string;
  value?: string | number | boolean;
  disabled?: boolean;
};

// --- WeuiSearchbar ---
export type WeuiSearchbarProps = {
  modelValue?: string;
  placeholder?: string;
  variant?: 'default' | 'grey' | 'outlined' | 'homepage';
  words?: string;
  cancelText?: string;
  searchText?: string;
  showBack?: boolean;
  showCancel?: boolean;
  searchButton?: boolean;
  clearable?: boolean;
  disabled?: boolean;
};

// --- WeuiSlider ---
export type WeuiSliderProps = {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  showValue?: boolean;
  disabled?: boolean;
};

// --- WeuiSteps ---
export type WeuiStepsProps = {
  items?: WeuiStepsItem[];
  type?: 'vertical' | 'horizonal' | 'horizonal-primary' | 'horizonal-center';
  hideContent?: boolean;
  title?: string;
  desc?: string;
};

// --- WeuiSwitch ---
export type WeuiSwitchProps = {
  modelValue?: boolean;
  disabled?: boolean;
};

// --- WeuiTabbar ---
export type WeuiTabbarProps = {
  modelValue?: string | number;
  items?: WeuiTabbarItem[];
  ariaLabel?: string;
};

// --- WeuiToast ---
export type WeuiToastProps = {
  modelValue?: boolean;
  type?: 'success' | 'warn' | 'loading' | 'text';
  text?: string;
  textMore?: boolean;
  mask?: boolean;
  closable?: boolean;
};

// --- WeuiToptips ---
export type WeuiToptipsProps = {
  modelValue?: boolean;
  text?: string;
  type?: 'warn' | 'info' | 'success';
  duration?: number;
  closable?: boolean;
};

// --- WeuiUploader ---
export type WeuiUploaderProps = {
  modelValue?: (string | WeuiUploaderFile)[];
  title?: string;
  maxCount?: number;
  showCount?: boolean;
  deletable?: boolean;
  disabled?: boolean;
  sourceType?: string[];
  sizeType?: string[];
  previewMode?: 'native' | 'custom' | 'none';
};

// ============================================================
// Component Type Aliases (DefineComponent with typed props)
// ============================================================

export type WeuiActionsheetComponent = DefineComponent<WeuiActionsheetProps>;
export type WeuiAddressPickerComponent = DefineComponent<WeuiAddressPickerProps>;
export type WeuiAgreeComponent = DefineComponent<WeuiAgreeProps>;
export type WeuiArticleComponent = DefineComponent<WeuiArticleProps>;
export type WeuiBadgeComponent = DefineComponent<WeuiBadgeProps>;
export type WeuiButtonComponent = DefineComponent<WeuiButtonProps>;
export type WeuiCardComponent = DefineComponent<WeuiCardProps>;
export type WeuiCellGroupComponent = DefineComponent<WeuiCellGroupProps>;
export type WeuiCellComponent = DefineComponent<WeuiCellProps>;
export type WeuiCheckboxComponent = DefineComponent<WeuiCheckboxProps>;
export type WeuiDialogComponent = DefineComponent<WeuiDialogProps>;
export type WeuiEmptyStateComponent = DefineComponent<WeuiEmptyStateProps>;
export type WeuiFlexItemComponent = DefineComponent<WeuiFlexItemProps>;
export type WeuiFlexComponent = DefineComponent<WeuiFlexProps>;
export type WeuiFooterComponent = DefineComponent<WeuiFooterProps>;
export type WeuiFormPreviewComponent = DefineComponent<WeuiFormPreviewProps>;
export type WeuiFormComponent = DefineComponent<WeuiFormProps>;
export type WeuiGalleryComponent = DefineComponent<WeuiGalleryProps>;
export type WeuiGridItemComponent = DefineComponent<WeuiGridItemProps>;
export type WeuiGridComponent = DefineComponent<WeuiGridProps>;
export type WeuiHalfScreenDialogComponent = DefineComponent<WeuiHalfScreenDialogProps>;
export type WeuiIconComponent = DefineComponent<WeuiIconProps>;
export type WeuiInformationBarComponent = DefineComponent<WeuiInformationBarProps>;
export type WeuiInputComponent = DefineComponent<WeuiInputProps>;
export type WeuiListTipsComponent = DefineComponent<WeuiListTipsProps>;
export type WeuiLoadingComponent = DefineComponent<WeuiLoadingProps>;
export type WeuiLoadmoreComponent = DefineComponent<WeuiLoadmoreProps>;
export type WeuiMsgComponent = DefineComponent<WeuiMsgProps>;
export type WeuiNavbarComponent = DefineComponent<WeuiNavbarProps>;
export type WeuiPanelComponent = DefineComponent<WeuiPanelProps>;
export type WeuiPickerComponent = DefineComponent<WeuiPickerProps>;
export type WeuiProgressComponent = DefineComponent<WeuiProgressProps>;
export type WeuiRadioComponent = DefineComponent<WeuiRadioProps>;
export type WeuiSearchbarComponent = DefineComponent<WeuiSearchbarProps>;
export type WeuiSliderComponent = DefineComponent<WeuiSliderProps>;
export type WeuiStepsComponent = DefineComponent<WeuiStepsProps>;
export type WeuiSwitchComponent = DefineComponent<WeuiSwitchProps>;
export type WeuiTabbarComponent = DefineComponent<WeuiTabbarProps>;
export type WeuiToastComponent = DefineComponent<WeuiToastProps>;
export type WeuiToptipsComponent = DefineComponent<WeuiToptipsProps>;
export type WeuiUploaderComponent = DefineComponent<WeuiUploaderProps>;

// ============================================================
// Component Exports
// ============================================================

export const WeuiActionsheet: WeuiActionsheetComponent;
export const WeuiAddressPicker: WeuiAddressPickerComponent;
export const WeuiAgree: WeuiAgreeComponent;
export const WeuiArticle: WeuiArticleComponent;
export const WeuiBadge: WeuiBadgeComponent;
export const WeuiButton: WeuiButtonComponent;
export const WeuiCard: WeuiCardComponent;
export const WeuiCellGroup: WeuiCellGroupComponent;
export const WeuiCell: WeuiCellComponent;
export const WeuiCheckbox: WeuiCheckboxComponent;
export const WeuiDialog: WeuiDialogComponent;
export const WeuiEmptyState: WeuiEmptyStateComponent;
export const WeuiFlexItem: WeuiFlexItemComponent;
export const WeuiFlex: WeuiFlexComponent;
export const WeuiFooter: WeuiFooterComponent;
export const WeuiFormPreview: WeuiFormPreviewComponent;
export const WeuiForm: WeuiFormComponent;
export const WeuiGallery: WeuiGalleryComponent;
export const WeuiGridItem: WeuiGridItemComponent;
export const WeuiGrid: WeuiGridComponent;
export const WeuiHalfScreenDialog: WeuiHalfScreenDialogComponent;
export const WeuiIcon: WeuiIconComponent;
export const WeuiInformationBar: WeuiInformationBarComponent;
export const WeuiInput: WeuiInputComponent;
export const WeuiListTips: WeuiListTipsComponent;
export const WeuiLoading: WeuiLoadingComponent;
export const WeuiLoadmore: WeuiLoadmoreComponent;
export const WeuiMsg: WeuiMsgComponent;
export const WeuiNavbar: WeuiNavbarComponent;
export const WeuiPanel: WeuiPanelComponent;
export const WeuiPicker: WeuiPickerComponent;
export const WeuiProgress: WeuiProgressComponent;
export const WeuiRadio: WeuiRadioComponent;
export const WeuiSearchbar: WeuiSearchbarComponent;
export const WeuiSlider: WeuiSliderComponent;
export const WeuiSteps: WeuiStepsComponent;
export const WeuiSwitch: WeuiSwitchComponent;
export const WeuiTabbar: WeuiTabbarComponent;
export const WeuiToast: WeuiToastComponent;
export const WeuiToptips: WeuiToptipsComponent;
export const WeuiUploader: WeuiUploaderComponent;

// ============================================================
// Plugin
// ============================================================

declare const WeuiUni: Plugin & {
  install: (app: App) => void;
};

export default WeuiUni;
