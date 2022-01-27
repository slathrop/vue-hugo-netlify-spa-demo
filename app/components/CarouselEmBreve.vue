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
      <v-flex xs12 md4 lg3 class="spx-4" v-for="i in 4" :key="i">
        <v-card>
          <v-img
            lazy-src="/placeholder-2.jpg"
            aspect-ratio="1.5"
            class="
              c-info-lighten-2
              d-flex
              align-center
              justify-center
              text-center
              c-info-darken-2--text
            "
          >
            <span class="spx-5" style="border: 1px solid #ffde17"
              >em breve</span
            ></v-img
          >
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