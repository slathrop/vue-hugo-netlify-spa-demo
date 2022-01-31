<template>
  <v-layout
    style="
      margin-top: -50px;
      margin-bottom: -50px;
      padding-top: 50px !important;
    "
    class="spx-20 flex-wrap justify-space-evenly white fill-height align-center"
  >
    <v-flex
      xs12
      md6
      lg3
      v-for="({ nome, img, url }, i) in produtos"
      :key="i"
      data-aos="fade-right"
      :data-aos-delay="i * 50"
      class="smy-10"
    >
      <router-link :to="url" class="no-underline black--text produtos-items">
        <v-img
          style="max-width: 100px"
          class="mx-auto produtos-items-img"
          contain
          :src="img"
        ></v-img>
        <h1 class="subtitulo2 font-900 text-center text-uppercase">
          {{ nome }}
        </h1>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        {
          nome: 'Faculdade Teática',
          img: '/produtos/t-04.png',
          url: '/faculdade-teatica',
        },
        {
          nome: 'Colégio Teática',
          img: '/produtos/t-03.png',
          url: '/colegio-teatica',
        },
        {
          nome: 'Portal de Cursos Digitais',
          img: '/produtos/t-02.png',
          url: '/portal-de-cursos-digitais',
        },
        {
          nome: 'Escola de Saúde',
          img: '/produtos/t-06.png',
          url: '/escola-de-saude',
        },
        {
          nome: 'Hospital Veterinário',
          img: '/produtos/t-07.png',
          url: '/hospital-veterinario',
        },
        {
          nome: 'Centro Integrado de Saúde',
          img: 'produtos/t-05.png',
          url: '/centro-integrado-de-saude',
        },
        {
          nome: 'Hub de Inovação',
          img: '/produtos/t-08.png',
          url: '/hub-de-inovacao',
        },
        {
          nome: 'Gestão Interina de IES',
          img: '/produtos/t-01.png',
          url: '/gestao-interina-de-ies',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.produtos-items-img {
  filter: brightness(0.5);
}
.produtos-items {
  .v-image {
    transition: all 0.3s;
  }
  &:hover {
    .v-image {
      transform: scale(1.08);
    }
  }
}
</style>