<template>
	<section class="content">
		<slot></slot>
	</section>
</template>

<script>
export default {
	name: 'c-content',
};
</script>

<style lang="scss" scoped>
.content {
	max-width: 1000px;
	background: #ccc;
	display: flex;
	flex-grow: 8;
}
</style>
