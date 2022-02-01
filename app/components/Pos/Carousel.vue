<template>
	<div>
		<h1 class="font-500 smt-20 main-title">Pós-Graduação</h1>

		<v-layout
			class="flex-wrap align-center"
			style="
				margin-left: calc(-8px - 0.4vw) !important;
				margin-right: calc(-8px - 0.4vw) !important;
			"
		>
			<v-flex xs12 md4 lg3 class="spx-4" v-for="(p, i) in pos" :key="i">
				<router-link
					:to="`/faculdade-teatica/pos-graduacao/${p.slug}`"
					class="no-underline"
				>
					<v-card>
						<v-img
							:src="p.img"
							aspect-ratio="1.5"
							class="grey lighten-2"
							lazy-src="/placeholder-2.jpg"
						>
							<template v-slot:placeholder>
								<v-row class="fill-height ma-0" align="center" justify="center">
									<v-progress-circular
										indeterminate
										color="grey lighten-2"
									></v-progress-circular>
								</v-row>
							</template>
						</v-img>
						<div
							class="c-primary spx-3 ml-3"
							style="z-index: 2; position: absolute; top: 0"
						>
							<p class="black--text mb-0 mt-1 text-center">INÍCIO</p>
							<p class="black--text mb-0 line-height-1 text-center">
								<big
									class="font-900 line-height-1"
									style="font-size: 50px"
									v-if="p.data_inicio"
									>{{ p.data_inicio }}</big
								>
							</p>
							<p
								class="
									black--text
									mb-1
									line-height-1
									text-center text-uppercase
								"
							>
								<big class="font-900" v-if="p.mes_inicio">{{
									p.mes_inicio.slice(0, 3)
								}}</big>
								<big class="font-900" v-else>a definir</big>
								<big class="font-900" v-if="p.ano_inicio"
									>/{{ p.ano_inicio.slice(2, 4) }}</big
								>
							</p>
						</div>
						<div class="spl-3 spy-5">
							<!-- <div class="c-primary" style="height: 5px"></div> -->
							<h2 class="pt-1 c-secondary--text">
								{{ p.name }}
							</h2>
							<div class="spt-2" v-if="p.duracao">
								<i class="fas fa-clock mr-2 c-info-darken-1--text"></i>Duração:
								{{ p.duracao }} meses
							</div>
							<div v-else>a definir</div>
							<v-layout class="justify-end">
								<v-btn depressed small class="smr-3 smt-3 c-primary black--text"
									><span class="font-600">SAIBA MAIS</span
									><i class="fas fa-arrow-right ml-2"></i
								></v-btn>
							</v-layout>
						</div>
						<div class="c-primary" style="height: 5px"></div>
					</v-card>
				</router-link>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import pos from '@/data/pos.js'

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