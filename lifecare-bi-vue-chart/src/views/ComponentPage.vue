<template>
	<div>
		<CSelect :label="selectLabel1" multiple />
		<CButton>버튼입니다</CButton>
		<BarChart :chartId="barId1" :options="barOption1" :data="barData1" />
	</div>
</template>

<script>
import CSelect from '@/components/elements/CSelect.vue';
import CButton from '@/components/elements/CButton.vue';
// import CDatePicker from '@/components/elements/CDatePicker.vue';
import BarChart from '@/components/elements/chart/BarChart.vue';


import { ref, reactive } from 'vue';

export default {
	components: {
		CSelect,
		CButton,
		BarChart,
	},
	setup() {
		// Select 예시
		const selectLabel1 = ref('카테고리');
		

		// barchart 예시
		const barId1 = ref('chart1');
		const barOption1 = reactive({
			responsive: true,
		});
		const barData1 = reactive({
			labels: ['January', 'February', 'March'],
			datasets: [{ data: [40, 20, 12] }],
		});

		// linechart 예시
		const lineId1 = ref('chart1');
		const lineOption1 = reactive({
			  responsive: true,
  			  maintainAspectRatio: false
		});
		const lineData1 = reactive({
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
				label: 'Data One',
				backgroundColor: '#f87979',
				data: [40, 39, 10, 40, 39, 80, 40]
				}
			]
		});

		return {
			// select
			selectLabel1,

			// bar 차트
			barId1,
			barOption1,
			barData1,
			// line 차트
			lineId1,
			lineOption1,
			lineData1

		};
	},
};
</script>

<style lang="scss" scoped></style>
