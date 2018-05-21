<template>
  <v-layout>
    <v-flex>
      <v-data-table :must-sort="true" :headers="headers" :items="rows" hide-actions>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.RowLabel }}</td>
          <td>{{ props.item.LastName }}</td>
          <td>{{ props.item.FirstName }}</td>
          <td>{{ props.item.Team }}</td>
          <td>{{ props.item.Pose }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
const API_HOST = 'https://bobble-api.netlify.com';
// const API_HOST = 'http://localhost:1313';
const API_ENTITY_BASE_URL = '/players';
const API_GET_SUFFIX = '/get.json';
const API_RESULT_DATA_ROWS_KEY = 'playerBobbles';

export default {
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
    rows: [],

    dataUrl: `${API_HOST}${API_ENTITY_BASE_URL}/all${API_GET_SUFFIX}`
  }),

  created() {
    console.log('Created App');
  },

  mounted() {
    console.log('Mounted App');
    this.getRows();
  },

  methods: {
    async getRows() {
      this.loading = true;

      try {
        console.log('Getting rows...');
        const response = await this.$axios.$get(this.dataUrl);
        console.log('Got rows');
        this.rows = response.data[API_RESULT_DATA_ROWS_KEY];
      } catch (e) {
        console.log('Error getting rows:', e);
      }

      this.loading = false;
    }
  }
};
</script>
