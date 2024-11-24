<script setup>
  import { ref } from 'vue';
  import { RouterLink} from 'vue-router';

  const headerLinks = ref([
    { key: '/', label: 'Home' },
    { key: '/pokemon-graphs', label: 'Pokemon Graphs' },
    { key: '/pokemon-tables', label: 'Pokemon Tables' },
  ]);
</script>

<template>
  <nav class="flex justify-between items-center flex-row p-4">
    <ul class="flex justify-between items-center flex-row gap-4 h-full ">
      <li v-for="(headerLink,index) in headerLinks" :key="index" class="h-full">
        <RouterLink 
        :to="headerLink.key"
        activeClass="text-red-500"
        >{{ headerLink.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

