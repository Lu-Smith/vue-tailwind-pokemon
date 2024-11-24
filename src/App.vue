<script  setup lang="ts">
  import { onMounted } from 'vue';
  import NavBar from './components/NavBar.vue';
  import { RouterView } from 'vue-router';
  import { fetchPokemonData } from './data/pokemonApi';

  onMounted(() =>{
    fetchPokemonData();
  });
</script>

<template>
  <div class="p-4 text-center flex justify-center flex-col items-center">
    <NavBar />
    <RouterView />
  </div>
</template>

