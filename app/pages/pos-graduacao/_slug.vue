<template>
	<div class="white">
		<topo
			titulo="pos.name"
			duracao="pos.duracao"
			inscricao="pos.inscricao_aberta ? pos.inscricao : ''"
			curso-name="pos.name"
			id="pos.id"
			inscricaoaberta="pos.inscricao_aberta"
		></topo>

		<PosShowSobre descricao="pos.descricao" video="pos.video"></PosShowSobre>
		<PosShowCompetencias :itens="pos.competencias"></PosShowCompetencias>

		<form-saiba-mais :curso="$pos"></form-saiba-mais>
		<PosShowComponenteCurricular
			v-if="pos.matriz && pos.matriz.length"
			carga-horaria="pos.carga_horaria"
			:componentes="pos.matriz"
		></PosShowComponenteCurricular>
		<fluxograma-portal
			v-if="pos.matriz && pos.fluxogramas.length"
			titulo="COMO FUNCIONA SUA PÓS-GRADUAÇÃO"
			:itens="pos.fluxogramas"
		></fluxograma-portal>
		<informacoes
			modalidade="pos.modalidade"
			:data-inicio="pos.data_inicio"
			carga-horaria="pos.carga_horaria"
			:duracao="pos.duracao"
			observacao="pos.observacao"
		></informacoes>
		<h1 class="titulo ead spt-12 spl-0 text-xs-center smy-10">
			<big>INVESTIMENTO</big>
		</h1>
		<v-layout justify-center smb-15>
			<v-flex xs10 sm8 md5 lg4 xl3>
				<investimento
					titulo="Pós-Graduação"
					:carga-horaria="pos.carga_horaria"
					:duracao="pos.duracao"
					:itens="pos.investimento"
				></investimento>
			</v-flex>
		</v-layout>
		<inscricao-dialog esconde curso="pos.name"></inscricao-dialog>
		<v-layout align-center justify-center class="spb-12 white">
			<inscricao curso="pos.name"></inscricao>
		</v-layout>
		<diferenciais
			v-if="pos.diferenciais && pos.diferenciais.length"
			class=""
			:diferenciais="pos.diferenciais"
		></diferenciais>
		<equipe :professores="pos.staff"></equipe>
		<v-layout class="justify-center spb-15">
			<botao-inscricao
				:inscricaoaberta="pos.inscricao_aberta"
				href="pos.inscricao_aberta ? pos.inscricao : ''"
			></botao-inscricao>
		</v-layout>
	</div>
</template>
<script>
	export default {}
</script>
<style lang='scss'>
</style>