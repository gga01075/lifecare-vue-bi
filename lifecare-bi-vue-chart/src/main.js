import App from './App.vue';
import { createApp } from 'vue';
import axios from 'axios';

import { registerPlugins } from '@/plugins';

const app = createApp(App);

app.config.globalProperties.bosGrade = '';

axios.defaults.baseURL =
	import.meta.env.VITE_PROTOCAL + '://' + import.meta.env.VITE_API_HOST;
axios.defaults.timeout = 990000;
axios.defaults.credentials = true;
axios.defaults.withCredentials = true;
app.config.globalProperties.$axios = axios;

const bosLogin = async () => {
	console.log('bosLogin: ', 'start');
	const param = {
		id: 'biadmin',
		password: '1234',
		pin: '',
		domainType: 'BOS',
	};
	// pin :
	// domainType : 권한(BOS: 관리자, CST: 협력사, SAM : ?) 확인 필요

	axios.post('/mng/signIn', param).then(res => {
		console.log('res: ', res);
	});
};
console.log('process.env.TYPE: ', import.meta.env.VITE_NODE_ENV);
if (import.meta.env.VITE_NODE_ENV === 'local') {
	bosLogin();
}

registerPlugins(app);

app.mount('#app');
