<template>
	<div :id="holderId" class="chartHolder"></div>
</template>

<script>
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
	mounted() {
		this.create();
		this.setLayout(this.layout);
		this.setData(this.data);
	},
	beforeUnmount() {
		this.destroy();
	},
	methods: {
		/**
		 * rMateChartH5 객체 생성
		 */
		create: function () {
			this.chart = window.rMateChartH5;

			this.checkPattern();
			this.chart.create(this.chartId, this.holderId, this.chartVars);
		},
		destroy: function () {
			this.call('destroy');
		},
		call: function (...params) {
			this.chart.call(this.chartId, ...params);
		},
		/**
		 * 레이아웃 설정
		 */
		setLayout: function (layout) {
			this.call('setLayout', layout);
		},
		/**
		 * 데이터 설정
		 */
		setData: function (data) {
			this.call('setData', data);
		},
		/**
		 * 프리로더 출력
		 */
		showAdditionalPreloader: function () {
			this.call('showAdditionalPreloader');
		},
		/**
		 * 프리로더 삭제
		 */
		removeAdditionalPreloader: function () {
			this.call('removeAdditionalPreloader');
		},
		/**
		 * 패턴 설정 여부를 체크하여 이미지 경로를 차트에 넣어줌
		 */
		checkPattern: function () {
			if (this.chartVars && this.chartVars.indexOf('Pattern') > -1) {
				this.chart.patternImagesUrl = [
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

				this.chart.patternImageBaseUrl = 'rMateChartH5/Assets/Patterns/';
			}
		},
	},
};
</script>

<style>
.chartHolder {
	width: 100%;
	height: 500px;
	margin-bottom: 30px;
}
</style>
