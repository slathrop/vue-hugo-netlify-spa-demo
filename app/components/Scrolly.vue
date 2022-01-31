<template>
  <a :href="anchor" style="padding: 20px">
    <div class="topo-ead-v" :style="{ color: cor }"></div>
  </a>
</template>

<script>
export default {
  name: 'Scrolly',
  props: {
    anchor: String,
    cor: String,
  },
}
</script>

<style scoped lang="scss">
.topo-ead-v {
  height: 30px;
  width: 1px;
  position: relative;
  background: transparent;
  border-left: 1px solid currentColor;

  &:after {
    content: '';
    width: 15px;
    height: 25px;
    border-radius: 50px;
    border-color: currentColor;
    border-width: 1px;
    border-style: solid;
    position: absolute;
    bottom: -10px;
    left: -8px;
  }
}

// .topo-ead-v.dark-bg {
//   border-left: 1px solid #80d6f6;

//   &::after {
//     border-color: #80d6f6;
//   }
// }
</style>
