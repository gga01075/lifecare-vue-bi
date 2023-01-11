<template>
	<section class="container-wrap">
		<slot></slot>
	</section>
</template>

<script>
export default {
	name: 'c-container',
};
</script>

<style lang="scss" scoped>
.container-wrap {
	height: calc(100vh - 100px);
}
</style>
