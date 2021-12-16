<template>
	<v-layout style="margin-top: -50px">
		<v-flex xs12 md4> Img </v-flex>
		<v-flex xs12 md8 class="white">
			<v-layout class="spa-24 flex-wrap">
				<v-flex
					xs12
					md6
					lg4
					v-for="({ nome, url, img }, i) in produtos"
					:key="i"
				>
					<h1>{{ nome }}</h1>
					{{ img }}
					{{ url }}
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
						url: '',
						img: '',
					},
					{
						nome: 'Colégio Teática',
						url: '',
						img: '',
					},
					{
						nome: 'Portal de Cursos Digitais',
						url: '',
						img: '',
					},
					{
						nome: 'Escola de Saúde',
						url: '',
						img: '',
					},
					{
						nome: 'Hospital Veterinário',
						url: '',
						img: '',
					},
					{
						nome: 'Centro Integrado de Saúde',
						url: '',
						img: '',
					},
					{
						nome: 'Hub de Inovação',
						url: '',
						img: '',
					},
					{
						nome: 'Gestão Interina de IES',
						url: '',
						img: '',
					},
				],
			}
		},
	}
</script>