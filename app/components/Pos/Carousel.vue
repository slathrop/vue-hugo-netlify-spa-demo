<template>
	<div>
		<h1 class="font-500 smt-20">Pós-Graduação</h1>
		<v-layout
			class="flex-wrap align-center"
			style="
				margin-left: calc(-8px - 0.4vw) !important;
				margin-right: calc(-8px - 0.4vw) !important;
			"
		>
			<v-flex xs12 md4 class="spx-4" v-for="(p, i) in pos" :key="i">
				<a :href="`/pos-graduacao/${p.slug}`" class="no-underline">
					<v-card>
						<!-- <div class="c-primary" style="height: 5px"></div> -->
						<v-img :src="p.img"></v-img>
						<h2 class="pt-1 c-secondary--text spl-3">{{ p.name }}</h2>
						<v-layout class="c-secondary--text pt-2">
							<v-flex class="spl-3"
								><i class="fas fa-calendar mr-2 c-info-darken-1--text"></i
								>Início: {{ p.inicio }}</v-flex
							>
							<v-flex
								><i class="fas fa-clock mr-2 c-info-darken-1--text"></i>Duração:
								{{ p.duracao }} meses</v-flex
							>
						</v-layout>
						<div class="c-primary mt-3" style="height: 5px"></div>
					</v-card>
				</a>
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