<template>
	<aside class="sidebar">
		<nav class="nav">
			<ul class="menus">
				<li><router-link to="/">Chart Home</router-link></li>
				<li><router-link to="/chart-about">Chart About</router-link></li>
			</ul>
		</nav>
	</aside>
</template>

<script>
export default {
	name: 'c-sidebar',
};
</script>

<style lang="scss" scoped>
.sidebar {
	max-width: 200px;
	flex-grow: 2;
	height: calc(100% - 100px);
	background: #242580;
	color: #fff;
	.nav {
		> .menus {
			display: flex;
			flex-direction: column;
			li {
				gap: 5px 0;
			}
		}
	}
}
</style>
