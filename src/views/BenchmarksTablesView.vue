<script  setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getProductBenchmarks } from '../data/benchmarksApi';
  import ProductBenchmarks from '../assets/interfaces';

  const headTitles = ref(['ID', 'Provider Name', 'Provider Name', 
  'Benchmark', 'Payment', 'Date', 'Period Length']);
 
  const benchmarksData = ref<ProductBenchmarks[]>([]);

  const processBenchmarksData = (benchmarks: ProductBenchmarks[]) => {
    console.log(benchmarks);
    const newBenchmarks: ProductBenchmarks[] = [];

    for (const benchmark of benchmarks) {
      const {id, provider_name, product_name, 
        currency, benchmark: benchmarkValue, payment, 
        start_date, end_date} = benchmark;

      newBenchmarks.push({
      id,
      provider_name,
      product_name,
      payment,
      benchmark: benchmarkValue,
      start_date,
      end_date,
      currency,
    });
    
    };



    return newBenchmarks;
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
  <table>
    <thead>
      <tr>
        <th v-for="(title, index) in headTitles" :key="index">{{ title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="benchmark in benchmarksData" :key="benchmark.id">
        <td>{{ benchmark.id }}</td>
        <td>{{ benchmark.provider_name }}</td>
        <td>{{ benchmark.product_name }}</td>
        <td>{{ benchmark.benchmark }}</td>
        <td>{{ benchmark.payment }}</td>
        <td>{{ benchmark.start_date }}</td>
      </tr>
    </tbody>
  </table>
</template>