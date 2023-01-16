<template>
    <Line :id="chartId" :data="data" :options="options" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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
    components: {
        Line
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>