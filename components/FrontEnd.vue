<template>
  <!-- Second Column -->
  <div class="rounded overflow-hidden hover:border-stone-50 flex flex-col md:flex-row justify-between">
    <div class="py-6 px-6">
    <!-- Front End Technologies -->
    <div class="flex items-center mb-4">
      <Icon name="gis:earth-network" :color="{'black': !theme.global.current.value.dark }" size="36" class="m-1"/>
      <h3 class="text-lg font-semibold">Front End Technologies</h3>
    </div>
    <p class="text-gray-400 text-base">
      Proficient in a wide array of web technologies, I excel in HTML, CSS, JavaScript, and TypeScript, along with modern frameworks like Vue.js and libraries such as Vuetify, Bootstrap, and Tailwind CSS. My expertise extends to integrating advanced mapping libraries such as ArcGIS Maps SDK for JavaScript, and Leaflet, enabling me to design and build custom user interfaces. This skill set is pivotal in my research and development of innovative applications and tools for public use.
    </p>
    <hr class="my-4 border-gray-400"> <!-- Divider -->
    <Icon name="logos:html-5" size="36" class="m-1"/>
    <Icon name="logos:css-3" size="36" class="m-1"/>
    <Icon name="logos:javascript" size="36" class="m-1"/>
    <Icon name="logos:typescript-icon" size="36" class="m-1"/>
    <Icon name="logos:vue" size="36" class="m-1"/>
    <Icon name="file-icons:leaflet" size="36" class="m-1" color="green"/>
    <Icon name="logos:tailwindcss-icon" size="36" class="m-1"/>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme()
</script>

<style scoped>

</style>