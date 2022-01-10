<template>
  <div
    class="black fill-width banner-quem-somos d-flex align-center spl-24"
    :style="computedStyle"
  >
    <div class="spl-20">
      <div
        class="
          white--text
          titulo-banner
          font-100
          mt-10
          sml-24
          spl-24
          txt-banner
        "
        style="text-shadow: 0 0 10px black"
      >
        <div class="font-200 txt1">{{ txt1 }}</div>
        <div class="font-800 txt2">{{ txt2 }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['img', 'txt1', 'txt2', 'height'],
  data() {
    return {
      estasubindo: false,
      oldScroll: 2,
    }
  },
  computed: {
    computedStyle() {
      let i = this.img ? this.img : '/pattern-hor.jpg'
      let img = `background: linear-gradient(#000000a8, #000000b8), url(${i}) center / cover`

      let h = this.height ? this.height : 'calc(50vh + 50px)'
      let height = `height: ${h}`

      let top = `top: 0`

      let style = `${img}; ${top}; ${height}`

      return style
    },
  },
  mounted() {
    addEventListener('scroll', () => {
      let estasubindo = this.oldScroll > scrollY
      this.estasubindo = estasubindo
      this.oldScroll = scrollY

      if (this.estasubindo) {
        document.querySelector('.txt1').classList.remove('estadescendo')
        document.querySelector('.txt2').classList.remove('estadescendo')
        document.querySelector('.txt1').classList.add('estasubindo')
        document.querySelector('.txt2').classList.add('estasubindo')
      } else {
        document.querySelector('.txt1').classList.remove('estasubindo')
        document.querySelector('.txt2').classList.remove('estasubindo')
        document.querySelector('.txt1').classList.add('estadescendo')
        document.querySelector('.txt2').classList.add('estadescendo')
      }
    })
  },
}
</script>

<style lang="scss">
.txt2 {
  animation: estasubindo 0.9s;
}
.txt1 {
  animation: estasubindo 0.7s;
}
.txt2.estasubindo {
  animation: estasubindo 0.9s;
}
.txt2.estadescendo {
  animation: estadescendo 0.7s;
  margin-left: 100vw;
}

.txt1.estasubindo {
  animation: estasubindo 0.7s;
}
.txt1.estadescendo {
  animation: estadescendo 0.9s;
  margin-left: 100vw;
}

@keyframes estasubindo {
  from {
    margin-left: -100vw;
  }
  to {
    margin-left: 0;
  }
}
@keyframes estadescendo {
  from {
    margin-left: 0;
  }
  to {
    margin-left: 100vw;
  }
}
</style>