<script setup lang="ts">
import misc404 from '@images/pages/404.png'
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      status-code="404"
      title="Page Not Found ⚠️"
      description="We couldn't find the page you are looking for."
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="misc404"
        alt="Coming Soon"
        :max-width="800"
        class="mx-auto"
      />
      <VBtn
        to="/"
        class="mt-10"
      >
        Back to Home
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";
</style>
