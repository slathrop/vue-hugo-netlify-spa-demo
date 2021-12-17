<template>
	<v-layout>
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
		<v-flex xs12 md4 lg3 class="c-primary">
			<v-img class="mx-auto" contain src="/produtos/bg.png"></v-img>
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
						img: '',
					},
					{
						nome: 'Colégio Teática',
						img: '',
					},
					{
						nome: 'Portal de Cursos Digitais',
						img: '',
					},
					{
						nome: 'Escola de Saúde',
						img: '',
					},
					{
						nome: 'Hospital Veterinário',
						img: '',
					},
					{
						nome: 'Centro Integrado de Saúde',
						img: '',
					},
					{
						nome: 'Hub de Inovação',
						img: '',
					},
					{
						nome: 'Gestão Interina de IES',
						img: '',
					},
				],
			}
		},
	}
</script>