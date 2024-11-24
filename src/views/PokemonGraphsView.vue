<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { ref, watch, nextTick } from 'vue';

import { pokemonNamesData, pokemonExperiencesData } from '../data/pokemonApi';

Chart.register(...registerables);

const chartRef = ref<Chart | null>(null);
const chartCanvas = ref<HTMLCanvasElement | null>(null);

const borderColors = ref<string[]>([]);

function generateHslColor(hue: number, saturation: number, lightness: number): string {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function renderChart() {
  // Destroy previous chart instance if it exists
  if (chartRef.value) {
    chartRef.value.destroy();
  }

  const ctx = chartCanvas.value?.getContext('2d');
  if (ctx) {
    chartRef.value = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: pokemonNamesData.value,
        datasets: [
          {
            label: 'Pokemon experience',
            data: pokemonExperiencesData.value,
            backgroundColor: borderColors.value,
            borderColor: borderColors.value,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                size: window.innerWidth < 640 ? 10 : 12,
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Name',
              font: {
                size: window.innerWidth < 640 ? 10 : 14,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: 'Experience',
              font: {
                size: window.innerWidth < 640 ? 10 : 14,
              },
            },
            beginAtZero: true,
          },
        },
      },
    });
  }
}

watch(
  () => [pokemonNamesData.value, pokemonExperiencesData.value], 
  async ([names, experiences]) => {
    if (names.length && experiences.length) { 
      borderColors.value = names.map((_, index) => 
        generateHslColor(index * 40, 70, 50)
      );
      await nextTick(); 
      renderChart();
    }
  },
  { immediate: true, deep: true } 
);
</script>

<template>
  <h1>I am graph</h1>
  <div class="w-full max-w-[800px] mx-auto">
    <canvas ref="chartCanvas" class="w-full"></canvas>
  </div>
</template>