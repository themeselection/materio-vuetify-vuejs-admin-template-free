<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme()

const currentTheme = computed(() => vuetifyTheme.current.value.colors)

const series = [
  {
    name: '2020',
    data: [45, 85, 65, 50, 70],
  },
]

const chartOptions = computed(() => {
  const backgroundColor = currentTheme.value.background

  return {
    chart: {
      type: 'bar',
      stacked: false,
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        left: -7,
        right: 0,
        bottom: 5,
      },
    },
    colors: [currentTheme.value.error, currentTheme.value.primary, currentTheme.value.error, currentTheme.value.primary, currentTheme.value.primary],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        borderRadius: 4,
        startingShape: 'rounded',
        endingShape: 'rounded',
        distributed: true,
        colors: {
          backgroundBarColors: [backgroundColor, backgroundColor, backgroundColor, backgroundColor, backgroundColor],
          backgroundBarRadius: 5,
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h6 class="text-h6">
        2,856
      </h6>

      <VueApexCharts
        :options="chartOptions"
        :series="series"
        :height="110"
      />

      <h6 class="text-sm text-center font-weight-semibold">
        Sessions
      </h6>
    </VCardText>
  </VCard>
</template>
