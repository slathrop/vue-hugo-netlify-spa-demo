<template>
  <v-layout>
    <v-flex>
      <v-data-table :must-sort="true" :headers="headers" :items="players" hide-actions>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.RowLabel }}</td>
          <td>{{ props.item.LName }}</td>
          <td>{{ props.item.FName }}</td>
          <td>{{ props.item.Team }}</td>
          <td>{{ props.item.Pose }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
const API_HOST = 'https://bobble-api.netlify.com';
const API_BASE_URL = '/players';

export default {
  data: () => ({
    loading: true,
    pagination: {
      sortBy: 'LName'
    },
    mustSort: true,
    headers: [
      { text: '', value: 'RowLabel', sortable: false, align: 'left' },
      { text: 'Last Name', value: 'LName', align: 'left' },
      { text: 'First Name', value: 'FName', align: 'left' },
      { text: 'Team', value: 'Team', align: 'left' },
      { text: 'Bobble Pose', value: 'Pose', align: 'left' }
    ],
    players: [],

    dataBaseUrl: `${API_HOST}${API_BASE_URL}/all`
  }),

  created() {
    console.log('Created App');
  },

  mounted() {
    console.log('Mounted App');
  },

  methods: {
    async getRows() {
      this.loading = true;

      try {
        const dataUrl = `${this.dataBaseUrl}`;
        console.log('Getting players...');
        const response = await this.$axios.$get(dataUrl);
        console.log('Got players');
        this.players = response.data.playerBobbles;
      } catch (e) {
        console.log('Error getting players:', e);
      }

      this.loading = false;
    }
  }
};
</script>
