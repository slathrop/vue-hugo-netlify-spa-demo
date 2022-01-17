<template>
  <div>
    <v-layout wrap align-center justify-center fill-height class="banner">
      <div id="scene3">
        <div class="topo-ead-fundo" data-depth="0.05">
          <div
            class="topo-ead"
            :style="{
              backgroundImage: `linear-gradient(transparent 40%, white),
            url(${imagine('/imgs/ead/bg1.png')})`,
            }"
          ></div>
        </div>
      </div>

      <div class="spt-24 smt-12 text-xs-center">
        <p
          class="
            titulo-banner
            spx-xs-12
            bold
            uppercase
            text-xs-center
            secondary--text
            text--darken-1
          "
        >
          <big>{{ titulo }}</big>
        </p>
        <p class="text-xs-center" v-if="id === 31">EM PARCERIA COM A</p>
        <a
          href="https://www.dratiellemachado.com.br/"
          target="_blank"
          v-if="id === 31"
        >
          <v-img
            src="/imgs/ead/autflix-logo.png"
            class="mx-auto autflix"
          ></v-img>
        </a>
        <v-divider class="smy-6 divider-ead"></v-divider>
        <p class="titulo uppercase text-xs-center" v-show="duracao">
          Duração: {{ duracao }} meses
        </p>

        <v-layout class="justify-center">
          <botao-inscricao
            :href="inscricao"
            :inscricaoaberta="inscricaoaberta"
          ></botao-inscricao>
        </v-layout>

        <v-layout justify-center class="spt-16">
          <scrolly anchor="#sobre" id="sobre"></scrolly>
        </v-layout>
      </div>
    </v-layout>
  </div>
</template>

<script>
import Botao from "../inscricao/Botao";

export default {
  props: [
    "titulo",
    "tipo",
    "duracao",
    "inscricao",
    "id",
    "cursoName",
    "inscricaoaberta",
  ],

  components: {
    botaoInscricao: Botao,
    scrolly: require("../global/Scrolly.vue").default,
  },
  mounted() {
    setTimeout(() => {
      var scene3 = document.getElementById("scene3");
      new Parallax(scene3);
    }, 1000);
  },
};
</script>

<style lang="scss">
@import "@/../scss/colors";

.banner {
  align-items: center;
  position: relative;
  height: 100vh;
  min-height: 300px;
  background: radial-gradient(#d3d4d8cc 30%, lighten($primary, 30%));
  background-size: cover;
  background-position: center;
  z-index: 1;
}
.autflix {
  width: 200px;
  filter: saturate(0);
  transition: filter 0.3s;

  &:hover {
    filter: saturate(1);
  }
}
.topo-ead {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}
.topo-ead-fundo {
  width: 100%;
  height: 100%;
}
.botao-ead-topo {
  border: 1px solid $secondary;
  display: flex;
  margin: 0 auto;
  box-shadow: none !important;
  height: 37px;
  padding: 20px 40px;
}

.topo-ead-v {
  margin-top: 19px;
}

.divider-ead {
  width: 65px;
  margin: 0 auto;
  display: flex;
}

#scene3 {
  position: absolute;
  top: -5%;
  left: -10%;
  width: 120%;
  height: 115%;
}
</style>
