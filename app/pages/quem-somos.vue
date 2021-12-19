<template>
	<div>
		<QuemSomosBanner></QuemSomosBanner>
		<div class="spa-24">
			<p class="spx-24 text-center">
				<big
					>A Associação Teática Internacional é uma associação comunitária, sem
					fins lucrativos e filantrópica, fundada em setembro de 2013 por um
					grupo de educadores cuja missão é difundir a APRENDIZAGEM EVOLUTIVA no
					Brasil e no exterior.
				</big>
			</p>
			<p class="spx-24 spb-10 text-center">
				<big
					>A associação possui diversas frentes de atuação social, entre
					elas</big
				>
				estão:
			</p>
			<HomeProdutosItems></HomeProdutosItems>
		</div>

		<v-layout class="spy-24 grey lighten-3">
			<v-flex xs12 md4 lg3 class="spl-24">
				<p>
					A Associação Teática Internacional é composta por um
					<span class="font-600"> Conselho Deliberativo </span>, um
					<span class="font-600">Conselho Fiscal</span> e uma
					<span class="font-600">Diretoria Executiva</span>, formada pelas
					seguintes pessoas:
				</p>
			</v-flex>
			<v-flex xs12 md8 lg9 class="spx-24">
				<span class="c-primary spa-3 d-inline">
					<p class="d-inline">CONSELHO DELIBERATIVO</p>
				</span>
				<v-layout class="flex-wrap mt-10">
					<v-flex xs12 md6 lg4 class="d-flex align-center smb-8">
						<v-flex xs12 md5>
							<v-img
								style="border-radius: 300px"
								class="smr-5"
								src="/staff/ryon.jpg"
							></v-img>
						</v-flex>
						<v-flex>
							<p class="font-600">Ryon Braga</p>
						</v-flex>
					</v-flex>
					<v-flex xs12 md6 lg4 class="d-flex align-center smb-8">
						<v-flex xs12 md5>
							<v-img
								style="border-radius: 300px"
								class="smr-5 c-info"
								src="/staff/cristina.png"
							></v-img>
						</v-flex>
						<v-flex>
							<p class="font-600">Cristina Dalvi Davel</p>
						</v-flex>
					</v-flex>
					<v-flex xs12 md6 lg4 class="d-flex align-center smb-8">
						<v-flex xs12 md5>
							<v-img
								style="border-radius: 300px"
								class="smr-5"
								src="/staff/lucia.png"
							></v-img>
						</v-flex>
						<v-flex>
							<p class="font-600">Lúcia Helena Makhlouf</p>
						</v-flex>
					</v-flex>
					<v-flex xs12 md6 lg4 class="d-flex align-center smb-8">
						<v-flex xs12 md5>
							<v-img
								style="border-radius: 300px"
								class="smr-5"
								src="/staff/ryon.jpg"
							></v-img>
						</v-flex>
						<v-flex>
							<p class="font-600">José Djalma Cajado da Fonseca</p>
						</v-flex>
					</v-flex>
					<v-flex xs12 md6 lg4 class="d-flex align-center smb-8">
						<v-flex xs12 md5>
							<v-img
								style="border-radius: 300px"
								class="smr-5"
								src="/staff/norma.png"
							></v-img>
						</v-flex>
						<v-flex>
							<p class="font-600">Norma Viapiana Golfeto</p>
						</v-flex>
					</v-flex>
				</v-layout>

				<p>CONSELHO FISCAL</p>
				<p>Graça Souza</p>
				<p>Otávio Augusto Araújo</p>
				<p>Maria Izabel Conceição</p>

				<p>DIRETORIA EXECUTIVA</p>
				<p>Ryon Braga</p>
				<p>José Djalma Cajado da Fonseca</p>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	export default {
		mounted() {
			AOS.init()
		},
	}
	// export default {
	//   async asyncData({ $http }) {
	//     const blogs = JSON.parse(await $http.$get('/blog/index.json'))

	//     return { blogs }
	//   },
	// }
</script>

