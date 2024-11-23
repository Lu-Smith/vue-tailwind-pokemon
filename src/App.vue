<script  setup lang="ts">
 import { ref, onMounted, computed, toRaw } from 'vue';
 import axios from 'axios';

 const pokemonNames = ref<string[]>(['ditto', 'abra', 'absol', 'aggron', 'altaria', 'bagon', 'breloom' ])

 const pokemons = ref<any[]>([]);
 const pokemonsExperience = ref<{ label: string; y: number }[]>([]);

 onMounted(async () => {
  try {
    const responses = await Promise.all(
      pokemonNames.value.map((name) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      )
    );

    pokemons.value = responses.map((response) => response.data);

    pokemons.value.forEach((pokemon) => {
      pokemonsExperience.value.push({
        label: pokemon.name,
        y: pokemon.base_experience
      });
      
      console.log('Pokemons Experience:', pokemonsExperience.value);
      console.log('First item in data:', pokemonsExperience.value[0]); 
    });
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
});


console.log('Pokemons Experience:', pokemonsExperience.value);
console.log('First item in data:', pokemonsExperience.value[0]); 


const chart = ref(null);
const options =  ref({
  animationEnabled: true,
  title:{
    text: "Pokemons Experience"
  },
  data: [{
    type: "column",
    dataPoints: pokemonsExperience.value[0],
  }]
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
  <CanvasJSChart :options="options"/>
</template>

