<template>
  <div id="map" ref="map" class="map"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { createMap } from "~/gis/mapping.js";
onMounted(() => {
  createMap()
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>