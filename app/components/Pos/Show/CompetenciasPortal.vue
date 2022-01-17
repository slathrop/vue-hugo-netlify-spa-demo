<template>
  <div class="padding-padrao margin-padrao smt-20">
    <h1 class="ead titulo spb-8 smb-8 spl-0">
      <big>Ao final deste curso você será capaz de </big>
    </h1>

    <v-layout wrap>
      <v-flex xs12 md6 v-for="(chunk, c) in chunked" :key="c">
        <v-layout v-for="(comp, i) in chunk" :key="i">
          <v-flex class="competencias-texto">
            <clr-icon
              :size="25"
              shape="check"
              class="primary--text smt-2 smr-2 icone-competencias"
            ></clr-icon>
          </v-flex>
          <v-flex md11 class="spr-14">
            <p class="light">
              {{ comp }}
            </p>
          </v-flex>
        </v-layout>
      </v-flex></v-layout
    >
  </div>
</template>

<script>
import { chunk } from "lodash";

export default {
  props: {
    itens: Array,
  },

  computed: {
    chunked: ({ itens }) => chunk(itens, itens.length / 2),
  },

  methods: {
    chunk,
  },
};
</script>

<style lagn="scss">
.competencias-texto {
  display: flex;
  flex: 0;
}
</style>
