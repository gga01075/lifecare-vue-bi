<template>
	<nav class="nav">
		<ul class="menus">
			<li><router-link to="/">Chart Home</router-link></li>
			<li><router-link to="/chart-about">Chart About</router-link></li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'c-sidebar',
};
</script>

<style lang="scss" scoped>
.nav {
	max-width: 200px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background: #242580;
	color: #fff;
	flex-grow: 2;
	> .menus {
		gap: 5px 0;
	}
}
</style>
