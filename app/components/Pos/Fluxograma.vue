<template>
  <div
    class="spx-14 grey lighten-3 spy-20 smt-24"
    style="
      background: linear-gradient(45deg, #3a3200 30%, black 30%);
      background-attachment: fixed;
    "
  >
    <div
      class="relative spb-10 spt-6 spx-10 white"
      style="border: 1px solid #dfdfdf"
    >
      <h1 class="font-500 main-title">Como funciona sua Pós-Graduação</h1>
      <v-layout wrap class="justify-space-evenly ml-3">
        <v-flex
          :md3="i <= 3"
          :md4="i > 3"
          xs12
          class="hover-effect-1 spr-2 spt-10 spb-5 d-flex justify-space-between"
          v-for="(item, i) in itens"
          :key="i"
        >
          <span
            class="flecha c-primary d-flex align-center justify-center titulo"
          >
            <b>{{ i + 1 }}</b>
          </span>
          <div class="spr-10 ml-4">
            <p class="smb-0 smt-0 font-600 sml-0">
              <big>
                {{ item.title }}
              </big>
            </p>
            <p class="grey--text mb-0">
              {{ item.description }}
            </p>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
  },

  computed: {
    itens() {
      if (this.id === 31) {
        this.dados.splice(4, 2)
        return this.dados
      }

      return this.dados
    },
  },

  data: () => ({
    dados: [
      {
        icon: 'check-circle',
        title: 'ESCOLHA SEU CURSO',
        description:
          'Escolha o seu curso e preencha a ficha de inscrição online.',
      },
      {
        icon: 'assign-user',
        title: 'MATRÍCULA',
        description:
          'Após a confirmação do fechamento da turma, realize a matrícula online no link enviado por e-mail.',
      },
      {
        icon: 'event',
        title: 'INÍCIO DAS AULAS',
        description:
          'Após a matrícula receba o cronograma de atividades e acesso ao ambiente virtual de aprendizagem.',
      },
      {
        icon: 'clock',
        title: 'ESTUDE ONDE E COMO QUISER',
        description:
          'Agora é só estudar! Gerencie seu horário de estudos da forma que for mais conveniente a você.',
      },
      {
        icon: 'employee',
        title: 'PROJETOS PROFISSIONAIS APLICADOS',
        description:
          'Durante o curso você coloca a mão na massa, realizando um projeto aplicado ao seu contexto.',
      },
      {
        icon: 'computer',
        title: 'INTERAÇÃO COM SEU PRECEPTOR',
        description:
          'Aproveite ao máximo a interação com seu orientador, por meio dos encontros virtuais periódicos, realizados a cada etapa no projeto.',
      },
      {
        icon: 'crown',
        title: 'MASTER CLASS',
        description:
          'A cada módulo você terá uma master class, que é uma aula online ao vivo (síncrona) com um especialista no assunto.',
      },
    ],
  }),
}
</script>

<style lang="scss">
@import '@/../scss/_color_set';

.hover-effect-1-icon {
  transition: transform 0.3s linear;
}

.hover-effect-1-borda {
  transition: transform 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.number {
  transition: transform 0.5s;
}

.hover-effect-1:hover {
  .hover-effect-1-borda {
    transform: rotateZ(180deg);
  }

  .number {
    transform: rotateZ(-180deg);
  }
}

.flecha {
  height: 60px;
  min-width: 30px;
  max-width: 30px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-top: 30px solid #ffde17;
    border-bottom: 30px solid #ffde17;
    border-left: 10px solid transparent;
    position: absolute;
    left: -10px;
  }
  &:after {
    content: '';
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 10px solid #ffde17;
    position: absolute;
    right: -10px;
  }
}
.icone-fluxograma {
  fill: url(#linear2);
  stroke: white;
  stroke-width: 0.05em;
}
</style>
