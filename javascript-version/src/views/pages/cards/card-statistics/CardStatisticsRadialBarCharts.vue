<script setup>
import { hexToRgb } from '@layouts/utils'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const currentTheme = computed(() => vuetifyTheme.current.value.colors)
const variableTheme = computed(() => vuetifyTheme.current.value.variables)
const series = [78]
const chartOptions = computed(() => {
  return {
    chart: { sparkline: { enabled: true } },
    colors: [currentTheme.value.info],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: '65%' },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: '1.25rem',
            fontWeight: '600',
            offsetY: 0,
            color: `rgba(${ hexToRgb(currentTheme.value['on-surface']) },${ variableTheme.value['high-emphasis-opacity'] })`,
          },
        },
        track: { background: currentTheme.value.background },
      },
    },
    stroke: { lineCap: 'round' },
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h6 class="text-h6">
        135k
      </h6>
      <VueApexCharts
        id="stats-radial-bar-chart"
        :options="chartOptions"
        :series="series"
        type="radialBar"
        :height="150"
      />

      <h6 class="text-sm text-center font-weight-semibold mt-9">
        Total Revenue
      </h6>
    </VCardText>
  </VCard>
</template>

  <style lang="scss">
  #stats-radial-bar-chart {
    .apexcharts-canvas {
      .apexcharts-text {
        &.apexcharts-datalabel-value {
          font-weight: 600;
        }
      }
    }
  }
  </style>

