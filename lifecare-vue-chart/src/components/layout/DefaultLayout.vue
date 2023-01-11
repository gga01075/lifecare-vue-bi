<template>
	<div>
		<CHeader />
		<CContainer>
			<CSidebar />
			<CContent>
				<router-view></router-view>
			</CContent>
		</CContainer>
	</div>
</template>
<script>
import CHeader from './CHeader.vue';
import CContainer from './CContainer.vue';
import CSidebar from './CSidebar.vue';
import CContent from './CContent.vue';

export default {
	name: 'c-layout',
	components: {
		CHeader,
		CContainer,
		CSidebar,
		CContent,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
