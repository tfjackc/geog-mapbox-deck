<template>
  <div class="">
    <div class="">
      <NameAndTitle />
      <div class="w-96 h-96">
      <Map />
      </div>
      <!--      <NuxtImg src="/bright_map.png"/>-->
    </div>
    <div class=""> <!-- Bottom horizontal container -->
      <div class=""> <!-- Box for WebDev with border, padding and margin-right -->
        <WebDev />
      </div>
      <div class=""> <!-- Box for FrontEnd with border, padding and margins -->
        <FrontEnd />
      </div>
      <div class=""> <!-- Box for PythonSkills with border, padding and margins -->
        <PythonSkills />
      </div>
      <div class=""> <!-- Box for Database with border, padding and margin-left -->
        <Database />
      </div>
    </div>
    <CardComponent />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>