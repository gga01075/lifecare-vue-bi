<template>
	<CContainer>
		<CAside />
		<CContent>
			<router-view></router-view>
		</CContent>
	</CContainer>
</template>

<script setup>
import CContainer from '@/components/layout/CContainer.vue';
import CAside from '@/components/layout/CAside.vue';
import CContent from '@/components/layout/CContent.vue';
</script>

<style lang="scss" scoped></style>
