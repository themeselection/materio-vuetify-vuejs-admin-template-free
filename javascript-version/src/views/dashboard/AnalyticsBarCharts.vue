<script setup>
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const currentTheme = computed(() => vuetifyTheme.current.value.colors)

const series = [{
  name: '2020',
  data: [
    35,
    85,
    55,
    50,
    70,
  ],
}]

const chartOptions = computed(() => {
  const backgroundColor = currentTheme.value['track-bg']
  
  return {
    chart: {
      type: 'bar',
      stacked: false,
      width: 200,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        left: -7,
        right: 0,
        bottom: -5,
      },
    },
    colors: [
      currentTheme.value.error,
      currentTheme.value.primary,
      currentTheme.value.error,
      currentTheme.value.primary,
      currentTheme.value.primary,
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        borderRadius: 4,
        distributed: true,
        colors: {
          backgroundBarColors: [
            backgroundColor,
            backgroundColor,
            backgroundColor,
            backgroundColor,
            backgroundColor,
          ],
          backgroundBarRadius: 5,
        },
      },
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    tooltip: { enabled: false },
    responsive: [
      {
        breakpoint: 1628,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '20%',
              borderRadius: 2,
            },
          },
        },
      },
      {
        breakpoint: 960,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '15%',
              borderRadius: 6,
            },
          },
        },
      },
      {
        breakpoint: 725,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '15%',
              borderRadius: 4,
            },
          },
        },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h4 class="text-h4">
        2,856
      </h4>

      <VueApexCharts
        :options="chartOptions"
        :series="series"
        :height="80"
        class="my-1"
      />

      <h6 class="text-h6 text-center">
        Sessions
      </h6>
    </VCardText>
  </VCard>
</template>
