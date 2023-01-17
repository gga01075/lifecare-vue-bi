<template>
		<CContentTop>
			<CSelect :selectedItem="nationList" multiple />
		</CContentTop>
</template>

<script>
import CContentTop from '@/components/layout/CContentTop.vue'
import CSelect from '@/components/elements/CSelect.vue'



export default {
	components : {
		CContentTop,
		CSelect
	},
	setup () {

		return {}
	}
}
</script>

<style lang="scss" scoped>

</style>