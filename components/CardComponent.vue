<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-3xl flex justify-center">Skills</div>
        <hr class="my-4 border-gray-400">
      </v-col>
      </v-row>
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

<script setup lang="ts">
import WebDev from "~/components/GISadmin.vue";
import FrontEnd from "~/components/FrontEnd.vue";
</script>

<style scoped>

</style>