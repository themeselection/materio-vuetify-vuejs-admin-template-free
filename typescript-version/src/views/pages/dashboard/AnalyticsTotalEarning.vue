<script setup lang="ts">
import aviato from '@images/logos/aviato.png'
import bitbank from '@images/logos/bitbank.png'
import zipcar from '@images/logos/zipcar.png'

const earnings = [
  {
    avatar: zipcar,
    title: 'Zipcar',
    subtitle: 'Vuejs, React & HTML',
    amount: '$24,895.65',
    progress: 'primary',
  },
  {
    avatar: bitbank,
    title: 'Bitbank',
    subtitle: 'Sketch, Figma & XD',
    amount: '$8,6500.20',
    progress: 'info',
  },
  {
    avatar: aviato,
    title: 'Aviato',
    subtitle: 'HTML & Anguler',
    amount: '$1,2450.80',
    progress: 'secondary',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Total Earning</VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText class="pt-4">
      <div class="d-flex align-center">
        <h4 class="text-h4 me-2">
          $24,895
        </h4>

        <span class="text-success">
          <VIcon
            size="30"
            icon="mdi-menu-up"
          />
          <span>10%</span>
        </span>
      </div>
      <span class="text-xs">Compared to $84,325 last year</span>

      <VList class="card-list mt-9">
        <VListItem
          v-for="earning in earnings"
          :key="earning.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              :image="earning.avatar"
            />
          </template>

          <VListItemTitle class="text-sm font-weight-medium mb-1">
            {{ earning.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ earning.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div>
              <h6 class="text-sm font-weight-medium mb-2">
                {{ earning.amount }}
              </h6>
              <VProgressLinear
                :color="earning.progress"
                model-value="80"
              />
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2.625rem;
}
</style>
