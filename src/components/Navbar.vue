<template>
    <nav>
      <v-toolbar flat app color="#00000f">
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">Trading</span>
          <span>Anaconda</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarPage',
  };
  </script>
  
  