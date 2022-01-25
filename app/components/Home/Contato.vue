<template>
  <v-layout
    class="grey lighten-3 relative align-center align-center spb-14"
    style="margin-top: -50px; z-index: 1; padding-top: 90px; min-height: 100vh"
    id="contato"
  >
    <v-flex xs12 md4 lg3 offset-lg1 class="spx-10 titulo c-secondary--text">
      <div
        data-aos="flip-right"
        data-aos-delay="300"
        class="spx-12 spt-15 spb-10 radius align-center d-flex justify-center"
        style="background: linear-gradient(143deg, #ffdf42 50%, #efc912 50%)"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="comment-alt-lines"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#000000"
            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288zm-96-216H144c-8.8 0-16 7.2-16"
          ></path>
          <path
            fill="#80701c"
            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 16 16v288zm-96-216H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-96 96H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"
          ></path>
        </svg>
      </div>
    </v-flex>
    <v-flex xs12 md8 lg7 class="spx-24">
      <h1 class="titulo">ENTRE EM CONTATO</h1>

      <v-form>
        <v-text-field color="c-secondary" label="Nome"></v-text-field>
        <v-text-field color="c-secondary" label="E-mail"></v-text-field>
        <v-text-field color="c-secondary" label="Telefone"></v-text-field>
        <v-textarea color="c-secondary" label="Mensagem"></v-textarea>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn color="c-primary">
            <v-icon
              style="font-size: 15px"
              class="fas fa-paper-plane mr-2"
            ></v-icon>
            <b>Enviar</b></v-btn
          >
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>

<style>
</style>