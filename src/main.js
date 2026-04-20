import {
	createSSRApp
} from "vue";
import App from "./App.vue";
// #ifndef MP
import WeuiUni from "../uni_modules/weui-uni";
// #endif
export function createApp() {
	const app = createSSRApp(App);
	// #ifndef MP
	app.use(WeuiUni);
	// #endif
	return {
		app,
	};
}
