<script  setup lang="ts">
 import { ref, onMounted, nextTick  } from 'vue';
 import axios from 'axios';
 import { Chart, registerables } from 'chart.js';
 import Graphs from './components/Graphs.vue';

 const pokemonNames = ref<string[]>(['ditto', 'abra', 'absol', 'aggron', 'altaria', 'bagon', 'breloom' ])

 const pokemons = ref<any[]>([]);
 const pokemonsExperience = ref<{ label: string, y: number, x: number }[]>([]);

 onMounted(async () => {
  try {
    const responses = await Promise.all(
      pokemonNames.value.map((name) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      )
    );

    pokemons.value = responses.map((response) => response.data);

    const data = pokemons.value.map((pokemon) => ({
      label: pokemon.name,
      y: pokemon.base_experience,
      x: 0
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
      {{ pokemon.label }}
      {{ pokemon.y }}
    </li>
  </ul>
  <Graphs />
</template>

