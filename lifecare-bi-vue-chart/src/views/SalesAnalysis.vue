<template>
	<div>
		매출 분석 대시보드입니다.
		<CSelect label="카테고리" multiple />
		<CButton>버튼입니다</CButton>
		<BarChart
			:chartId="barId1"
			:holderId="barHolder1"
			:layout="barLayout1"
			:data="barData1"
		/>
	</div>
</template>

<script>
import CSelect from '@/components/elements/CSelect.vue';
import CButton from '@/components/elements/CButton.vue';
// import CDatePicker from '@/components/elements/CDatePicker.vue';
import BarChart from '@/components/elements/chart/BarChart.vue';

export default {
	components: {
		CSelect,
		CButton,
		BarChart,
	},
	data() {
		return {
			// barchart 예시
			barId1: 'chart1',
			barHolder1: 'barchartHolder1',
			barData1: [
				{ Month: 'Jan', Vancouver: 21 },
				{ Month: 'Feb', Vancouver: 29 },
				{ Month: 'Mar', Vancouver: 48 },
				{ Month: 'Apr', Vancouver: 38 },
				{ Month: 'May', Vancouver: 59 },
				{ Month: 'Jun', Vancouver: 77.2 },
				{ Month: 'Jul', Vancouver: 68 },
				{ Month: 'Aug', Vancouver: 58 },
				{ Month: 'Sep', Vancouver: 44 },
				{ Month: 'Oct', Vancouver: 23 },
			],
			barLayout1: `<rMateChart backgroundColor="#FFFFFF"  borderStyle="none"> 
				<Options> 
				<Caption text="Rainfall"/> 
				<SubCaption text="( mm )" textAlign="right"/> 
				<Legend/> 
				</Options> 
				<Bar2DChart showDataTips="true"> 
				<horizontalAxis> 
				<LinearAxis maximum="100"/> 
				</horizontalAxis> 
				<verticalAxis> 
				<CategoryAxis categoryField="Month"/> 
				</verticalAxis> 
				<series> 
				<Bar2DSeries labelPosition="inside" xField="Vancouver" displayName="Vancouver" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2" insideLabelJsFunction="labelJsFunc"> 
				<showDataEffect> 
				<SeriesInterpolate/> 
				</showDataEffect> 
				</Bar2DSeries> 
				</series> 
				</Bar2DChart> 
				</rMateChart>`,
		};
	},
};
</script>

<style lang="scss" scoped></style>
