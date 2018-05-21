<template>
  <v-layout>
    <v-flex>
      <simple-tabular-data entity-base-url="/players" entity-result-data-key="playerBobbles" />
    </v-flex>
  </v-layout>
</template>

<script>
import SimpleTabularData from '~/components/SimpleTabularData.vue';

export default {
  components: {
    SimpleTabularData
  },

  data: () => ({}),

  created() {
    console.log('Created players page');
  },

  mounted() {
    console.log('Mounted players page');
  }
};
</script>
