import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import WeuiUni from "../uni_modules/weui-uni";
export function createApp() {
	const app = createSSRApp(App);
	app.use(WeuiUni);
	return {
		app,
	};
}
