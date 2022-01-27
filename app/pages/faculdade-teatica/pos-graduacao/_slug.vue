<template>
  <div class="white">
    <div slot="submenu" class="fill-with">
      <FaculdadeSubmenu
        :isup="isup"
        :onFooter="onFooter"
        :banner="banner"
      ></FaculdadeSubmenu>
    </div>
    <PosShowTopo :curso="curso" ref="banner"></PosShowTopo>
    <div class="white relative spx-xl-24" style="z-index: 1">
      <PosShowSobre :curso="curso"></PosShowSobre>
    </div>
    <div class="white relative" style="z-index: 1">
      <PosShowFormSaibaMais :curso="curso"></PosShowFormSaibaMais>
      <div class="spx-24">
        <PosShowComponenteCurricular
          v-if="curso.matriz && curso.matriz.length"
          :curso="curso"
        ></PosShowComponenteCurricular>
        <PosCarousel></PosCarousel>
      </div>
      <PosFluxograma
        style="margin-bottom: calc(-48px - 2.4vw); z-index: 3"
      ></PosFluxograma>

      <FaculdadeMetodologia></FaculdadeMetodologia>
    </div>
    <!-- 
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
    </v-layout> -->
  </div>
</template>
<script>
import pos from '../../../pos.js'

export default {
  data() {
    return {
      curso: {},
      banner: {},
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
  computed: {
    isup() {
      return this.$attrs.isup
    },
    onFooter() {
      return this.$attrs.onFooter
    },
  },
  mounted() {
    let path = location.pathname.split('/')[3]

    setTimeout(() => {
      this.banner = this.$refs.banner
      this.setPos(path)
    }, 500)
  },
}
</script>
<style lang='scss'>
</style>