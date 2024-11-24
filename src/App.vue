<script  setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="p-4 text-center flex justify-center flex-col items-center">
    <NavBar />
    <RouterView />
  </div>
</template>

