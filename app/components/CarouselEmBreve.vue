<template>
  <div>
    <h1 class="font-500 smt-20 main-title">{{ titulo }}</h1>

    <v-layout
      class="flex-wrap align-center"
      style="
        margin-left: calc(-8px - 0.4vw) !important;
        margin-right: calc(-8px - 0.4vw) !important;
      "
    >
      <v-flex xs12 md4 class="spx-4" v-for="i in 3" :key="i">
        <v-card>
          <!-- <div class="c-primary" style="height: 5px"></div> -->
          <v-img
            aspect-ratio="2"
            class="
              c-info-lighten-1
              d-flex
              align-center
              justify-center
              text-center
              c-info-darken-2--text
            "
          >
            em breve</v-img
          >
          <!-- <h2 class="pt-1 c-secondary--text spl-3">Em breve</h2>
          <v-layout class="c-secondary--text pt-2">
            <v-flex class="spl-3"><i class="fas fa-calendar"></i>&nbsp;</v-flex>
            <v-flex><i class="fas fa-clock"></i>&nbsp;</v-flex>
          </v-layout> -->
          <div class="c-primary" style="height: 5px"></div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['titulo'],
}
</script>

<style>
</style>