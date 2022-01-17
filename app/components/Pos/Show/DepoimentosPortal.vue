<template>
  <div class="padding-padrao margin-padrao">
    <h1 class="titulo ead spt-12 spl-0"><big>VEJA O QUE ESTÃO FALANDO</big></h1>

    <v-layout wrap>
      <v-flex class="spr-15" v-for="i in 6" :key="i" md6>
        <p class="light depoimentos spt-6 smb-0">
          <i
            >"Amet dolore ullamco deserunt tempor qui. Voluptate duis quis amet
            enim esse tempor dolore Lorem amet deserunt. Culpa nulla nisi
            occaecat nisi dolore enim incididunt aliquip proident laboris
            aliquip velit. Non irure cillum ex consectetur commodo aliqua
            excepteur. Qui id id tempor duis anim aliqua."</i
          >
        </p>
        <p class="light spb-4">Mahatma Gandhi</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.depoimentos {
  line-height: 1.2;
}
</style>