import { ref, onMounted } from 'vue';
import axios from 'axios';

const pokemonNames = ref<string[]>(['ditto', 'abra', 'absol', 'aggron', 'altaria', 'bagon', 'breloom' ])

const pokemonsData = ref<any[]>([]);
const pokemonExperiencesData = ref<number[]>([]);
const pokemonNamesData = ref<string[]>([]);

async function fetchPokemonData() {
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
};

export { pokemonsData, pokemonExperiencesData, pokemonNamesData, fetchPokemonData};


