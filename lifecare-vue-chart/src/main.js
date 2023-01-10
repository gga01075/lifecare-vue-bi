import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// rMateChartH5 차트 컴포넌트
import Chart from './components/rMateChartH5.vue';

// samples의 데이터를 가지고 component 를 설정하고 각 샘플에 맞는 ...sample안의 설정 값을 props에 저장한다.
var sample,
	samples = [
		{ path: '/', js: 'Column2DChart', name: '루트 샘플' }, //루트 샘플 데이터는 Router에 추가 후 삭제할 예정
		{ path: '/column', js: 'Column2DChart', name: '컬럼 차트' },
		{ path: '/bar', js: 'Bar2DChart', name: '바 차트' },
		{ path: '/line', js: 'Line2DChart', name: '라인 차트' },
		{
			path: '/pattern_column_2d',
			js: 'Column_Pattern',
			name: '패턴 컬럼 차트',
		},
		{
			path: '/column_3d_custom_fill',
			js: 'Column_Custom_Fill',
			name: '사용자정의 색상',
		},
		{
			path: '/labelField_func_column',
			js: 'Column_Custom_Label',
			name: '사용자정의 라벨',
		},
	];

for (sample in samples) {
	sample = samples[sample];
	loadSamples(sample);

	sample.component = Chart; // component 를 rMateChartH5.vue 로 설정
	router.addRoute(sample);
}

//루트 샘플데이터 삭제
samples.splice(0, 1);

/**
 * sample.js 를 가져와 해당 샘플에 정의된 내용을 토대로 router-view에 출력될 내용을 가공한다.
 *
 * @param {object} sample - samples.js 에 설정된 배열 데이터 안의 하나의 객체 데이터
 */
function loadSamples(sample) {
	// 현재 선택된 샘플 js안의 데이터를 가져온다
	let data = require('./samples/' + sample.js + '.js');

	sample.props = {
		layout: data.layoutStr,
		data: data.chartData,
	};

	// 기본 차트 아이디 이외에 설정 하였을 경우
	if (data.chartId) sample.props.chartId = data.chartId;

	// 기본 차트 홀더 아이디 이외에 설정 하였을 경우
	if (data.holderId) sample.props.holderId = data.holderId;

	if (data.chartVars) sample.props.chartVars = data.chartVars;

	// 샘플 레이아웃에서 직접 함수를 사용하지 않고 methods에 설정하였을경우
	if (data.methods) {
		if (!window.rMateChartH5.methods) window.rMateChartH5.methods = {};

		window.rMateChartH5.methods[sample.js] = data.methods;
	}
}

createApp(App, { samples: samples }).use(router).mount('#app');
