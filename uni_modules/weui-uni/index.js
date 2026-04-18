import WeuiButton from './components/weui-button/weui-button.vue';
import WeuiCellGroup from './components/weui-cell-group/weui-cell-group.vue';
import WeuiCell from './components/weui-cell/weui-cell.vue';
import WeuiBadge from './components/weui-badge/weui-badge.vue';
import WeuiLoadmore from './components/weui-loadmore/weui-loadmore.vue';
import WeuiLoading from './components/weui-loading/weui-loading.vue';
import WeuiInput from './components/weui-input/weui-input.vue';
import WeuiPanel from './components/weui-panel/weui-panel.vue';
import WeuiCard from './components/weui-card/weui-card.vue';
import WeuiToast from './components/weui-toast/weui-toast.vue';
import WeuiDialog from './components/weui-dialog/weui-dialog.vue';
import WeuiPicker from './components/weui-picker/weui-picker.vue';
import WeuiSwitch from './components/weui-switch/weui-switch.vue';
import WeuiCheckbox from './components/weui-checkbox/weui-checkbox.vue';
import WeuiRadio from './components/weui-radio/weui-radio.vue';
import WeuiSlider from './components/weui-slider/weui-slider.vue';
import WeuiUploader from './components/weui-uploader/weui-uploader.vue';
import WeuiGallery from './components/weui-gallery/weui-gallery.vue';
import WeuiProgress from './components/weui-progress/weui-progress.vue';
import WeuiTabbar from './components/weui-tabbar/weui-tabbar.vue';
import WeuiNavbar from './components/weui-navbar/weui-navbar.vue';
import WeuiGrid from './components/weui-grid/weui-grid.vue';
import WeuiGridItem from './components/weui-grid-item/weui-grid-item.vue';
import WeuiArticle from './components/weui-article/weui-article.vue';
import WeuiFooter from './components/weui-footer/weui-footer.vue';
import WeuiFlex from './components/weui-flex/weui-flex.vue';
import WeuiFlexItem from './components/weui-flex-item/weui-flex-item.vue';
import WeuiActionsheet from './components/weui-actionsheet/weui-actionsheet.vue';

const components = [
  WeuiButton,
  WeuiCellGroup,
  WeuiCell,
  WeuiBadge,
  WeuiLoadmore,
  WeuiLoading,
  WeuiInput,
  WeuiPanel,
  WeuiCard,
  WeuiToast,
  WeuiDialog,
  WeuiPicker,
  WeuiSwitch,
  WeuiCheckbox,
  WeuiRadio,
  WeuiSlider,
  WeuiUploader,
  WeuiGallery,
  WeuiProgress,
  WeuiTabbar,
  WeuiNavbar,
  WeuiGrid,
  WeuiGridItem,
  WeuiArticle,
  WeuiFooter,
  WeuiFlex,
  WeuiFlexItem,
  WeuiActionsheet,
];

export {
  WeuiButton,
  WeuiCellGroup,
  WeuiCell,
  WeuiBadge,
  WeuiLoadmore,
  WeuiLoading,
  WeuiInput,
  WeuiPanel,
  WeuiCard,
  WeuiToast,
  WeuiDialog,
  WeuiPicker,
  WeuiSwitch,
  WeuiCheckbox,
  WeuiRadio,
  WeuiSlider,
  WeuiUploader,
  WeuiGallery,
  WeuiProgress,
  WeuiTabbar,
  WeuiNavbar,
  WeuiGrid,
  WeuiGridItem,
  WeuiArticle,
  WeuiFooter,
  WeuiFlex,
  WeuiFlexItem,
  WeuiActionsheet,
};

export default {
  install(app) {
    components.forEach((component) => {
      if (component.name) {
        app.component(component.name, component);
      }
    });
  },
};
