<script setup>
const themes = [
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
