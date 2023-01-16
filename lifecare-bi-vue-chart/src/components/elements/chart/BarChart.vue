<template>
	<div :id="holderId" class="chartHolder"></div>
</template>

<script>
import { reactive, onMounted, onBeforeUnmount } from 'vue';

export default {
	props: {
		chartId: {
			// 차트 아이디
			type: String,
			default: 'chart',
		},
		holderId: {
			// 차트가 그려질 객체 아이디
			type: String,
			default: 'chartHolder',
		},
		chartVars: {
			type: String,
			default: '',
		},
		layout: [String, Object], // 차트 레이아웃
		data: [Array, Object], // 차트 데이터
	},
	setup(props) {
		console.log('props:::', props);

		let chart = reactive({});
		/**
		 * rMateChartH5 객체 생성
		 */
		const create = () => {
			console.log('window.rMateChartH5', window.rMateChartH5);
			chart = window.rMateChartH5;

			checkPattern();
			chart.create(props.chartId, props.holderId, props.chartVars);
		};
		const destroy = () => {
			chart.call('destroy');
		};
		const call = (...params) => {
			chart.call(props.chartId, ...params);
		};
		/**
		 * 레이아웃 설정
		 */
		const setLayout = layout => {
			call('setLayout', layout);
		};
		/**
		 * 데이터 설정
		 */
		const setData = data => {
			call('setData', data);
		};
		/**
		 * 프리로더 출력
		 */
		const showAdditionalPreloader = () => {
			call('showAdditionalPreloader');
		};
		/**
		 * 프리로더 삭제
		 */
		const removeAdditionalPreloader = () => {
			call('removeAdditionalPreloader');
		};
		/**
		 * 패턴 설정 여부를 체크하여 이미지 경로를 차트에 넣어줌
		 */
		const checkPattern = () => {
			if (props.chartVars && props.chartVars.indexOf('Pattern') > -1) {
				chart.patternImagesUrl = [
					'diagonal_ltr.png',
					'diagonal_rtl.png',
					'diagonal.png',
					'horizontal.png',
					'vertical.png',
					'both.png',
					'up.png',
					'right.png',
					'horizontal_curve.png',
					'vertical_curve.png',
					'horizontal_pipe.png',
					'vertical_pipe.png',
					'rectangle.png',
					'circle.png',
					'diamond.png',
					'triangle.png',
					'down_triangle.png',
					'cross.png',
					'rectangle2.png',
					'circle.png',
				];

				chart.patternImageBaseUrl = 'rMateChartH5/Assets/Patterns/';
			}
		};

		onMounted(() => {
			console.log('컴포넌트 mounted');
			create();
			setLayout(props.layout);
			setData(props.data);
		});

		onBeforeUnmount(() => {
			destroy();
		});

		console.log('chart:::', chart);

		return {
			chart,
			create,
			destroy,
			call,
			setLayout,
			setData,
			showAdditionalPreloader,
			removeAdditionalPreloader,
			checkPattern,
		};
	},
};
</script>

<style lang="scss" scoped>
.chartHolder {
	width: 100%;
	height: 500px;
	margin-bottom: 30px;
}
</style>
