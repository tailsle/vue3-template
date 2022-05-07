import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default mode => {
	const env = loadEnv(mode, process.cwd());
	return defineConfig({
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		server: {
			port: 3000,
			open: true,
			cors: true,
			hmr: true,
			proxy: {
				'/api': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ''),
				},
			},
		},
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver()],
				include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
				imports: ['vue', 'vue-router'],
				eslintrc: {
					enabled: true,
					filepath: './.eslintrc-auto-import.json',
					globalsPropValue: true,
				},
				dts: './auto-imports.d.ts',
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
	});
};
