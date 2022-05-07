import { createApp } from 'vue';
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
