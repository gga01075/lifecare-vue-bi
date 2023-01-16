<template>
	<v-navigation-drawer permanent>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title class="text-h6"> Lifecare BI </v-list-item-title>
				<v-list-item-subtitle> 주문, 상품 차트페이지 </v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-divider></v-divider>

		<v-list dense nav>
			<v-list-item v-for="item in items" :key="item.title" link :to="item.path">
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: '매출분석',
					icon: 'mdi-chart-areaspline',
					path: '/',
				},
				{
					title: '고객분석',
					icon: 'mdi-account-multiple',
					path: '/CustomerTypesAnalysis',
				},
				{
					title: '상품분석',
					icon: 'mdi-gift',
					path: '/ProdSalesAnalysis',
				},
				{
					title: '마케팅분석',
					icon: 'mdi-help-box',
					path: '/CustomerManagement',
				},
				{
					title: '고객관리',
					icon: 'mdi-bullseye-arrow',
					path: '/EventTypesAnalysis',
				},
				{
					title: '컴포넌트 모음',
					icon: 'mdi-bullseye-arrow',
					path: '/ComponentPage',
				},
			],
			right: null,
		};
	},
};
</script>

<style lang="scss" scoped>

</style>
