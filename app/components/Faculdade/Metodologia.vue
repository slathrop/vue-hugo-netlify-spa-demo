<template>
  <div class="ead-padding smt-5 spb-10" id="metodologia">
    <h1 class="titulo ead font-500 text-xs-center smy-15">
      <big>Metodologia Educacional</big>
    </h1>
    <v-layout wrap class="align-center spx-24 spx-xs-4">
      <v-flex xs12 md4 class="spr-10 spr-xs-0 smb-xs-8">
        <v-img src="/imgs/portal-professor/img3.png"></v-img>
      </v-flex>
      <v-flex xs12 md8>
        <v-layout wrap class="">
          <v-flex
            xs12
            md6
            v-for="({ title, desc }, i) in diferenciais"
            :key="i"
            class="spx-5 spy-4"
          >
            <v-layout>
              <div class="borda-diferenciais-icone">
                <!-- <clr-icon
                  class="cor-icone-diferenciais mr-3"
                  shape="plus-circle"
                  size="30"
                ></clr-icon> -->
              </div>
              <div>
                <p class="titulo-diferenciais smb-1 uppercase regular">
                  {{ title }}
                </p>
                <p class="texto-diferenciais smb-0">
                  {{ desc }}
                </p>
              </div>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diferenciais: [
        {
          icon: 'user',
          title: 'Máxima aplicabilidade',
          desc: 'A cada trilha o aluno aplica seu projeto à sua realidade profissional.',
        },
        {
          icon: 'user',
          title: 'Momentos ao vivo de interação',
          desc: 'Momentos de orientação ao vivo com docentes especializados.',
        },
        {
          icon: 'user',
          title: 'Master Class com especialistas',
          desc: 'Master Class ao vivo com pessoas que são autoridades em inovação em educação',
        },
        {
          icon: 'user',
          title: 'Preceptoria',
          desc: 'Acompanhamento e feedback  personalizado com docentes experientes.',
        },
        {
          icon: 'user',
          title: 'Assessoramento individual',
          desc: 'Assessoria de tutor para organização e suporte técnico nos processos do curso.',
        },
        {
          icon: 'user',
          title: 'Nano degree (Certificados Parciais)',
          desc: 'Certificados de competências ao longo do curso, enriquecendo seu currículo antes mesmo de concluir  todo o MBA.',
        },
        {
          icon: 'user',
          title: 'Aprendizagem personalizada',
          desc: 'Todos os projetos aplicados durante o curso consideram as necessidades do contexto profissional do aluno.',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/../scss/_color_set';

.botao-diferenciais {
  float: right;
  font-size: 12px;
  color: #3c8f7f !important;
}

.texto-diferenciais {
  line-height: 1.3;
  font-size: calc(10px + 0.25vw);
  font-weight: 300;
}

#diferenciais {
  position: relative;
  z-index: 1;
  background-color: white;
}

.titulo-diferenciais {
  line-height: 1.5;
  font-weight: 600;
  color: $c-secondary;
  font-size: calc(11px + 0.25vw);
}

.cor-icone-diferenciais {
  fill: url(#linear2);
  stroke: white;
  stroke-width: 0.05em;
  width: calc(40px + 0.5vw);
  height: calc(40px + 0.5vw);
}

.click-diferenciais {
  color: #707a84;
}

.slide-fade-enter-active,
.slide-fade-2-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active,
.slide-fade-2-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateY(-50px);
  opacity: 0;
}

.slide-fade-2-enter,
.slide-fade-2-leave-active {
  transform: translateY(50px);
  opacity: 0;
}
</style>
