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
	background: #eee;
	flex-grow: 8;
}
</style>
