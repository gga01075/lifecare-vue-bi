<template>
	<div>
		매출 분석 대시보드입니다.
		<CSelect label="카테고리" multiple />
		<CButton>버튼입니다</CButton>
		<!-- <CDatePicker /> -->
	</div>
</template>

<script setup>
import CSelect from '@/components/elements/CSelect.vue';
import CButton from '@/components/elements/CButton.vue';
// import CDatePicker from '@/components/elements/CDatePicker.vue';
</script>

<style lang="scss" scoped></style>
