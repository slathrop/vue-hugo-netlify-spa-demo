<template>
  <div class="white spt-20 spx-24 margin-padrao" id="sobre">
    <h1 class="font-500 smt-20 main-title">Sobre o Curso</h1>
    <v-layout class="spb-24 alig-center">
      <v-flex xs12 md7>
        <p v-html="curso.descricao" class="smb-0"></p>
      </v-flex>
      <v-flex xs12 md3 offset-md2 offset-lg1 lg4>
        <!-- <v-divider class="smy-6 grey"></v-divider> -->
        <v-card class="spx-0">
          <div class="c-primary" style="height: 5px"></div>

          <div
            class="c-primary spx-3 ml-4 d-flex align-center justify-center"
            style="z-index: 2; position: absolute; top: 0; width: 100px"
          >
            <div>
              <p class="black--text mb-0 pt-3 text-center font-600">
                <i class="far fa-calendar mr-1"></i> INÍCIO
              </p>
              <p class="black--text mb-0 line-height-1 text-center">
                <big
                  class="font-900 line-height-1"
                  style="font-size: 55px"
                  v-if="curso.data_inicio"
                  >{{ curso.data_inicio }}</big
                >
              </p>
              <p class="black--text mb-1 text-center text-uppercase">
                <big
                  class="font-400 line-height-1"
                  v-if="curso.mes_inicio"
                  style="font-size: 28px"
                >
                  {{ curso.mes_inicio.slice(0, 3) }}
                </big>
                <big class="font-900 line-height-1" v-else>a definir</big>
                <br />
                <big
                  class="font-400 line-height-1"
                  style="font-size: 28px"
                  v-if="curso.ano_inicio"
                  >{{ curso.ano_inicio }}</big
                >
              </p>
            </div>
          </div>
          <div style="margin-left: 180px" class="py-8">
            <p
              class="text-uppercase text-xs-center subtitulo2"
              v-show="curso.duracao"
            >
              <i class="far fa-clock mr-1"></i>
              duração: <b>{{ curso.duracao }} meses</b>
            </p>
            <div
              v-for="(inv, i) in curso.investimento"
              :key="i"
              v-show="curso.investimento && curso.investimento.length"
            >
              <p class="text-uppercase text-xs-center smb-0 subtitulo2">
                <i class="fas fa-tag mr-1"></i>
                Preço: <b>{{ inv.label }}</b>
              </p>
              <h2
                class="
                  text-uppercase text-xs-center
                  titulo
                  ml-4
                  line-height-1
                  font-400
                  d-flex
                  align-center
                "
              >
                &nbsp;R$

                <big style="font-size: 180%" class="font-900 line-height-1">{{
                  inv.valor
                }}</big
                >,{{ inv.centavos.toString().padStart(2, '0') }}
              </h2>
            </div>
          </div>
          <!-- <v-divider class="smy-5"></v-divider> -->
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['curso'],
}
</script>

<style lang="scss">
</style>
