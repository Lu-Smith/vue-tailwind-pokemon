<script setup lang="ts">
  import { Chart, registerables } from 'chart.js';
  import { ref } from 'vue';

  Chart.register(...registerables);

  const chartRef = ref<Chart | null>(null); 
  const chartCanvas = ref<HTMLCanvasElement | null>(null);
</script>

<template>
  <div>
    <h1>I am graph</h1>
    <canvas ref="chartCanvas" class="w-full"></canvas>
  </div>
</template>