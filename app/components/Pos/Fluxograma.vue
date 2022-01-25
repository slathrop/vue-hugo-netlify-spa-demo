<template>
  <div
    class="padding-padrao relative ead-padding spb-10 smt-24"
    style="border: 1px solid #ffdf42"
  >
    <h1 class="titulo font-400 smb-10" style="margin-top: -1px">
      <span class="c-primary black--text spx-5"
        >Como funciona sua Pós-Graduação</span
      >
    </h1>

    <v-layout wrap class="justify-space-evenly spx-10">
      <!--Perdão... Pós de TDAH: Ocultar item Profissionais (4), preceptor (5)-->
      <v-flex
        :md3="i <= 3"
        :md4="i > 3"
        xs12
        class="hover-effect-1 spx-4 spy-15 d-flex justify-space-between"
        v-for="(item, i) in itens"
        :key="i"
      >
        <div class="mr-2">
          <div class="borda-fluxograma hover-effect-1-borda">
            <h1
              class="
                number
                grey--text
                text--darken-2
                white
                lighten-3
                d-flex
                justify-center
                my-0
              "
            >
              {{ i + 1 }}.
            </h1>
          </div>
        </div>
        <div class="ml-3">
          <p class="smb-1 smt-0 titulo-fluxograma font-600">
            <big>{{ item.title }}</big>
          </p>
          <p class="descricao-fluxograma mb-0">
            {{ item.description }}
          </p>
        </div>
      </v-flex>
    </v-layout>
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

.titulo-fluxograma {
  line-height: 1.5;
  color: $c-secondary;
  font-size: calc(10px + 0.25vw);
  @media (max-width: 420px) {
    font-size: calc(16px + 0.25vw);
  }
}

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

.descricao-fluxograma {
  line-height: 1.3;
  font-size: calc(10px + 0.25vw);
  @media (max-width: 420px) {
    font-size: calc(15px + 0.25vw);
  }
}

.borda-fluxograma {
  // border-top: 3px solid #d9ba00;
  // border-bottom: 3px solid #d9ba00;
  // border-left: 1px solid #c5c5c5;
  // border-right: 1px solid #c5c5c5;
  // border-radius: 100%;
  // margin: auto;
  // width: 70px;
  // min-width: 70px;
  // height: 70px;
}

.icone-fluxograma {
  fill: url(#linear2);
  stroke: white;
  stroke-width: 0.05em;
}
</style>
