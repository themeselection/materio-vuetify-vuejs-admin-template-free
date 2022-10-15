<script setup lang="ts">
const statistics = [
  {
    title: 'Sales',
    stats: '245k',
    icon: 'mdi-trending-up',
    color: 'primary',
  },
  {
    title: 'Customers',
    stats: '12.5k',
    icon: 'mdi-account-outline',
    color: 'success',
  },
  {
    title: 'Product',
    stats: '1.54k',
    icon: 'mdi-cellphone-link',
    color: 'warning',
  },
  {
    title: 'Revenue',
    stats: '$88k',
    icon: 'mdi-currency-usd',
    color: 'info',
  },
]
</script>

<template>
  <VCard title="Transactions">
    <VCardText>
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          md="3"
        >
          <div class="d-flex align-center">
            <VAvatar
              :color="item.color"
              rounded
              size="42"
              class="elevation-1 me-3"
            >
              <VIcon
                size="24"
                :icon="item.icon"
              />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-caption">
                {{ item.title }}
              </span>
              <span class="text-h6 font-weight-medium">{{ item.stats }}</span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
