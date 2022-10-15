<script setup>
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const authProviders = [
  {
    icon: 'mdi-facebook',
    color: '#4267b2',
    colorInDark: '#4267b2',
  },
  {
    icon: 'mdi-twitter',
    color: '#1da1f2',
    colorInDark: '#1da1f2',
  },
  {
    icon: 'mdi-github',
    color: '#272727',
    colorInDark: '#fff',
  },
  {
    icon: 'mdi-google',
    color: '#db4437',
    colorInDark: '#db4437',
  },
]
</script>

<template>
  <VBtn
    v-for="link in authProviders"
    :key="link.icon"
    :icon="link.icon"
    variant="text"
    :color="vuetifyTheme.global.name.value === 'dark' ? link.colorInDark : link.color"
  />
</template>
