<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme()

const currentTheme = computed(() => vuetifyTheme.current.value.colors)

const series = [
  {
    data: [28, 58, 40, 68],
  },
]

const chartOptions = computed(() => {
  return {
    grid: {
      show: false,
      padding: {
        left: -2,
        top: -10,
      },
    },
    chart: {
      parentHeightOffset: 0,
      type: 'line',
      offsetX: -8,
      dropShadow: {
        enabled: true,
        top: 10,
        blur: 4,

        color: currentTheme.value.primary,
        opacity: 0.09,
      },
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 6,
      colors: 'transparent',
      strokeColors: 'transparent',
      strokeWidth: 4,
      discrete: [
        {
          seriesIndex: 0,

          dataPointIndex: series[0].data.length - 1,
          fillColor: currentTheme.value.surface,
          strokeColor: currentTheme.value.primary,
          size: 6,
        },
      ],
      hover: {
        size: 7,
      },
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      lineCap: 'round',
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },

    colors: [currentTheme.value.primary],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <h6 class="text-h6">
        $35.4k
      </h6>
      <VueApexCharts
        :options="chartOptions"
        :series="series"
        :height="116"
      />

      <h6 class="text-sm text-center font-weight-semibold">
        Total Revenue
      </h6>
    </VCardText>
  </VCard>
</template>
