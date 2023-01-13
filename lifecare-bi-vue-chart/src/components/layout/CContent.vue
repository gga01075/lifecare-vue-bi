<template>
	<div class="v-content">
		<v-container fluid fill-height>
			<v-layout justify-center align-center>
				<slot></slot>
			</v-layout>
		</v-container>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.v-content {
	display: flex;
	flex: 1 0 auto;
	max-width: 100%;
	padding: 56px 0px 32px 300px;
	background-color: #bbdefb;
	&[data-booted='true'] {
		transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
}
</style>
