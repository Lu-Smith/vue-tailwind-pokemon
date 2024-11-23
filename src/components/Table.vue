<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps<{ 
    pokemonExperiencesData: string[],
    pokemonNamesData: number[],
  }>();

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
      <tr v-for="(name, index) in props.pokemonNamesData" :key="index">
        <td>
          {{ name }}
        </td>
        <td>
          {{ props.pokemonExperiencesData[index] || 'N/A' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>