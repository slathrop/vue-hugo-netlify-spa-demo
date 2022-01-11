<template>
	<div>
		<h1 class="font-300">Pós-Graduação</h1>
		<v-layout class="flex-wrap align-center" v-for="(p, i) in pos" :key="i">
			<v-flex xs12 md4 lg3>
				<v-img :src="p.img"></v-img>
				{{ p.name }}
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import pos from '../../pos.js'

	export default {
		data() {
			return {
				pos,
			}
		},
	}
</script>

<style>
</style>