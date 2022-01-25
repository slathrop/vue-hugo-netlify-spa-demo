<template>
	<div class="ead-padding smt-5 spb-10" id="metodologia">
		<h1 class="titulo ead font-500 text-xs-center smy-15">
			<big>Metodologia Educacional</big>
		</h1>
		<v-layout wrap class="">
			<v-flex
				xs12
				md6
				v-for="({ title, desc, icon }, i) in diferenciais"
				:key="i"
				class="spr-15 spy-4"
			>
				<v-layout>
					<div
						class="
							borda-diferenciais-icone
							mr-2
							d-flex
							justify-center
							align-center
						"
					>
						<i :class="`fas fa-${icon} c-primary--text`"></i>
					</div>
					<div>
						<p class="smb-1 font-600">
							<big>{{ title }}</big>
						</p>
						<p class="smb-0 c-info-darken-3--text">
							{{ desc }}
						</p>
					</div>
				</v-layout>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				diferenciais: [
					{
						icon: 'plus',
						title: 'Máxima aplicabilidade',
						desc: 'A cada trilha o aluno aplica seu projeto à sua realidade profissional.',
					},
					{
						icon: 'user',
						title: 'Momentos ao vivo de interação',
						desc: 'Momentos de orientação ao vivo com docentes especializados.',
					},
					{
						icon: 'user',
						title: 'Master Class com especialistas',
						desc: 'Master Class ao vivo com pessoas que são autoridades em inovação em educação',
					},
					{
						icon: 'user',
						title: 'Preceptoria',
						desc: 'Acompanhamento e feedback  personalizado com docentes experientes.',
					},
					{
						icon: 'user',
						title: 'Assessoramento individual',
						desc: 'Assessoria de tutor para organização e suporte técnico nos processos do curso.',
					},
					{
						icon: 'user',
						title: 'Nano degree (Certificados Parciais)',
						desc: 'Certificados de competências ao longo do curso, enriquecendo seu currículo antes mesmo de concluir  todo o MBA.',
					},
					{
						icon: 'user',
						title: 'Aprendizagem personalizada',
						desc: 'Todos os projetos aplicados durante o curso consideram as necessidades do contexto profissional do aluno.',
					},
				],
			}
		},
	}
</script>

<style lang="scss">
	@import '@/../scss/_color_set';

	.borda-diferenciais-icone {
		width: 30px;
		min-width: 30px !important;
		height: 30px;
		background: rgb(0, 0, 0);
	}
</style>
