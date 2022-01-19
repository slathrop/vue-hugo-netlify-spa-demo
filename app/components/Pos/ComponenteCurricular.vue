<template>
	<div class="padding-padrao spy-15">
		<h1 class="titulo ead spx-20 spx-xs-0" v-if="!hideTitulo">
			<big>{{ titulo ? titulo : 'COMPONENTES CURRICULARES' }}</big>
		</h1>
		<p class="secondary--text light spl-20 mt-3" v-if="cargaHoraria">
			{{ cargaHoraria }} horas/aulas
		</p>

		<div class="spx-20 spx-xs-0">
			<v-expansion-panel v-model="panel" class="smt-4 expansion-panel-ead">
				<v-expansion-panel-content
					class="smb-3"
					@click.native="href(matrizes)"
					v-for="(matrizes, index) in componentes"
					:key="index"
				>
					<template v-slot:header>
						<div>
							<h2 class="semilight secondary--text mb-0">
								<span class="primary--text">
									<clr-icon shape="play"></clr-icon>
								</span>

								{{ matrizes.titulo }}
							</h2>
						</div>
					</template>
					<template
						v-slot:actions
						v-if="matrizes.itens && matrizes.itens.length"
					>
						<clr-icon
							:shape="index === panel ? 'minus-circle' : 'plus-circle'"
							size="25"
							class="grey--text"
						></clr-icon>
					</template>
					<v-layout v-if="!link" wrap class="mt-3 pb-3">
						<div v-for="(matriz, j) in matrizes.itens" :key="j">
							<v-card class="spl-12 card-competencias">
								<div class="linha-card">
									<p class="regular titulo-card secondary--text spr-6">
										<span class="primary--text">
											<clr-icon shape="child-arrow"></clr-icon>
										</span>
										{{ matriz.descricao }}
									</p>
								</div>
							</v-card>
						</div>
					</v-layout>
				</v-expansion-panel-content>
				<v-expansion-panel-content class="smb-3" v-if="hasapv">
					<template v-slot:header>
						<div>
							<h2 class="semilight secondary--text mb-0">
								<span class="primary--text">
									<clr-icon shape="play"></clr-icon>
								</span>
								Aprendizagem para a Vida – APV
							</h2>
						</div>
					</template>
					<template v-slot:actions>
						<clr-icon
							:shape="apv ? 'minus-circle' : 'plus-circle'"
							size="30"
							class="grey--text"
						></clr-icon>
					</template>
					<v-layout wrap class="mt-3 pb-3">
						<p class="light spx-12 spb-8">
							As APV são projetos focados no desenvolvimento de habilidades para
							a formação pessoal dos estudantes, sendo que cada estudante pode
							escolher a APV que irá cursar durante o trimestre. O número de APV
							do curso depende do seu tempo de duração e aspectos legais. Alguns
							exemplos de APV:
						</p>
						<v-flex
							sx12
							md4
							v-for="(cpp, i) in apvs"
							:key="i"
							class="pb-3"
							style="height: 80px"
						>
							<v-card class="spl-12 card-competencias">
								<div class="linha-card">
									<p class="regular titulo-card secondary--text spr-6">
										<span class="primary--text">
											<clr-icon shape="child-arrow"></clr-icon>
										</span>
										{{ cpp.nome }}
									</p>
								</div>
							</v-card>
						</v-flex>
					</v-layout>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			titulo: String,
			componentes: Array,
			cargaHoraria: String,
			link: {
				type: Boolean,
				default: false,
			},
			hasapv: {
				type: Boolean,
				default: false,
			},
			hideTitulo: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			href({ slug }) {
				if (this.link) {
					open('/portal-professor/in-company/aperfeicoamentos/' + slug)
				}
			},
		},
		data() {
			return {
				panel: null,
				apv: false,
				apvs: [
					{
						nome: 'Habilidades cognitivas e raciocínio lógico',
					},
					{
						nome: 'Desenvolvimento de habilidades socioemocionais',
					},
					{
						nome: 'Inteligência Evolutiva e Modelo Mental (Mindset)',
					},
					{
						nome: 'Autoconhecimento e domínio das emoções',
					},
					{
						nome: 'Tecnologia para vida pessoal e profissional',
					},
					{
						nome: 'Educação Financeira',
					},
					{
						nome: 'Análise e Resolução Problemas',
					},
					{
						nome: 'Empreendedorismo',
					},
					{
						nome: 'Autogestão do tempo e autorganização da vida pessoal',
					},
					{
						nome: 'Inovação',
					},
					{
						nome: 'Gestão - como administrar sua vida e sua profissão',
					},
					{
						nome: 'Libras',
					},
					{
						nome: 'Direitos Humanos',
					},
					{
						nome: 'Educação Ambiental e Sustentabilidade - ODSs/ONU',
					},
					{
						nome: 'Solução de Conflitos e Mediação',
					},
					{
						nome: 'Iniciação Científica e metodologias de pesquisas',
					},
					{
						nome: 'História e Cultura Afro-brasileira',
					},
					{
						nome: 'Relações étnico-raciais e cultura indígena',
					},
					{
						nome: 'Pensamento Crítico',
					},
					{
						nome: 'Comunicação Eficaz',
					},
					{
						nome: 'Sexualidade e Gênero',
					},
					{
						nome: 'Design Thinking',
					},
					{
						nome: 'Mídias Digitais',
					},
					{
						nome: 'Carreira Profissional, empregabilidade e trabalhabilidade',
					},
					{
						nome: 'Redação de Artigos Científicos',
					},
					{
						nome: 'Fundamentos de programação e desenvolvimento de Aplicativos',
					},
					{
						nome: 'Criatividade',
					},
				],
			}
		},
	}
</script>

<style lang="scss">
	// @import '@/../scss/colors';

	.expansion-panel-ead {
		box-shadow: none !important;

		clr-icon {
			// vertical-align: unset;
			margin-bottom: 2px;
			fill: currentColor;
		}

		.v-expansion-panel__header {
			border: 1px solid rgb(218, 218, 218);
			padding: 15px 30px;
		}

		.v-expansion-panel__container--active {
			.v-expansion-panel__header {
				border-bottom: none;
				border-left: none;
				border-right: none;
			}

			border: 1px solid rgb(218, 218, 218);
		}
	}

	.theme--light.v-expansion-panel .v-expansion-panel__container {
		border-top: none;
	}

	.titulo-card {
		line-height: 1.2;
		font-size: calc(13px + 0.15vw);
	}

	.linha-card {
		&:hover {
			&:after {
				width: 80%;
			}
		}

		&:after {
			content: '';
			width: 40px;
			border-top: 1px solid #e2e0e0;
			position: absolute;
			transition: width 0.3s;

			left: 40px;
			margin-bottom: 15px;
		}
	}

	.card-competencias {
		box-shadow: none;
		display: flex;

		// height: 100px;
	}
</style>
