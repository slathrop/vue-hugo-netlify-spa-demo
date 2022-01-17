<template>
  <div class="padding-padrao margin-padrao smt-20 smb-10">
    <h1 class="titulo ead spl-0">
      <big>COMPONENTES CURRICULARES</big>
    </h1>
    <p class="secondary--text light">{{ cargaHoraria }} horas/aulas</p>

    <div>
      <v-expansion-panel v-model="panel" class="smt-8 expansion-panel-ead">
        <v-expansion-panel-content
          class="smb-6"
          v-for="(matriz, index) in componentes"
          :key="index"
        >
          <template v-slot:header>
            <div class="pl-1r">
              <p class="titulo regular secondary--text smb-0">
                {{ matriz.titulo }}
              </p>
            </div>
          </template>
          <template v-slot:actions>
            <clr-icon
              :shape="index === panel ? 'minus-circle' : 'plus-circle'"
              size="30"
              class="grey--text"
            ></clr-icon>
          </template>
          <v-layout wrap class="spb-8">
            <v-flex
              md4
              class="spr-8"
              v-for="(itens, j) in matriz.itens"
              :key="j"
            >
              <v-card class="spl-12 card-competencias">
                <div class="linha-card-portal smb-8">
                  <p class="light titulo-card">{{ itens.descricao }}</p>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </div>
</template>

<script>
export default {
  props: ["componentes", "cargaHoraria"],
  data() {
    return {
      panel: null,
    };
  },
};
</script>

<style lang="less">
.expansion-panel-ead {
  box-shadow: none !important;
  .v-expansion-panel__header {
    border: 1px solid grey;
    padding: 15px 30px;
  }
  .v-expansion-panel__container--active {
    .v-expansion-panel__header {
      border-bottom: none;
      border-left: none;
      border-right: none;
    }
    border: 1px solid grey;
  }
}
.v-card--reveal {
  align-items: center;
  background-color: rgb(131, 131, 131) !important;
  top: 0;
  justify-content: center;
  position: absolute;
  width: 90%;
  height: 80%;
}
.titulo-card {
  line-height: 1.2;
}
.linha-card-portal {
  &:after {
    content: "";
    width: 40px;
    border-style: solid;
    border-width: 1px;
    color: rgb(218, 218, 218);
    position: absolute;
    transition: width 0.5s;
    left: 40px;
    margin-bottom: 15px;
  }
}
.card-competencias {
  box-shadow: none;
  display: flex;
  height: 100px;
}
.card-competencias:hover {
  .linha-card-portal {
    &:after {
      width: 80%;
    }
  }
}
</style>
