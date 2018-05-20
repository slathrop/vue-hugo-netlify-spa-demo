<template>
  <v-app light>
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clippedLeftDrawer" v-model="drawer" fixed app width="200">
      <v-list>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clippedLeftDrawer">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixedFooter" app class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; 2018</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clippedLeftDrawer: true,
      drawer: true,
      fixedFooter: true,
      items: [
        { icon: "home", title: "Welcome", to: "/" },
        { icon: "people", title: "Players", to: "/players" },
        { icon: "assignment", title: "Coaches", to: "/coaches" }
      ],
      miniVariant: false,
      title: "MLB Bobble Heads"
    };
  }
};
</script>
