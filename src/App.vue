<script  setup lang="ts">
 import { ref, onMounted } from 'vue';
 import axios from 'axios';

 const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

 onMounted( async () => {
  try {
    const response = await axios.get(apiUrl);
    const pokemonData = response.data;
    console.log(pokemonData);
  } catch (error) {
    console.error('No pokemon data', error)
  }
 })

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

