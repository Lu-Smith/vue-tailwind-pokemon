<script  setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getExchangeRates, getProductBenchmarks } from '../data/benchmarksApi';
  import ProductBenchmarks from '../assets/interfaces';
  import ExchangeRates from '../assets/interfaces';
  import Transaction from '../assets/interfaces';

  const headTitles = ref(['ID', 'Provider', 'Product', 'Benchmark (€)', 'Payment (€)', 'Date']);

  const transactions = ref<Transaction[]>([]);

  const processBenchmarksData = (benchmarks: ProductBenchmarks[], exchangeRates: ExchangeRates[]): Transaction[] => {

    const transactionsList: Transaction[] = [];

    const euroCurrencyId = benchmarks.find(
      benchmark => benchmark.currency.name === 'EUR'
    )?.currency.id;

    for (const benchmark of benchmarks) {
      const {id, provider_name, product_name, 
        currency, benchmark: benchmarkValue, payment, 
        start_date} = benchmark;

      let convertedPayment = payment;
      let convertedBenchmark = benchmarkValue;

      if (currency.name !== 'EUR') {
        const start_year = new Date(benchmark.start_date).getFullYear();
        const exchangeRate = exchangeRates.find(
          rate => rate.from_currency_id === currency.id && rate.year === start_year  && rate.to_currency_id === euroCurrencyId
        );
        if(exchangeRate) {
          const rate = exchangeRate.exchange_rate;
          convertedBenchmark = benchmarkValue * rate;
          convertedPayment = payment * rate;
        } else {
          console.warn('Rate no found');
        }
      }

      transactionsList.push({
        id,
        provider_name,
        product_name,
        payment: +convertedPayment.toFixed(2),
        benchmark: +convertedBenchmark.toFixed(2),
        currency,
        start_date,
      } as Transaction);
    
    };

    return transactionsList;
  }

  onMounted(async () =>{
    try{
      const produckBenchmarks = await getProductBenchmarks();
      const exchangeRates = await getExchangeRates();

      transactions.value = processBenchmarksData(produckBenchmarks.product_benchmarks, exchangeRates.exchange_rates);
    } catch(error) {
      console.error('Failed to fetch data:', error);
    }
  });
</script>


<template>
  <table v-if="transactions.length">
    <thead>
      <tr>
        <th v-for="(title, index) in headTitles" :key="index">{{ title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.provider_name }}</td>
        <td>{{ transaction.product_name }}</td>
        <td>{{ transaction.benchmark }}</td>
        <td>{{ transaction.payment }}</td>
        <td>{{ transaction.start_date }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>Loading transactions...</p>
</template>