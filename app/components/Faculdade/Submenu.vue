<template>
  <v-layout
    class="fill-width fixed"
    :class="isup ? 'elevation-0' : 'elevation-0'"
    style="z-index: 6; top: 64px"
    :style="{
      marginTop: onFooter ? '-100px' : '0',
      transition: 'all 0.2s',
    }"
  >
    <v-flex xs12 md4 lg3 :class="passoudobanner ? 'white' : 'transparent'">
    </v-flex>
    <v-flex
      xs12
      md8
      lg9
      class="text-right spr-24 submenu"
      :class="passoudobanner ? 'white' : 'transparent'"
    >
      <v-btn
        depressed
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
        class="fill-height transparent spx-5 no-radius mx-0"
        :class="{
          'is-active': item.path === pathname,
          'white--text': !passoudobanner,
          'black--text': passoudobanner,
        }"
        >{{ item.name }}</v-btn
      >
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['onFooter', 'isup', 'banner'],
  data() {
    return {
      passoudobanner: false,
      pathname: '',
      items: [
        { name: 'Faculdade Teática', path: '/faculdade-teatica' },
        {
          name: 'Graduação Presencial',
          path: '/faculdade-teatica/graduacao-presencial',
        },
        {
          name: 'Graduação Digital',
          path: '/faculdade-teatica/graduacao-digital',
        },
        { name: 'Pós-Graduação', path: '/faculdade-teatica/pos-graduacao' },
        {
          name: 'Extensão Digital',
          path: '/faculdade-teatica/extensao-digital',
        },
        { name: 'Metodologia', path: '#metodologia' },
      ],
    }
  },

  $route(to, from) {
    this.pathname = to.fullPath
  },
  mounted() {
    this.pathname = location.pathname
    this.$nextTick(() => {
      // let item = this.items.find((i) => i.name === 'Metodologia')
      // let path =
      //   location.pathname === '/faculdade-teatica'
      //     ? '#metodologia'
      //     : '/faculdade-teatica#metodologia'
      // item.path = path
      setTimeout(() => {
        let bh = this.banner.$el.offsetHeight - 76
        this.passoudobanner = bh < scrollY
        addEventListener('scroll', () => {
          this.passoudobanner = bh < scrollY
        })
      }, 1000)
    })
  },
}
</script>

<style style="scss">
.theme--light.v-btn--active::before {
  opacity: 0 !important;
}
.v-btn.is-active::before {
  opacity: 0.2 !important;
}
</style>