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
    <div class="flex flex-row mr-5">
      <NuxtLink :to="`/${routeButton}`" class="text-amber-50 flex items-center mr-5 no-underline hover:underline" @click="changeText">
        <Icon :name="icon" size="36"></Icon>
        <span class="ml-2">{{buttonText}}</span>
      </NuxtLink>
      <button class="hidden sm:block bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-16 h-10 rounded-2xl" @click="toggleTheme">
        <Icon color="white" name="mdi:theme-light-dark" size="24"></Icon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from "pinia";
import { useTheme } from 'vuetify';
import {useDataStore} from "~/store/data_store";
const theme = useTheme()
const route = useRoute()
const data_store = useDataStore()
const { navlink } = storeToRefs(data_store);
const routeButton = ref('')
const buttonText = ref('')
const icon = ref('')

onMounted(() => {
  if (route.name === 'index') {
    routeButton.value = 'contact'
    buttonText.value = 'CONTACT'
    icon.value = 'flat-color-icons:address-book'
  }
  if (route.name === 'contact') {
    routeButton.value = ''
    buttonText.value = 'HOME'
    icon.value = 'flat-color-icons:home'
  }
})

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
function changeText ()  {
  if (route.name === 'contact') {
    console.log(route.name)
    routeButton.value = navlink.value[1]['title']
    buttonText.value = navlink.value[1]['title'].toUpperCase()
    icon.value = 'flat-color-icons:address-book'
  }
  else {
    console.log(route.name)
    routeButton.value = ''
    buttonText.value = 'HOME'
    icon.value = 'flat-color-icons:home'
  }
}
</script>

<style scoped>

</style>