<template>
	<div>
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />

		<div class="sampleButtons">
			<SampleButton
				v-for="sample in samples"
				:key="sample.id"
				:sample="sample"
			></SampleButton>
		</div>
		<router-view :key="$route.fullPath" />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import SampleButton from './components/SampleButton.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		SampleButton,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
