<template>
<div class="rounded overflow-hidden hover:border-stone-50 flex flex-col md:flex-row justify-between h-full">
  <div class="px-6 py-4">
    <div class="flex items-center mb-4">
      <Icon name="material-symbols:database-outline" :color="{'black': !theme.global.current.value.dark }" size="36" class="m-1"/>
      <h3 class="text-lg font-semibold px-2">Database Management</h3>
    </div>
    <p class="my-4 text-gray-400 text-base">
      At Crook County GIS, I manage enterprise-scale SQL Server databases, ensuring top-notch data integrity and public accessibility. In my personal projects, I skillfully handle PostgresSQL/PostGIS for web development within Django frameworks. My expertise also encompasses crafting APIs for seamless cloud and remote server integrations, blending professional rigor with personal innovation. </p>
    <hr class="my-4 border-gray-400">
    <Icon name="logos:postgresql" color="white" size="36" class="m-1"/>
      <Icon name="devicon-plain:azuresqldatabase" :color="{'black': !theme.global.current.value.dark }" size="36" class="m-1"/>
  </div>
</div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme()
</script>

<style scoped>

</style>