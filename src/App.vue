<script  setup lang="ts">
 import { ref, onMounted, nextTick  } from 'vue';
 import axios from 'axios';
 import { Chart, registerables } from 'chart.js';
 import Graphs from './components/Graphs.vue';
 import Table from './components/Table.vue';

 const pokemonNames = ref<string[]>(['ditto', 'abra', 'absol', 'aggron', 'altaria', 'bagon', 'breloom' ])

 const pokemons = ref<any[]>([]);
 const pokemonsExperience = ref<{ name: string, experience: number }[]>([]);

 onMounted(async () => {
  try {
    const responses = await Promise.all(
      pokemonNames.value.map((name) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      )
    );

    pokemons.value = responses.map((response) => response.data);

    const data = pokemons.value.map((pokemon) => ({
      name: pokemon.name,
      experience: pokemon.base_experience,
    }));

    pokemonsExperience.value.push(...data);

  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
});
</script>

<template>
  <h1>Hello World</h1>
  <ul>
    <li v-for="pokemon in pokemonsExperience" :key="pokemon.label">
      {{ pokemon.name }}
      {{ pokemon.experience }}
    </li>
  </ul>
  <Graphs :pokemonsExperience="pokemonsExperience" />
  <Table :pokemonsExperience="pokemonsExperience" />
</template>

