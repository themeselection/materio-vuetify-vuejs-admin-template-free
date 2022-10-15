<script setup lang="ts">
import illustrationJohn from '@/assets/images/cards/illustration-john.png'
</script>

<template>
  <VCard class="pa-2 overflow-visible">
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="6"
      >
        <VCardItem>
          <VCardTitle class="text-md-h5 flex-wrap">
            <span class="me-1">Welcome back</span><strong class="me-1">John!</strong><span>🥳</span>
          </VCardTitle>
        </VCardItem>

        <VCardText class="mt-3">
          You have 4 tasks to finish today,
          <br>
          You already completed 68% 😍 tasks. Good job!
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="6"
        class="text-center"
      >
        <img
          :src="illustrationJohn"
          class="john-illustration"
          :height="$vuetify.display.xs ? '165' : '200'"
          :class="$vuetify.display.xs ? 'position-relative' : 'position-absolute'"
        >
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.john-illustration {
  inset-block-end: -0.0625rem;
  inset-inline-end: 0;
}
</style>
