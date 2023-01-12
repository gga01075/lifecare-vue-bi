<template>
	<button class="btn" :type="type">{{ name }}</button>
</template>

<script>
export default {
	name: 'c-Button',
	props: {
		type: String,
		name: String,
	},
};
</script>

<style scoped>
.btn {
	background-color: transparent;
	border: 1px solid rgba(0, 0, 0, 0.6);
	border-radius: 3px;
}
.btn:hover {
	cursor: pointer;
}
</style>
