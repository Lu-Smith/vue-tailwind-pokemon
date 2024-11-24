<script  setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getProductBenchmarks } from '../data/benchmarksApi';
  import ProductBenchmarks from '../assets/interfaces';

  const benchmarksData = ref<ProductBenchmarks[]>([]);

  const processBenchmarksData = (benchmarks: ProductBenchmarks[]) => {
    console.log(benchmarks);
    return benchmarks;
  }

  onMounted(async () =>{
    try{
      const produckBenchmarks = await getProductBenchmarks();

      benchmarksData.value = processBenchmarksData(produckBenchmarks.product_benchmarks);
    } catch(error) {
      console.error('Failed to fetch data:', error);
    }
  });
</script>


<template>
  I am Benchmarks Tables

</template>