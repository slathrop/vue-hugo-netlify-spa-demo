<template>
  <div>
    <div slot="submenu" class="fill-with">
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
            :href="item.path"
            class="fill-height transparent spx-5 no-radius mx-0"
            :class="passoudobanner ? 'black--text' : 'white--text'"
            >{{ item.name }}</v-btn
          >
        </v-flex>
      </v-layout>
    </div>
    <Banner
      txt1="FACULDADE"
      txt2="TEATICA"
      img="/faculdade.jpg"
      height="calc(60vh + 50px)"
      ref="banner"
    ></Banner>
    <div class="spx-24 pt-6">
      <h1 class="font-300">Pós-Graduação</h1>
      <v-layout v-for="(p, i) in pos" :key="i">
        <v-flex xs12 md4 lg3>
          <v-img :src="p.img"></v-img>
          {{ p.name }}
        </v-flex>
      </v-layout>

      <h1 class="font-300">Graduação Presencial</h1>
      <p>Em breve</p>
      <h1 class="font-300">Graduação Digital</h1>
      <p>Em breve</p>
    </div>

    <h1 class="font-300">Metodologia</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passoudobanner: false,
      items: [
        { name: 'Graduação Presencial', path: '/graduacao-presencial' },
        { name: 'Graduação Digital', path: '/graduacao-digital' },
        { name: 'Pós-Graduação', path: '/pos-graduacao' },
        { name: 'Extensão Digital', path: '/extensao-digital' },
        { name: 'Metodologia', path: '/metodologia' },
      ],
    }
  },
  computed: {
    isup() {
      return this.$attrs.isup
    },
    onFooter() {
      return this.$attrs.onFooter
    },
    banner() {
      return this.$refs.banner
    },
  },
  mounted() {
    let bh = this.banner.$el.offsetHeight - 76
    this.passoudobanner = bh < scrollY
    addEventListener('scroll', () => {
      this.passoudobanner = bh < scrollY
    })
  },
}
</script>

<style lang="scss">
.submenu {
  .v-btn {
    font-size: 13px;
  }
}
</style>

