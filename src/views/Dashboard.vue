<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <template v-slot:activator>
            <v-btn small flat color="grey" @click="sortBy('title')">
              <v-icon small left>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator>
            <v-btn small flat color="grey" @click="sortBy('person')">
              <v-icon small left>person</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort by project author</span>
        </v-tooltip>
      </v-layout>

      <!-- Rest of your code -->

    </v-container>

  </div>
</template>

<script>
export default {
  name: 'DashboardView', // Change the component name
  data() {
    return {
      projects: [
        // Your project data
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style>

/* Your styles */

</style>
