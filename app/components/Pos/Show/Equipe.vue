<template>
    <div class="padding-padrao margin-padrao spb-10 spt-20">
        <h1 class="ead titulo spl-0"><big>EQUIPE</big></h1>
        <v-layout wrap>
            <v-flex
                class="d-flex spy-15"
                md6
                v-for="(professor, i) in professores"
                :key="i"
            >
                <div>
                    <v-img
                        :src="imagine(professor.foto)"
                        class="professor-image-pos"
                        :style="{
                            borderBottomColor: $root.primary,
                            borderTopColor: $root.secondary,
                        }"
                    ></v-img>
                </div>
                <div>
                    <div class="titulo regular secondary--text light spl-6">
                        {{ professor.nome_curto || professor.nome }}
                    </div>
                    <p class="light curriculo-professor spl-6 spr-10 spt-2">
                        {{ professor.curriculo }}
                    </p>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    props: ["professores"],
};
</script>

<style lang="scss">
.professor-image-pos {
    width: calc(100px + 1vw);
    height: calc(100px + 1vw);
    border-radius: 100%;
    border-top: 3px solid;
    border-bottom: 3px solid;
    border-left: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
}
.curriculo-professor {
    font-size: calc(10px + 0.25vw);
}
</style>
