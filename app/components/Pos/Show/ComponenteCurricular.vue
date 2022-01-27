<template>
  <div class="padding-padrao spy-15">
    <h1 class="font-500 smt-20 main-title">Componentes Curriculares</h1>

    <p class="secondary--text light mt-3" v-if="curso.carga_horaria">
      {{ curso.carga_horaria }} horas/aulas
    </p>

    <v-layout class="justify-space-between">
      <v-flex xs12 md6 class="spr-8">
        <v-expansion-panels v-model="panel" class="smt-4 expansion-panel-ead">
          <v-expansion-panel
            class="smb-3"
            v-for="(matrizes, index) in curso.matriz.slice(
              0,
              Math.ceil(curso.matriz.length / 2)
            )"
            :key="index"
          >
            <v-expansion-panel-header>
              <div>
                <h2 class="semilight secondary--text mb-0">
                  <i class="fas fa-caret-right c-primary--text mr-2"></i>
                  {{ matrizes.titulo }}
                </h2>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-if="matrizes.itens && matrizes.itens.length"
            >
              <div v-for="(matriz, j) in matrizes.itens" :key="j">
                <v-card flat class="spl-12">
                  <p class="regular titulo-card secondary--text spr-6">
                    <span class="primary--text">
                      <i
                        class="fas fa-arrow-right c-primary--text mr-2 mt-1"
                      ></i>
                    </span>
                    <big>{{ matriz }}</big>
                  </p>
                </v-card>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
      <v-flex xs12 md6>
        <v-expansion-panels v-model="panel2" class="smt-4 expansion-panel-ead">
          <v-expansion-panel
            class="smb-3"
            v-for="(matrizes, index) in curso.matriz.slice(
              Math.ceil(curso.matriz.length / 2),
              curso.matriz.length
            )"
            :key="index"
          >
            <v-expansion-panel-header>
              <div>
                <h2 class="semilight secondary--text mb-0">
                  <i class="fas fa-caret-right c-primary--text mr-2"></i>
                  {{ matrizes.titulo }}
                </h2>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-if="matrizes.itens && matrizes.itens.length"
            >
              <div v-for="(matriz, j) in matrizes.itens" :key="j">
                <v-card flat class="spl-12">
                  <p class="regular titulo-card secondary--text spr-6">
                    <span class="primary--text">
                      <i
                        class="fas fa-arrow-right c-primary--text mr-2 mt-1"
                      ></i>
                    </span>
                    <big>{{ matriz }}</big>
                  </p>
                </v-card>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    curso: Object,
  },

  data() {
    return {
      panel: null,
      panel2: null,
    }
  },
}
</script>

<style lang="scss">
</style>
