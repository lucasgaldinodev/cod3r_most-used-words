<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>
    <v-content class="content mt-15" > <!-- precisou adiconar isso aqui pro conteúdo ser mostrado, pois sem isso o conteúdo fica abaixo da AppBar --> 
      <Home_Vue />
    </v-content>
  </v-app>
</template>

<script>
import Home_Vue from "./components/Home_Vue";

export default {
  name: 'App',

  components: {
    Home_Vue
  },

  data: () => ({
    //
  }),
}
</script>
