<template>
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
			<h1 class="subtitulo2 font-900 text-center text-uppercase">
				{{ nome }}
			</h1>
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
	}
</script>

<style>
</style>