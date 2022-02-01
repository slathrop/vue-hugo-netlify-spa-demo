<template>
	<v-card class="fill-height">
		<v-img
			lazy-src="/placeholder-2.jpg"
			aspect-ratio="1.5"
			:src="blog.imagem"
			class="
				c-info-lighten-2
				d-flex
				align-center
				justify-center
				text-center
				c-info-darken-2--text
			"
		>
		</v-img>
		<v-card-text class="black--text">
			<p class="mb-2">
				{{ DateTime.fromISO(blog.published_at).toFormat('dd.MM.y') }}
			</p>
			<h2 class="mb-2 font-600">
				<small :inner-html.prop="blog.titulo | truncate(60)"></small>
			</h2>
			<p
				class="line-height-1-2"
				:inner-html.prop="blog.texto | truncate(100)"
			></p>
			<v-layout
				class="align-center"
				v-for="(autor, i) in blog.autores"
				:key="i"
			>
				<v-avatar
					:src="autor.imagem"
					size="45"
					class="mr-2 c-primary-darken-1--text"
					style="border: 2px solid currentColor"
				>
					<img :src="autor.imagem" :alt="autor.nome" />
				</v-avatar>
				<div>
					<p class="font-600 my-0">{{ autor.nome }}</p>
					<p class="my-0 line-height-1">
						<small>{{ autor.minibio }}</small>
					</p>
				</div>
			</v-layout>
			<v-layout class="mt-4 flex-wrap">
				<v-chip
					small
					class="no-underline grey lighten-4 px-3 mr-2"
					:href="'/blog/' + cat.slug"
					v-for="(cat, i) in blog.categoria"
					:key="i"
					>{{ cat.nome }}</v-chip
				>
			</v-layout>
		</v-card-text>
	</v-card>
</template>
<script>
	const { DateTime } = require('luxon')
	export default {
		props: ['blog'],
		data() {
			return {
				DateTime,
			}
		},

		computed: {
			parsedDate() {
				// console.log('lol')
				// if (luxon) {
				// return luxon.DateTime.fromISO(this.blog.published_at)
				// }
			},
		},
		mounted() {
			console.log(DateTime)
		},
	}
</script>
<style lang='scss'>
</style>