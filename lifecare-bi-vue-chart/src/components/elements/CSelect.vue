<template>
	<v-row dense>
		<template v-if="label">
			<v-col cols="12" md="2">
				<v-list-item-content>{{ label }}</v-list-item-content>
			</v-col>
		</template>
		<v-col cols="12" md="10">
			<v-select
				v-model="favorites"
				:items="states"
				label="Select"
				:multiple="multiple"
				:disabled="disabled"
				:hint="hint"
				persistent-hint
			></v-select>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: {
		// 라벨 텍스트, 라벨 없으면 라벨 영역 제거됨
		label: String,
		// select 다중 선택 유무
		multiple: { type: Boolean, default: false },
		// select 선택 불가 여부
		disabled: { type: Boolean, default: false },
		// 안내글
		hint: { type: String, default: '' },
	},
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
