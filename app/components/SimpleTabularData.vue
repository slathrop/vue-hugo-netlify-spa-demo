<template>
  <v-data-table :must-sort="true" :headers="headers" :items="rows" hide-actions>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.RowLabel }}</td>
      <td>{{ props.item.LastName }}</td>
      <td>{{ props.item.FirstName }}</td>
      <td>{{ props.item.Team }}</td>
      <td>{{ props.item.Pose }}</td>
      <td><img class="bobble-photo" :src="`${API_HOST}/${props.item.Photo}`"></td>
    </template>
  </v-data-table>
</template>

<script>
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
    API_HOST: 'https://bobble-api.netlify.com',
    // API_HOST: 'http://localhost:1313',
    // API_GET_SUFFIX: '/get.json',
    // API_GET_SUFFIX: '/',
    API_GET_SUFFIX: '/get.json/',

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
      { text: 'Bobble Pose', value: 'Pose', align: 'left' },
      { text: 'Thumbnail', value: 'Photo', align: 'left' }
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
      return `${this.API_HOST}${this.entityBaseUrl}/all${this.API_GET_SUFFIX}`;
    }
  },

  methods: {
    async getRows() {
      this.loading = true;

      try {
        console.log('Getting rows...');
        
        //function reqListener () {
        //  console.log(this.responseText);
        //}
        //var oReq = new XMLHttpRequest();
        //oReq.addEventListener('load', reqListener);
        //oReq.open('GET', this.dataUrl);
        //oReq.send();
        
        const response = await this.$axios.$get(this.dataUrl, {
          transformRequest: (data, headers) => {
            delete headers.common;
            delete headers['Authorization'];
            return data;
          }
        });
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
.bobble-photo {
  width: 100px;
  margin: 5px;
}
</style>
