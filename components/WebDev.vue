<template>
  <!-- Second Column -->
  <div class="rounded overflow-hidden shadow-lg hover:bg-stone-900 hover:border-stone-50 flex flex-col md:flex-row justify-between">
    <div class="py-6 px-6">
      <!-- Front End Technologies -->
      <div class="flex items-center mb-4">
        <Icon name="gis:layer-alt-poi" color="white" size="36" class="m-1"/>
        <h3 class="text-lg font-semibold px-2">GIS Development / Administration</h3>
      </div>
      <p class="text-gray-400 text-base">
        Develop, design, and manage web services utilizing the ArcGIS Enterprise Portal & ArcGIS Server, including the creation and integration of geospatial content using ArcGIS Pro to support all county departments and partners.
      </p>
      <hr class="my-4 border-gray-400"> <!-- Divider -->
      <div class="flex h-12"> <!-- Use 'flex' instead of 'flex-row' -->
        <NuxtImg src="https://maps.ucsf.edu/sites/g/files/tkssra2376/f/wysiwyg/ArcGIS-Pro.png" height="36" class="m-1"/>
        <NuxtImg src="/ArcGIS-Enterprise.png" class="m-1"/>
<!--        <Icon name="file-icons:leaflet" size="36" class="m-1" color="green"/>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>