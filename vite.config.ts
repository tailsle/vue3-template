import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
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
		plugins: [vue()],
	});
};
