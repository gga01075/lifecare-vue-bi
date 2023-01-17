<template>
	<v-navigation-drawer permanent class="aside">
		<CAsideAccount />
		<v-divider></v-divider>
		<CAsideMenu />		
	</v-navigation-drawer>
</template>

<script>
import CAsideAccount from '@/components/layout/CAsideAccount.vue'
import CAsideMenu from '@/components/layout/CAsideMenu.vue'

export default {
	components : {
		CAsideAccount,
		CAsideMenu
	},
	data() {
		return {

		};
	},
};
</script>

<style lang="scss" scope>
	.v-navigation-drawer{
			&.aside{
				background-color:#2D353C;
				color: #aaa;
			}
	}

</style>
