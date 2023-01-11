import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// rMateChartH5 차트 컴포넌트
// import Chart from './components/rMateChartH5.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

createApp(App).use(router).mount('#app');
