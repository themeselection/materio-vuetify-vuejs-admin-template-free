<script lang="ts" setup>
const iconsList = [
  'ri-arrow-left-up-line',
  'ri-arrow-left-up-fill',
  'ri-arrow-up-line',
  'ri-arrow-up-fill',
  'ri-arrow-right-up-line',
  'ri-arrow-right-up-fill',
  'ri-corner-down-left-line',
  'ri-corner-down-left-fill',
  'ri-corner-left-up-line',
  'ri-corner-left-up-fill',
  'ri-corner-left-down-line',
  'ri-corner-left-down-fill',
  'ri-corner-down-right-line',
  'ri-corner-down-right-fill',
  'ri-arrow-up-circle-line',
  'ri-arrow-up-circle-fill',
  'ri-arrow-right-circle-line',
  'ri-arrow-right-circle-fill',
  'ri-arrow-down-circle-line',
  'ri-arrow-down-circle-fill',
  'ri-arrow-left-circle-line',
  'ri-arrow-left-circle-fill',
  'ri-arrow-up-s-line',
  'ri-arrow-up-s-fill',
  'ri-arrow-right-s-line',
  'ri-arrow-right-s-fill',
  'ri-arrow-down-s-line',
  'ri-arrow-down-s-fill',
  'ri-arrow-left-s-line',
  'ri-arrow-left-s-fill',
  'ri-arrow-drop-right-fill',
  ' ri-arrow-drop-down-line',
  ' ri-arrow-drop-down-fill',
  ' ri-arrow-drop-left-line',
  ' ri-arrow-drop-left-fill',
  ' ri-arrow-up-double-line',
  ' ri-arrow-up-double-fill',
  ' ri-arrow-right-double-line',
  ' ri-arrow-right-double-fill',
  ' ri-arrow-down-double-line',
  ' ri-arrow-down-double-fill',
  ' ri-arrow-left-double-line',
  ' ri-arrow-left-double-fill',
  ' ri-corner-up-left-double-line',
  ' ri-corner-up-left-double-fill',
  ' ri-corner-up-right-double-line',
  ' ri-corner-up-right-double-fill',
  ' ri-expand-left-line',
  ' ri-expand-left-fill',
  ' ri-expand-right-line',
  ' ri-expand-right-fill',
  ' ri-contract-left-line',
  ' ri-contract-left-fill',
  ' ri-contract-right-line',
]
</script>

<template>
  <div>
    <div class="d-flex align-center flex-wrap">
      <VCard
        v-for="icon in iconsList"
        :key="icon"
        class="mb-6 me-6"
      >
        <VCardText class="py-3 px-4">
          <VIcon
            size="30"
            :icon="icon"
          />
        </VCardText>

        <!-- tooltips -->
        <VTooltip
          location="top"
          activator="parent"
        >
          {{ icon }}
        </VTooltip>
      </VCard>
    </div>

    <!-- more icons -->
    <div class="text-center">
      <VBtn
        href="https://remixicon.com/"
        rel="noopener noreferrer"
        color="primary"
        target="_blank"
      >
        View All Remix Icons
      </VBtn>
    </div>
  </div>
</template>
