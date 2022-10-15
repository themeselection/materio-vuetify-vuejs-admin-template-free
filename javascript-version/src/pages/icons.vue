<script setup>
const iconsList = [
  'mdi-ab-testing',
  'mdi-abacus',
  'mdi-abjad-arabic',
  'mdi-abjad-hebrew',
  'mdi-abugida-devanagari',
  'mdi-abugida-thai',
  'mdi-access-point',
  'mdi-access-point-check',
  'mdi-access-point-minus',
  'mdi-access-point-network',
  'mdi-access-point-network-off',
  'mdi-access-point-off',
  'mdi-access-point-plus',
  'mdi-access-point-remove',
  'mdi-account-alert-outline',
  'mdi-account-arrow-left-outline',
  'mdi-account-arrow-right-outline',
  'mdi-account-box-multiple-outline',
  'mdi-account-box-outline',
  'mdi-account-cancel-outline',
  'mdi-account-cash-outline',
  'mdi-account-check-outline',
  'mdi-account-child-outline',
  'mdi-account-circle-outline',
  'mdi-account-clock-outline',
  'mdi-account-cog-outline',
  'mdi-account-details-outline',
  'mdi-alarm-light-outline',
  'mdi-alert-box-outline',
  'mdi-alert-circle-check-outline',
  'mdi-alert-decagram-outline',
  'mdi-alert-minus-outline',
  'mdi-alert-outline',
  'mdi-alert-plus-outline',
  'mdi-check-outline',
  'mdi-clipboard-outline',
  'mdi-clipboard-play-outline',
  'mdi-close-outline',
  'mdi-cloud-check-outline',
  'mdi-cloud-download-outline',
  'mdi-cog-outline',
  'mdi-compass-off-outline',
  'mdi-contactless-payment-circle-outline',
  'mdi-crown-outline',
  'mdi-delete-outline',
  'mdi-diamond-outline',
  'mdi-email-open-outline',
  'mdi-emoticon-happy-outline',
  'mdi-file-multiple-outline',
  'mdi-flask-empty-outline',
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
        href="https://materialdesignicons.com/"
        rel="noopener noreferrer"
        color="primary"
        target="_blank"
      >
        View All Material Design Icons
      </VBtn>
    </div>
  </div>
</template>
