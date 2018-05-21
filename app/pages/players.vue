<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-data-table :must-sort="true" :headers="headers" :items="players" hide-actions>
        <template slot="items" slot-scope="propsSU">
          <td>
            <v-menu bottom left>
              <v-btn icon slot="activator">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-menu>
          </td>
          <td>Coming</td>
          <td>Soon</td>
          <td>Player</td>
          <td>Data</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
const API_HOST = 'https://bobble-api.netlify.com';
const API_BASE_URL = '/v1';

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
    players: [
      {
        RowLabel: 'Row',
        LName: 'Smith',
        FName: 'John',
        Team: 'Nats',
        Pose: 'Batting'
      }
    ],

    dataBaseUrl: `${API_HOST}${API_BASE_URL}/Players`,
    countBaseUrl: `${API_HOST}${API_BASE_URL}/Players/count`
  }),

  created() {
    console.log('Created App');
  },

  mounted() {
    console.log('Mounted App');
  }
};
</script>
