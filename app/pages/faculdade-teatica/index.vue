<template>
  <div class="white">
    <div slot="submenu" class="fill-with">
      <FaculdadeSubmenu
        :isup="isup"
        :onFooter="onFooter"
        :banner="banner"
      ></FaculdadeSubmenu>
    </div>
    <Banner
      txt1="FACULDADE"
      txt2="TEÁTICA"
      img="/faculdade.jpg"
      height="calc(60vh + 50px)"
      ref="banner"
    ></Banner>
    <div class="spx-24">
      <PosCarousel></PosCarousel>
      <FaculdadeCarouselPresencial></FaculdadeCarouselPresencial>
      <CarouselEmBreve titulo="Graduação Digital"></CarouselEmBreve>
    </div>

    <v-layout class="spx-24">
      <v-flex xs12 md6 class="spr-10">
        <h1 class="font-500 smt-20 main-title">Acontece na Teática</h1>

        <v-layout style="margin: 0 calc(-8px - 0.4vw) !important">
          <v-flex xs12 md6 class="spx-4" v-for="i in 2" :key="i">
            <BlogCard></BlogCard>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6 class="spl-10">
        <h1 class="font-500 smt-20 main-title">Blog Teática</h1>

        <v-layout style="margin: 0 calc(-8px - 0.4vw) !important">
          <v-flex xs12 md6 class="spx-4" v-for="i in 2" :key="i">
            <BlogCard></BlogCard>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <FaculdadeMetodologia></FaculdadeMetodologia>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: {},
    }
  },
  computed: {
    isup() {
      return this.$attrs.isup
    },
    onFooter() {
      return this.$attrs.onFooter
    },
  },
  mounted() {
    setTimeout(() => {
      this.banner = this.$refs.banner
    }, 500)
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

