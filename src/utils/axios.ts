import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';

const instance = axios.create({
	timeout: 5 * 1000,
	baseURL: import.meta.env.VITE_BASE_URL as string,
});

instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(
	(res: AxiosResponse) => {
		return res.data;
	},
	(error: any) => {
		ElMessage.error(error.message || '服务端错误');
		return Promise.reject(error);
	},
);

export default instance;
