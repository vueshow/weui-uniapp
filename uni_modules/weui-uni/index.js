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
