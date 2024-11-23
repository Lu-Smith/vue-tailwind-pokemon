<script  setup lang="ts">
 import { ref, onMounted } from 'vue';
 import axios from 'axios';

 const pokemonNames = ref<string[]>(['ditto', 'abra', 'absol', 'aggron', 'altaria', 'bagon', 'breloom' ])

 const pokemons = ref<any[]>([]);

 onMounted(async () => {
  try {
    const responses = await Promise.all(
      pokemonNames.value.map((name) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      )
    );

    pokemons.value = responses.map((response) => response.data);
    console.log(pokemons.value);
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
});

  const chart = ref(null);
	const options =  ref({
		animationEnabled: true,
		title:{
			text: "Pokemons"
		},
		data: [{
			type: "column",
			dataPoints: [
			{ label: "apple",  y: 10 },
			{ label: "orange", y: 15 },
			{ label: "banana", y: 25 },
			{ label: "mango",  y: 30 },
			{ label: "grape",  y: 28 }
			]
		}]
		})
</script>

<template>
  <h1>Hello World</h1>
  <CanvasJSChart :options="options"/>
</template>

