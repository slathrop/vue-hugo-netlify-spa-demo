<template>
 <div>
     <div class="white">
                <topo
                    titulo="pos.name"
                    duracao="pos.duracao"
                    inscricao="pos.inscricao_aberta ? pos.inscricao : ''"
                    curso-name="pos.name"
                    id="pos.id"
                    inscricaoaberta="pos.inscricao_aberta"
                ></topo>
                @if(pos.slug === 'psicologia-positiva-aplicada-a-saude-integral-ead' or pos.slug === 'praticas-contemporaneas-em-terapia-cognitivo-comportamental-ead')
                    <div class="padding-padrao">
                        <v-img class="margin-padrao" aspect-raio="1.7" :src="imgBanner()" style="position:relative; z-index: 2"></v-img>
                    </div>
     
                @endif
                <sobre
                    descricao="pos.descricao"
                    video="{!! pos.video !!}"
                ></sobre>
                <competencias
                    :itens="pos.competencias"
                ></competencias>
     
                <form-saiba-mais :curso="$pos"></form-saiba-mais>
                @if(pos.matriz->count())
                <componente-curricular
                    carga-horaria="pos.carga_horaria"
                    :componentes="pos.matriz"
                ></componente-curricular>
                @endif
     
                @if(pos.fluxogramas->count())
                    <fluxograma-portal
                        titulo="COMO FUNCIONA SUA PÓS-GRADUAÇÃO"
                        :itens="pos.fluxogramas"
                    ></fluxograma-portal>
                @endif
                {{--
                    Não me xinguem. Passar os itens individualmente melhora a performace.
                    Se eu passar a Pós Inteira como prop, isso vai parar no front-end, e aumenta
                    uns bons KBs na chamda. O Lighthouse agradece.
                --}}
                <informacoes
                    modalidade="pos.modalidade"
                    :data-inicio="pos.data_inicio"
                    carga-horaria="pos.carga_horaria"
                    :duracao="pos.duracao"
                    observacao="pos.observacao"
                ></informacoes>
                <h1 class="titulo ead spt-12 spl-0 text-xs-center smy-10">
                    <big>INVESTIMENTO</big>
                </h1>
                <v-layout justify-center smb-15>
                    <v-flex xs10 sm8 md5 lg4 xl3>
                        <investimento
                            titulo="Pós-Graduação"
                            :carga-horaria="pos.carga_horaria"
                            :duracao="pos.duracao"
                            :itens="pos.investimento"
                        ></investimento>
                    </v-flex>
                </v-layout>
                <inscricao-dialog esconde curso="pos.name"></inscricao-dialog>
                <v-layout align-center justify-center class="spb-12 white">
                    <inscricao curso="pos.name"></inscricao>
                </v-layout>
                @if(pos.diferenciais->count())
                    <diferenciais
                        :diferenciais="pos.diferenciais"
                    ></diferenciais>
                @endif
                <equipe :professores="pos.staff"></equipe>
                <v-layout class="justify-center spb-15">
                    <botao-inscricao :inscricaoaberta="pos.inscricao_aberta" href="pos.inscricao_aberta ? pos.inscricao : ''"></botao-inscricao>
                </v-layout>
            </div>
           
    </template>
<script>
export default {}
</script>
<style lang='scss'>
</style>