import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import createRestart from './restart';
import createHtml from './html';
import createAutoImport from './auto-import';
import createComponents from './components';
import createSetupExtend from './setup-extend';
import createSvgIcon from './svg-icon';
import createLayouts from './layouts';
import createPages from './pages';
import createCompression from './compression';
import createBanner from './banner';
import pluginEslint from './pluginEslint';

export default function createVitePlugins(viteEnv: any, isBuild = false) {
	const vitePlugins: (PluginOption | PluginOption[])[] = [
		vue({
			reactivityTransform: true
		}),
		vueJsx()
	];
	!isBuild && vitePlugins.push(createRestart());
	vitePlugins.push(createHtml(viteEnv, isBuild));
	vitePlugins.push(createAutoImport());
	vitePlugins.push(createComponents());
	vitePlugins.push(createSetupExtend());
	vitePlugins.push(createSvgIcon(isBuild));
	vitePlugins.push(createLayouts());
	vitePlugins.push(createPages());
	isBuild && vitePlugins.push(...createCompression(viteEnv));
	vitePlugins.push(createBanner());
	vitePlugins.push(pluginEslint());
	return vitePlugins;
}
