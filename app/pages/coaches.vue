<template>
  <v-layout>
    <v-flex>
      <simple-tabular-data entity-base-url="/coaches" entity-result-data-key="coachBobbles" />
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
    console.log('Created coaches page');
  },

  mounted() {
    console.log('Mounted coaches page');
  }
};
</script>
