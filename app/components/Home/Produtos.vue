<template>
	<v-layout>
		<v-flex xs12 md4 lg3 class="c-primary">
			<v-img
				class="mx-auto fill-height pattern-produtos"
				cover
				src="/pattern.jpg"
			></v-img>
		</v-flex>
		<v-flex xs12 md8 lg9 class="white">
			<v-layout
				style="margin-top: -50px; margin-bottom: -50px"
				class="spx-20 pt-5 flex-wrap justify-space-evenly white"
			>
				<v-flex
					xs12
					md6
					lg3
					v-for="({ nome, img }, i) in produtos"
					:key="i"
					data-aos="fade-right"
					:data-aos-delay="i * 50"
					class="smy-10"
				>
					<v-img
						style="max-width: 100px"
						class="mx-auto"
						contain
						:src="img"
					></v-img>
					<h1 class="subtitulo2 font-600 text-center text-uppercase">
						{{ nome }}
					</h1>
				</v-flex>
			</v-layout>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		data() {
			return {
				produtos: [
					{
						nome: 'Faculdade Teática',
						img: '/produtos/t-04.png',
					},
					{
						nome: 'Colégio Teática',
						img: '/produtos/t-03.png',
					},
					{
						nome: 'Portal de Cursos Digitais',
						img: '/produtos/t-02.png',
					},
					{
						nome: 'Escola de Saúde',
						img: '/produtos/t-06.png',
					},
					{
						nome: 'Hospital Veterinário',
						img: '/produtos/t-07.png',
					},
					{
						nome: 'Centro Integrado de Saúde',
						img: 'produtos/t-05.png',
					},
					{
						nome: 'Hub de Inovação',
						img: '/produtos/t-08.png',
					},
					{
						nome: 'Gestão Interina de IES',
						img: '/produtos/t-01.png',
					},
				],
			}
		},
		mounted() {
			console.log(this)
			AOS.init()
		},
	}
</script>

<style lang="scss">
	.pattern-produtos .v-image__image {
		background-color: #ffdf42;
		background-blend-mode: luminosity;
		opacity: 0.3;
		background-attachment: fixed;
		background-size: 35%;
		background-position: left !important;
	}
</style>