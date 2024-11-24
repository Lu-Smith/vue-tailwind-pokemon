<script  setup lang="ts">
  import { onMounted } from 'vue';
  import NavBar from './components/NavBar.vue';
  import { RouterView } from 'vue-router';
  import { fetchPokemonData } from './data/pokemonApi';
import { productBenchmarks } from './data/benchmarksApi';

  onMounted(() =>{
    fetchPokemonData();
    productBenchmarks();
  });
</script>

<template>
  <div class="p-4 text-center flex justify-center flex-col items-center">
    <NavBar />
    <RouterView />
  </div>
</template>

