<script setup lang="ts">
  import { Chart, registerables } from 'chart.js';
  import { ref, onMounted } from 'vue';

  const props = defineProps<{ 
    pokemonExperiencesData:number[],
    pokemonNamesData: string[],
  }>();

  Chart.register(...registerables);

  const chartRef = ref<Chart | null>(null); 
  const chartCanvas = ref<HTMLCanvasElement | null>(null);

  function renderChart() {
  // Destroy the previous chart 
  if (chartRef.value) {
    chartRef.value.destroy();
  }

  const ctx = chartCanvas.value?.getContext('2d');
  if (ctx) {
    chartRef.value = new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: props.pokemonNamesData,
            datasets: [
                {
                    label: 'Pokemon experience',
                    data: props.pokemonExperiencesData,
                    backgroundColor: 'rgba(68, 179, 92, 0.6)', 
                    borderColor: 'rgba(68, 179, 92, 1)',
                    borderWidth: 1,
                    type: 'bar',
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

onMounted(() => {
  renderChart();
})
</script>

<template>
  <div>
    <h1>I am graph</h1>
    <canvas ref="chartCanvas" class="w-full"></canvas>
  </div>
</template>