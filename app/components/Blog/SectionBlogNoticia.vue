<template>
	<v-layout class="spx-24 white">
		<v-flex xs12 md6 class="spr-10">
			<h1 class="font-500 smt-20 main-title">Acontece na Teática</h1>

			<v-layout style="margin: 0 calc(-8px - 0.4vw) !important">
				<v-flex xs12 md6 class="spx-4" v-for="(blog, i) in blogs" :key="i">
					<BlogCard :blog="blog"></BlogCard>
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex xs12 md6 class="spl-10">
			<h1 class="font-500 smt-20 main-title">Blog Teática</h1>

			<v-layout style="margin: 0 calc(-8px - 0.4vw) !important">
				<v-flex xs12 md6 class="spx-4" v-for="i in 2" :key="i">
					<BlogCard></BlogCard>
				</v-flex>
			</v-layout>
		</v-flex>
	</v-layout>
</template>

<script>
	import blog from '@/data/blog.js'
	export default {
		computed: {
			blogs() {
				return blog.filter((a) => a.categoria.map((c) => c.slug !== 'noticia'))
			},
			noticias() {
				return blog.filter((a) => a.categoria.find((c) => c.slug === 'noticia'))
			},
		},
	}
</script>

<style>
</style>