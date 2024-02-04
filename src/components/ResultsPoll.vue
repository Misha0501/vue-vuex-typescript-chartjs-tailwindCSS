<template>
  <div class="flex flex-col justify-between">
    <div>
      <p v-if="isValidPoll" class="break-all mb-3 text-center">{{ question }}</p>
      <canvas ref="chartRef"></canvas>
    </div>
    <div>
      Total votes: <span data-testid="total-votes">{{ totalVotes }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, shallowRef, watch } from 'vue'
import { Chart, registerables } from 'chart.js'
import { useStore } from 'vuex'

Chart.register(...registerables)

const chartRef = ref<HTMLCanvasElement | null>(null)
const myChart = shallowRef<Chart | null>(null)
const store = useStore()
const totalVotes = computed(() => store.getters.totalVotes)
const question = computed(() => store.state.question)
const isValidPoll = computed(() => store.getters.isValidPoll)

// Initialize an array to store colors persistently
const backgroundColors = []

const updateChartData = () => {
  const answers = store.state.answers
  const labels = answers.map((a) => a.text)
  const data = answers.map((a) => a.votes)

  // Only generate new colors if the array size has changed (new answers added)
  if (backgroundColors.length !== answers.length) {
    backgroundColors.length = 0 // Reset the array to ensure colors match new answers
    for (let i = 0; i < answers.length; i++) {
      backgroundColors.push(
        `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`
      )
    }
  }

  if (myChart.value) {
    myChart.value.data.labels = labels
    myChart.value.data.datasets[0].data = data
    myChart.value.data.datasets[0].backgroundColor = backgroundColors
    myChart.value.update()
  } else {
    const ctx = chartRef.value?.getContext('2d')
    if (ctx) {
      myChart.value = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Votes',
              data,
              backgroundColor: backgroundColors
            }
          ]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }
  }
}

onMounted(updateChartData)

// Deep watching the answers array for changes
watch(() => store.state.answers, updateChartData, { deep: true })
</script>
