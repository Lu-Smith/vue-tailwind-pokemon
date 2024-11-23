<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{ pokemonsExperience: []} >();
</script>

<template>
    <h2>I am table</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Experience</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pokemonData, index) in pokemonsExperience" :key="index">
        <td >
          {{ pokemonData.name }}
        </td>
        <td >
          {{ pokemonData.experience }}
        </td>
      </tr>
    </tbody>
  </table>
</template>