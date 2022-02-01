<template>
	<v-layout class="spx-24 white spt-10">
		<v-flex xs12 md6 class="spr-10">
			<h1 class="font-500 smt-20 main-title">Acontece na Teática</h1>

			<v-layout style="margin: 0 calc(-8px - 0.4vw) !important">
				<v-flex
					xs12
					md6
					class="spx-4"
					v-for="(noticia, i) in noticias"
					:key="i"
				>
					<BlogCard :blog="noticia"></BlogCard>
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex xs12 md6 class="spl-10">
			<h1 class="font-500 smt-20 main-title">Blog Teática</h1>

			<v-layout style="margin: 0 calc(-8px - 0.4vw) !important">
				<v-flex xs12 md6 class="spx-4" v-for="(blog, i) in blogs" :key="i">
					<BlogCard :blog="blog"></BlogCard>
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
				let blogs = []

				blog.forEach((element) => {
					if (!element.categoria.find((c) => c.slug === 'noticia')) {
						blogs.push(element)
					}
				})
				return blogs
			},
			noticias() {
				return blog.filter((a) => a.categoria.find((c) => c.slug === 'noticia'))
			},
		},
	}
</script>

<style>
</style>