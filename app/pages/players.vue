<template>
  <v-layout>
    <v-flex text-xs-center>
      <v-data-table :loading="false" :must-sort="true" :headers="[]" :items="[]" :total-items="0" rows-per-page-text="Rows:" :rows-per-page-items="rowsOptions">
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
const API_HOST = "https://bobble-api.netlify.com";
const API_BASE_URL = "/v1";

export default {
  data: () => ({
    loading: true,
    pagination: {
      sortBy: "LName",
      rowsPerPage: 10
    },
    mustSort: true,
    headers: [
      { text: "", value: "", sortable: false, align: "left" },
      { text: "Last Name", value: "LName", align: "left" },
      { text: "First Name", value: "FName", align: "left" },
      { text: "Team", value: "Team", align: "left" },
      { text: "Bobble Pose", value: "Pose", align: "left" }
    ],
    rowsOptions: [5, 10, 25, 100, 500],

    dataBaseUrl: `${API_HOST}${API_BASE_URL}/Players`,
    countBaseUrl: `${API_HOST}${API_BASE_URL}/Players/count`
  }),

  created() {
    console.log("Created App");
  },

  mounted() {
    console.log("Mounted App");
  }
};
</script>
