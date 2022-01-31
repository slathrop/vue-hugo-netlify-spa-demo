<template>
  <v-app>
    <v-app-bar
      fixed
      :style="{ marginTop: onFooter ? '-64px' : '0', transition: 'all 0.2s' }"
      app
      class=""
      :class="isup ? 'transparent elevation-0' : 'black elevation-2'"
    >
      <v-flex xs12 md4 lg3 class="fill-height">
        <router-link to="/">
          <v-img
            @load="contentLoaded"
            contain
            class="fill-height flex-0 sml-22"
            style="width: 170px"
            :src="`/teatica-logo${isup ? '-n' : '-n'}.png`"
          ></v-img>
        </router-link>
        <v-spacer></v-spacer>
      </v-flex>
      <v-flex xs12 md8 lg9 class="fill-height">
        <div
          class="
            c-primary
            spr-24
            spl-10
            menu-btns
            d-flex
            justify-end
            fill-height
          "
        >
          <v-btn
            class="fill-height black--text transparent spx-5 no-radius mx-0"
            depressed
            x-large
            :class="pathname.includes(item.path) ? 'is-selected' : ''"
            :to="item.path"
            v-for="(item, i) in items"
            :key="i"
          >
            {{ item.name }}
          </v-btn>

          <v-btn
            class="hidden-md-and-up"
            icon
            @click.stop="rightDrawer = !rightDrawer"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-app-bar>
    <slot name="submenu"></slot>
    <v-main class="pa-0">
      <NuxtChild keep-alive :isup="isup" :onFooter="onFooter" />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-layout class="relative" style="z-index: 6; height: 10px">
			<v-flex xs12 md6 lg3 class="spl-24 grey darken-4"> &nbsp;</v-flex>
			<v-flex xs12 md8 lg9 class="c-primary"> &nbsp;</v-flex>
		</v-layout> -->
    <br />
    <br />
    <br />
    <v-footer
      class="black spy-15 align-start relative pa-0"
      style="
        min-height: calc(100vh - 10px - 80px - 32px);
        z-index: 6;
        margin-top: calc(-35px - 2vw);
      "
      v-view="changeOnFooter"
    >
      <v-flex xs12 md4 lg3 class="spl-24 fill-height spt-20 grey darken-4">
        <v-img
          contain
          class=""
          style="width: 170px; height: 50px"
          src="/teatica-logo-n.png"
        ></v-img>
        <br />
        <br />

        <a class="white--text no-underline" href="mailto:contato@teatica.com">
          <p>
            <v-icon small class="c-primary--text mr-2">fas fa-envelope</v-icon>
            contato@teatica.com
          </p>
        </a>
        <p class="white--text">
          &nbsp;<v-icon small class="c-primary--text mr-2"
            >fas fa-map-marker-alt</v-icon
          >
          Foz do Iguaçu / Paraná
        </p>
      </v-flex>
      <v-flex xs12 md8 lg9 class="black fill-height">
        <div
          class="c-primary sml-20 px-10 pt-4 pb-3"
          style="margin-top: calc(-35px - 2vw) !important"
        >
          <h1 class="mt-0 font-300">Cadastre-se na nossa newsletter</h1>

          <v-layout>
            <v-text-field solo class="smr-10" label="E-mail"></v-text-field>
            <v-btn height="46px">Enviar</v-btn>
          </v-layout>
        </div>
        <!-- <v-divider class="mx-10 mb-5 c-primary"></v-divider> -->
        <br />
        <br />

        <v-layout class="white--text">
          <v-flex class="spl-24">
            <a class="white--text no-underline" to="/quem-somos">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Quem Somos</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Aconteceu na Teática</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Blog Teática</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Contato</p>
            </a>
          </v-flex>
          <v-flex>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Faculdade Teática</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Graduação Presencial</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Graduação Digital</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Pós-Graduação Digital</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Curso de Extensão Digital</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Metodologia Educacional</p>
            </a>
          </v-flex>
          <v-flex>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Colégio Teática</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Portal de Cursos Digitais</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Escola de Saúde</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Centro Integrado de Saúde</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Hospital Veterinário</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Hub de Inovação</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Gestão Interina de IES</p>
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-footer>
    <v-layout class="black text-center grey--text text--darken-4">
      <v-flex xs12 md4 lg3 class="fill-height grey darken-4"></v-flex>
      <v-flex>
        <v-divider class="grey darken-4 smx-20"></v-divider>
        <p class="mt-2 mb-1">31 Solutions @ 2021</p>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      isup: true,
      pathname: '',
      items: [
        {
          name: 'HOME',
          path: '/home',
        },
        {
          name: 'FACULDADE TEÁTICA',
          path: '/faculdade-teatica',
        },
        {
          name: 'QUEM SOMOS',
          path: '/quem-somos',
        },
        {
          name: 'ACONTECE NA TEÁTICA',
          path: '/acontece-na-teatica',
        },
        {
          name: 'BLOG TEÁTICA',
          path: '/blog-teatica',
        },
        {
          name: 'CONTATO',
          path: '/#contato',
        },
      ],

      right: true,
      rightDrawer: false,
      onFooter: false,
    }
  },
  methods: {
    contentLoaded() {
      $nuxt.$emit('content-loaded')
    },
    changeOnFooter(e) {
      if (e.percentInView >= 0.8) {
        this.onFooter = true
      } else {
        this.onFooter = false
      }
    },
  },

  watch: {
    $route(to, from) {
      this.pathname = to.fullPath
    },
  },
  mounted() {
    this.pathname = location.pathname

    let txtbanner = document.querySelector('.txt-banner')
    if (txtbanner) {
      txtbanner.style.display = 'none'
    }

    addEventListener('scroll', () => {
      if (scrollY > 200) {
        this.isup = false
      } else {
        this.isup = true
      }
    })
    if (scrollY > 200) {
      this.isup = false
    } else {
      this.isup = true
    }

    if (txtbanner) {
      this.$nuxt.$on('content-loaded', () => {
        document.querySelector('.txt-banner').style.display = 'block'
      })
    }
  },
}
</script>

<style lang="scss">
.v-main {
  top: 0;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0;
}
.menu-btns {
  .v-btn {
    overflow: visible !important;
    height: 64px !important;
    font-size: 15px;
    &::before {
      opacity: 0 !important;
    }

    &:hover::after,
    &.is-selected::after {
      height: 4px;
      width: 100% !important;
      content: '';
      position: absolute;
      transition: all 0.3s, background 0.2s;
      background: transparent !important;
      bottom: 0px;
      width: 7px !important;
      border-left: 7px solid transparent !important;
      border-right: 7px solid transparent !important;
      border-bottom: 7px solid black !important;
    }
  }
}
</style>
