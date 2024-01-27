<script setup lang="ts">
import WebDev from "~/components/WebDev.vue";
import FrontEnd from "~/components/FrontEnd.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <WebDev />
      </v-col>
      <v-col cols="12" md="6">
        <FrontEnd />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <PythonSkills />
      </v-col>
      <v-col cols="12" md="6">
        <Database />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>