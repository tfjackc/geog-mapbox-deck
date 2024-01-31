<template>
  <!-- Second Column -->
  <div class="rounded overflow-hidden hover:border-stone-50 flex flex-col md:flex-row justify-between h-full">
    <div class="py-6 px-6">
      <!-- Front End Technologies -->
      <div class="flex items-center mb-4">
        <Icon name="gis:layer-alt-poi" :color="{'black': !theme.global.current.value.dark }" size="36" class="m-1"/>
        <h3 class="text-lg font-semibold px-2">GIS Administration</h3>
      </div>
      <p class="text-gray-400 text-base">
        Manage and design web services utilizing the ArcGIS Enterprise Portal & ArcGIS Server. My role involves creating and integrating geospatial content using ArcGIS Pro, which is fundamental in supporting the GIS requirements of all county departments and partners. This includes leveraging my cartographic skills to ensure accurate and user-friendly GIS solutions.
      </p>
      <hr class="my-4 border-gray-400"> <!-- Divider -->
      <div class="flex h-12"> <!-- Use 'flex' instead of 'flex-row' -->
        <NuxtImg src="https://maps.ucsf.edu/sites/g/files/tkssra2376/f/wysiwyg/ArcGIS-Pro.png" height="36" class="m-1"/>
        <NuxtImg src="/enterprise.png" class="m-1"/>
<!--        <Icon name="file-icons:leaflet" size="36" class="m-1" color="green"/>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme()
</script>

<style scoped>

</style>