<template>
  <div class="white">
    <PosShowTopo
      :titulo="curso.name"
      :duracao="curso.duracao"
      :inscricao="curso.inscricao_aberta ? curso.inscricao : ''"
      :curso-name="curso.name"
      :id="curso.id"
      :inscricaoaberta="true"
    ></PosShowTopo>

    <PosShowSobre
      descricao="curso.descricao"
      video="curso.video"
    ></PosShowSobre>
    <PosShowCompetencias
      v-if="curso.competencias"
      :itens="curso.competencias"
    ></PosShowCompetencias>

    <form-saiba-mais :curso="curso"></form-saiba-mais>
    <PosShowComponenteCurricular
      v-if="curso.matriz && curso.matriz.length"
      carga-horaria="curso.carga_horaria"
      :componentes="curso.matriz"
    ></PosShowComponenteCurricular>
    <fluxograma-portal
      v-if="curso.matriz && curso.fluxogramas.length"
      titulo="COMO FUNCIONA SUA PÓS-GRADUAÇÃO"
      :itens="curso.fluxogramas"
    ></fluxograma-portal>
    <informacoes
      modalidade="curso.modalidade"
      :data-inicio="curso.data_inicio"
      carga-horaria="curso.carga_horaria"
      :duracao="curso.duracao"
      observacao="curso.observacao"
    ></informacoes>
    <h1 class="titulo ead spt-12 spl-0 text-xs-center smy-10">
      <big>INVESTIMENTO</big>
    </h1>
    <v-layout justify-center smb-15>
      <v-flex xs10 sm8 md5 lg4 xl3>
        <investimento
          titulo="Pós-Graduação"
          :carga-horaria="curso.carga_horaria"
          :duracao="curso.duracao"
          :itens="curso.investimento"
        ></investimento>
      </v-flex>
    </v-layout>
    <inscricao-dialog esconde curso="curso.name"></inscricao-dialog>
    <v-layout align-center justify-center class="spb-12 white">
      <inscricao curso="curso.name"></inscricao>
    </v-layout>
    <diferenciais
      v-if="curso.diferenciais && curso.diferenciais.length"
      class=""
      :diferenciais="curso.diferenciais"
    ></diferenciais>
    <equipe :professores="curso.staff"></equipe>
    <v-layout class="justify-center spb-15">
      <botao-inscricao
        :inscricaoaberta="curso.inscricao_aberta"
        href="curso.inscricao_aberta ? curso.inscricao : ''"
      ></botao-inscricao>
    </v-layout>
  </div>
</template>
<script>
import pos from '../../../pos.js'

export default {
  data() {
    return {
      curso: {},
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.setPos(to.params.slug)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.setPos(to.params.slug)
    next()
  },
  methods: {
    setPos(to) {
      this.curso = pos.find((c) => c.slug === to)
        ? pos.find((c) => c.slug === to)
        : open('/404', '_self')
    },
  },
  mounted() {
    let path = location.pathname.split('/')[2]
    console.log(path)
    // this.setPos(location.pathname.split['/'][2])
  },
}
</script>
<style lang='scss'>
</style>