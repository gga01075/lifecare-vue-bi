<template>
	<Bar :id="chartId" :options="chartOptions" :data="data" />
</template>

<script>
import { Bar } from 'vue-chartjs';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from 'chart.js';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
);

export default {
	props: {
		chartId: {
			type: String,
			required: true,
		},
		options: {
			type: Object,
		},
		data: {
			type: Object,
			required: true,
		},
	},
	components: { Bar },

	setup(props) {
		console.log('props', props);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
