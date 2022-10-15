<script setup lang="ts">
import illustrationJohn2 from '@/assets/images/cards/illustration-john-2.png'
</script>

<template>
  <VCard class="pa-2 overflow-visible">
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="6"
        order="2"
        order-sm="1"
      >
        <VCardItem>
          <VCardTitle class="text-md-h5">
            <span class="me-1">Congratulations</span><strong class="me-1">John!</strong><span>🎉</span>
          </VCardTitle>
        </VCardItem>

        <VCardText class="mt-3">
          You have done 72% 🤩 more sales today.
          <br>
          Check your new raising badge in your profile.
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="6"
        order="1"
        order-sm="2"
        class="text-center"
      >
        <img
          :src="illustrationJohn2"
          :height="$vuetify.display.xs ? '165' : '200'"
          :class="$vuetify.display.xs ? 'position-relative' : 'position-absolute'"
          class="john-illustration flip-in-rtl"
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
