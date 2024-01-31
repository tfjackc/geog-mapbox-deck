<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme()
</script>

<template>
  <div class="rounded overflow-hidden hover:border-stone-50 flex flex-col md:flex-row justify-space-between h-full">
    <div class="px-6 py-4">
      <div class="flex items-center mb-4">
        <Icon name="logos:python" color="white" size="36" class="m-1"/>
        <h3 class="text-lg font-semibold px-2">Python Programming</h3>
      </div>
      <p class="my-4 text-gray-400 text-base">
        Python is my go-to language for an expansive range of applications – from modernizing GIS workflows to backend development, and from crafting compelling visualizations to server-side scripting. My expertise extends through Jupyter notebooks, Pandas, GeoPandas, to building robust open-source solutions and intuitive GUIs. Whether it's for spatial analysis, data manipulation, or any facet of data science, I harness Python's power to deliver innovative, efficient solutions.
      </p>
      <hr class="my-4 border-gray-400">
      <Icon name="logos:jupyter" size="36" class="m-1"/>
      <Icon name="logos:pandas" size="64" class="m-1"/>
      <Icon name="logos:matplotlib-icon" size="36" class="m-1"/>
      <Icon name="devicon:plotly" size="36" class="m-1"/>
    </div>
  </div>
</template>

<style scoped>

</style>