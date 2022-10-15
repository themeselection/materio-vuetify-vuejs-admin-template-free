<script setup lang="ts">
import BuyNow from '@core/components/BuyNow.vue'
</script>

<template>
  <VApp>
    <VLayout class="layout-wrapper layout-nav-type-vertical">
      <RouterView />
      <BuyNow />
    </VLayout>
  </VApp>
</template>
