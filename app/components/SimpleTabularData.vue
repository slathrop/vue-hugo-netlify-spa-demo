<template>
  <v-data-table :must-sort="true" :headers="headers" :items="rows" hide-actions>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.RowLabel }}</td>
      <td>{{ props.item.LastName }}</td>
      <td>{{ props.item.FirstName }}</td>
      <td>{{ props.item.Team }}</td>
      <td>{{ props.item.Pose }}</td>
    </template>
  </v-data-table>
</template>

<script>
const API_HOST = 'https://bobble-api.netlify.com';
// const API_HOST = 'http://localhost:1313';
const API_GET_SUFFIX = '/get.json';

export default {
  props: {
    entityBaseUrl: {
      type: String,
      required: true
    },
    entityResultDataKey: {
      type: String,
      required: true
    }
  },

  data: () => ({
    loading: true,
    pagination: {
      sortBy: 'LastName'
    },
    mustSort: true,
    headers: [
      { text: '', value: 'RowLabel', sortable: false, align: 'left' },
      { text: 'Last Name', value: 'LastName', align: 'left' },
      { text: 'First Name', value: 'FirstName', align: 'left' },
      { text: 'Team', value: 'Team', align: 'left' },
      { text: 'Bobble Pose', value: 'Pose', align: 'left' }
    ],
    rows: []
  }),

  created() {
    console.log('Created <SimpleTabularData> component');
  },

  mounted() {
    console.log('Mounted <SimpleTabularData> component');
    this.getRows();
  },

  computed: {
    dataUrl() {
      return `${API_HOST}${this.entityBaseUrl}/all${API_GET_SUFFIX}`;
    }
  },

  methods: {
    async getRows() {
      this.loading = true;

      try {
        console.log('Getting rows...');
        const response = await this.$axios.$get(this.dataUrl);
        console.log(`Got rows from ${this.dataUrl}`);
        this.rows = response.data[this.entityResultDataKey];
      } catch (e) {
        console.log('Error getting rows:', e);
      }

      this.loading = false;
    }
  }
};
</script>

<style scoped>
</style>
