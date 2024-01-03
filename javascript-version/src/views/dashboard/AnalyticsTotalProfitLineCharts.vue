<!-- eslint-disable no-restricted-imports -->
<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [{
  data: [
    0,
    20,
    5,
    30,
    15,
    45,
  ],
}]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  
  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    grid: {
      borderColor: `rgba(${ hexToRgb(String(variableTheme['border-color'])) },${ variableTheme['border-opacity'] })`,
      strokeDashArray: 6,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
      padding: {
        top: -10,
        left: -7,
        right: 5,
        bottom: 5,
      },
    },
    stroke: {
      width: 3,
      lineCap: 'butt',
      curve: 'straight',
    },
    colors: [currentTheme.primary],
    markers: {
      size: 6,
      offsetY: 4,
      offsetX: -2,
      strokeWidth: 3,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [{
        size: 5.5,
        seriesIndex: 0,
        strokeColor: currentTheme.primary,
        fillColor: currentTheme.surface,
        dataPointIndex: series[0].data.length - 1,
      }],
      hover: { size: 7 },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { labels: { show: false } },
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h4 class="text-h4">
        $86.4k
      </h4>
      <VueApexCharts
        type="line"
        :options="chartOptions"
        :series="series"
        :height="80"
        class="my-1"
      />

      <h6 class="text-h6 text-center">
        Total Profit
      </h6>
    </VCardText>
  </VCard>
</template>
