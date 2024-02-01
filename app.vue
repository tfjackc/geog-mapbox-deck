<template>
  <Head>
    <Meta name="twitter:image" content="https://herokustatic.s3.us-west-2.amazonaws.com/twitter_image.png"></Meta>
  </Head>
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
  ogImage: 'https://herokustatic.s3.us-west-2.amazonaws.com/twitter_image.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
</style>