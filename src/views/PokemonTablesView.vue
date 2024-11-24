<script setup lang="ts">
import { pokemonsData } from '../data/pokemonApi';

</script>

<template>
  <h2 class="mb-4 text-gray-800">I am a table</h2>
    <table class="min-w-full lg:min-w-0 lg:w-[800px] border border-gray-200 bg-white shadow-md rounded-md overflow-hidden text-center">
      <thead class="bg-gray-100 border-b border-gray-300 text-center">
        <tr>
          <th class="py-2 px-4 text-sm font-semibold text-gray-700">Name</th>
          <th class="py-2 px-4 text-sm font-semibold text-gray-700">Experience</th>
          <th class="py-2 px-4 text-sm font-semibold text-gray-700">Height</th>
          <th class="py-2 px-4 text-sm font-semibold text-gray-700">Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(pokemon, index) in pokemonsData" 
          :key="index" 
          class="border-b last:border-b-0 hover:bg-gray-50"
        >
          <td class="py-2 px-4 text-sm text-gray-800">{{ pokemon.name }}</td>
          <td class="py-2 px-4 text-sm text-gray-800">{{ pokemon.base_experience }}</td>
          <td class="py-2 px-4 text-sm text-gray-800">{{ pokemon.height }}</td>
          <td class="py-2 px-4 text-sm text-gray-800">{{ pokemon.weight }}</td>
        </tr>
      </tbody>
    </table>
</template>