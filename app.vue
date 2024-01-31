<template>
  <NuxtLayout>
    <v-app id="inspire">
      <Navbar />
      <v-main>
        <NuxtPage />
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Jack Colpitt - GIS Analyst @ Crook County, Oregon',
  ogTitle: 'Jack Colpitt - GIS Analyst @ Crook County, Oregon',
  description: 'Webpage / Contact Card Site for Jack Colpitt',
  ogDescription: 'Webpage / Contact Card Site for Jack Colpitt',
  ogImage: './a_headshot_jc.jpg',
  twitterCard: 'summary_large_image',
})
</script>


<style>
</style>