<script  setup lang="ts">
 import { ref, onMounted } from 'vue';
 import axios from 'axios';
 import Graphs from './components/Graphs.vue';
 import Table from './components/Table.vue';

 const pokemonNames = ref<string[]>(['ditto', 'abra', 'absol', 'aggron', 'altaria', 'bagon', 'breloom' ])

 const pokemonsData = ref<any[]>([]);
 const pokemonExperiencesData = ref<number[]>([]);
 const pokemonNamesData = ref<string[]>([]);

 onMounted(async () => {
  try {
    const responses = await Promise.all(
      pokemonNames.value.map((name) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      )
    );

    pokemonsData.value = responses.map((response) => response.data);

    pokemonExperiencesData.value = pokemonsData.value.map(pokemon => pokemon.base_experience);
    pokemonNamesData.value = pokemonsData.value.map(pokemon => pokemon.name);

  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
});


</script>

<template>
  <h1>Hello World</h1>
  <Graphs :pokemonExperiencesData="pokemonExperiencesData" :pokemonNamesData="pokemonNamesData" />
  <Table :pokemonsData="pokemonsData" />
</template>

