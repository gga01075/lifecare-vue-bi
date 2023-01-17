<template>
    <v-list nav class="side-menu-list">
			<v-list-item v-for="item in menuItems" :key="item.title" link :to="item.path">
				<v-list-item-icon>
					<v-icon> mdi-apps </v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
	</v-list>
</template>

<script>
import {reactive } from 'vue'

export default {
    setup () {
        const menuItems = reactive([
				{
					title: '매출분석',
					path: '/',
				},
				{
					title: '고객분석',
					path: '/CustomerTypesAnalysis',
				},
				{
					title: '상품분석',
					path: '/ProdSalesAnalysis',
				},
				{
					title: '마케팅분석',
					path: '/CustomerManagement',
				},
				{
					title: '고객관리',
					path: '/EventTypesAnalysis',
				},
				{
					title: '컴포넌트 모음',
					path: '/ComponentPage',
				},
			])    

        return {menuItems}
    }
}
</script>

<style lang="scss" scoped>
    .side-menu-list{
        .v-list-item {
            &.v-list-item--active{
                color: #fff;
            }
          
        }
    }
    
</style>