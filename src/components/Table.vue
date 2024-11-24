<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps<{ 
    pokemonsData : any[]
  }>();

</script>

<template>
    <h2>I am table</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Experience</th>
        <th>Height</th>
        <th>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pokemon, index) in props.pokemonsData" :key="index">
        <td>
          {{ pokemon.name }}
        </td>
        <td>
          {{ pokemon.base_experience }}
        </td>
        <td>
          {{ pokemon.height }}
        </td>
        <td>
          {{ pokemon.weight }}
        </td>
      </tr>
    </tbody>
  </table>
</template>