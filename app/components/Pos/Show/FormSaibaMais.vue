<template>
  <div>
    <v-layout
      class="
        wrap
        grey
        lighten-4
        full-width
        align-center
        justify-center
        mt-5
        mb-4
      "
    >
      <v-flex
        xs8
        md3
        class="d-flex align-center justify-center spt-xs-15 spb-xs-5"
      >
        <div class="text-xs-center">
          <h2 class="secondary--text mb-5 light titulo">
            <big>
              <big>
                FICOU INTERESSADO <br />
                OU TEM DÚVIDAS <br />
                SOBRE ESSE CURSO?
              </big>
            </big>
          </h2>
          <v-btn @click="dialog = true" class="primary mx-auto">
            <v-icon class="mr-2">fab fa-whatsapp</v-icon>
            ENTRE EM CONTATO</v-btn
          >
        </div>
      </v-flex>
      <v-flex xs10 md3 offset-lg1 class="spb-xs-15">
        <v-img src="/imgs/pos/pos-contato.png"></v-img>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" width="90vw" max-width="600px">
      <v-form
        v-if="!submited"
        ref="form"
        method="POST"
        action="javascript:void(0);"
        :name="`Saiba Mais ${curso.name}`"
        @submit.prevent="submit"
      >
        <v-card class="white">
          <v-card-title
            class="headline grey lighten-2 secondary--text uppercase semibold"
          >
            <small class="mt-2 ml-1">Saiba mais sobre o curso</small>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon small class="secondary--text">fas fa-times</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="px-4">
            <h2 class="semilight primary--text mt-2 mb-4 pr-5">
              {{ curso.name }}
            </h2>
            <v-text-field
              label="Nome Completo"
              color="primary"
              v-model="inscricao.nome"
              :rules="rules.nome"
              required
              name="nome"
              maxlength="255"
            ></v-text-field>
            <v-text-field
              label="Celular"
              color="primary"
              v-model="inscricao.celular"
              mask="(##) #########"
              :rules="rules.celular"
              required
              name="celular"
            ></v-text-field>
            <v-text-field
              label="E-Mail"
              color="primary"
              v-model="inscricao.email"
              :rules="rules.email"
              required
              name="email"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              type="submit"
              :loading="loading"
              :disabled="disabled"
            >
              <v-icon small class="mr-2">fas fa-paper-plane</v-icon>
              <span class="white--text">Enviar</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
      <div v-else>
        <v-card>
          <v-card-text class="spy-10">
            <p class="text-xs-center mb-4 uppercase info--text">
              Você será redirecionado ao chat
            </p>
            <div
              class="
                primary
                d-flex
                align-center
                justify-center
                mx-auto
                white--text
                titulo
                bold
              "
              style="width: 50px; height: 50px; border-radius: 100px"
            >
              <span v-if="count != 0" class="text-xs-center">{{ count }}</span>
              <span v-else class="text-xs-center enter-check"
                ><v-icon class="white--text">fas fa-check</v-icon></span
              >
            </div>
            <p class="p3 mt-2" v-if="count != 0">&nbsp;</p>
            <p v-else class="p3 info--text text-xs-center mt-2">
              Caso você não seja redirecionado
              <a href="https://wa.me/554521059009" target="_blank"
                >clique aqui.</a
              >
            </p>
          </v-card-text>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>
<script>
const maxChars = (v) => v.length < 191 || "Máx. 191 caracteres";
const required = (v) => !!v || "Preenchimento obrigatório";

export default {
  props: ["curso"],
  data() {
    return {
      dialog: false,
      rules: {
        required: [maxChars, required],
        nome: [
          (v) => !!v || "Preencha seu nome",
          (v) => v.length < 191 || "Máx. 191 caracteres",
        ],
        email: [
          (v) => !!v || "Preencha seu e-mail",
          (v) =>
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(v) ||
            "Digite um e-mail válido.",
        ],
        celular: [(v) => !!v || "Preencha seu celular"],
      },
      loading: false,
      disabled: false,
      submited: false,
      count: 3,
      inscricao: {
        nome: "",
        celular: "",
        email: "",
      },
    };
  },

  methods: {
    decrementCounter: function () {
      this.count -= 1;
    },
    submit(event) {
      this.loading = true;
      this.disabled = true;
      setTimeout(() => {
        if (this.$refs.form.validate()) {
          event.target.submit();
          this.submited = true;

          let interval = setInterval(() => {
            if (this.count != 0) {
              this.decrementCounter();
            } else {
              clearInterval(interval);
              open("https://wa.me/554521059009");
            }
          }, 1000);
        }
        this.loading = false;
        this.disabled = false;
      }, 1000);
    },
  },
};
</script>
<style lang='scss'>
.enter-check {
  animation: rotate 0.3s;

  @keyframes rotate {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
}
</style>