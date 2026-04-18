import WeuiButton from './components/weui-button/weui-button.vue';
import WeuiCellGroup from './components/weui-cell-group/weui-cell-group.vue';
import WeuiCell from './components/weui-cell/weui-cell.vue';
import WeuiBadge from './components/weui-badge/weui-badge.vue';
import WeuiLoadmore from './components/weui-loadmore/weui-loadmore.vue';
import WeuiLoading from './components/weui-loading/weui-loading.vue';
import WeuiInput from './components/weui-input/weui-input.vue';

const components = [
  WeuiButton,
  WeuiCellGroup,
  WeuiCell,
  WeuiBadge,
  WeuiLoadmore,
  WeuiLoading,
  WeuiInput,
];

export {
  WeuiButton,
  WeuiCellGroup,
  WeuiCell,
  WeuiBadge,
  WeuiLoadmore,
  WeuiLoading,
  WeuiInput,
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
