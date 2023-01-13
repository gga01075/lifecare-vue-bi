<template>
	<v-select
		v-model="favorites"
		:items="states"
		label="Select"
		multiple
		hint="Pick your favorite states"
		persistent-hint
	></v-select>
</template>

<script>
export default {
	data() {
		return {
			favorites: [],
			states: [
				'Alabama',
				'Alaska',
				'American Samoa',
				'Arizona',
				'Arkansas',
				'California',
				'Colorado',
			],
		};
	},
};
</script>

<style lang="scss" scoped></style>
