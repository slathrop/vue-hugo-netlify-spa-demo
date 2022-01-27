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
      txt1="PÓS"
      txt2="GRADUAÇÃO"
      img="/graduacao-digital.jpg"
      height="calc(60vh + 50px)"
      ref="banner"
    ></Banner>
    <div class="spx-24">
      <PosCarousel></PosCarousel>
    </div>
    <PosFluxograma style="margin-bottom: calc(-48px - 2.4vw)"></PosFluxograma>
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

<style>
</style>