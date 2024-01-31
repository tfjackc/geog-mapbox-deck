<template>
  <div class="mb-5 drop-shadow-md flex flex-col sm:flex-row items-center justify-between py-5"
       :class="{ 'bg-stone-800': theme.global.current.value.dark, 'bg-stone-900': !theme.global.current.value.dark }">
    <div class="flex flex-col sm:flex-row">
      <div class="flex flex-row">
      <h1 class="ml-5 sm:ml-0 text-3xl sm:text-2xl font-semibold text-white flex items-end">JACK COLPITT</h1>
      <button class="block sm:hidden ml-5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-16 h-10 rounded-2xl" @click="toggleTheme">
        <Icon color="white" name="mdi:theme-light-dark" size="24"></Icon>
      </button>
      </div>
      <h3 class="ml-5 mt-0 sm:mt-2 text-xl sm:text-l text-white flex items-end">GIS ANALYST @ CROOK COUNTY</h3>
    </div>
    <div class="mr-5">
      <button class="hidden sm:block bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-16 h-10 rounded-2xl" @click="toggleTheme">
        <Icon color="white" name="mdi:theme-light-dark" size="24"></Icon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme()
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

</style>