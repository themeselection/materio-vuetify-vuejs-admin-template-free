<script setup lang="ts">
import ThemeSwitcher from '@core/components/ThemeSwitcher.vue'
import type { ThemeSwitcherTheme } from '@layouts/types'

const themes: ThemeSwitcherTheme[] = [
  {
    name: 'light',
    icon: 'mdi-weather-sunny',
  },
  {
    name: 'dark',
    icon: 'mdi-weather-night',
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
