<script setup>
import { useTheme } from 'vuetify'

const props = defineProps({
  themes: {
    type: Array,
    required: true,
  },
})

const vuetifyTheme = useTheme()
const {
  state: currentTheme,
  next: getNextThemeName,
  index: currentThemeIndex,
} = useCycleList(props.themes.map(t => t.name), { initialValue: vuetifyTheme.global.name.value })
const changeTheme = () => {
  vuetifyTheme.global.name.value = getNextThemeName()
}
const getThemeIcon = computedWithControl(vuetifyTheme.global.name, () => {
  const nextThemeIndex = currentThemeIndex.value + 1 === props.themes.length ? 0 : currentThemeIndex.value + 1
  
  return props.themes[nextThemeIndex].icon
})
watch(vuetifyTheme.global.name, val => {
  currentTheme.value = val
})
</script>

<template>
  <VBtn
    icon
    variant="text"
    color="default"
    size="small"
    @click="changeTheme"
  >
    <VIcon
      :icon="getThemeIcon"
      size="24"
    />
  </VBtn>
</template>
