<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const currentTheme = computed(() => vuetifyTheme.current.value.colors)
const series = [
  {
    name: 'Earning',
    data: [
      180,
      120,
      284,
      180,
      102,
    ],
  },
  {
    name: 'Expense',
    data: [
      -100,
      -130,
      -100,
      -60,
      -120,
    ],
  },
]
const chartOptions = computed(() => {
  return {
    chart: {
      type: 'bar',
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        left: -15,
        right: 0,
        bottom: 5,
      },
      yaxis: { lines: { show: false } },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
      ],
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      currentTheme.value.secondary,
      currentTheme.value.error,
    ],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '25%',
        endingShape: 'rounded',
        startingShape: 'rounded',
      },
    },
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    yaxis: { labels: { show: false } },
    stroke: { lineCap: 'round' },
    tooltip: { enabled: false },
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h6 class="text-h6">
        4,350
      </h6>
      <VueApexCharts
        id="sessions-chart"
        :options="chartOptions"
        :series="series"
        :height="116"
      />

      <h6 class="text-sm text-center font-weight-semibold">
        Sessions
      </h6>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
#sessions-chart {
  .apexcharts-series {
    &[seriesName="Earning"] {
      transform: scaleY(0.965);
    }

    &[seriesName="Expense"] {
      transform: scaleY(1.035);
    }
  }
}
</style>
