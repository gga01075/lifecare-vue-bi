<template>
	<div class="v-content">
		<v-container fluid fill-height>
				<slot></slot>
		</v-container>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.v-content {
	display: flex;
	flex: 1 0 auto;
	max-width: 100%;
	padding: 0px 0px 0px 256px;
	background-color: #eee;
}
</style>
