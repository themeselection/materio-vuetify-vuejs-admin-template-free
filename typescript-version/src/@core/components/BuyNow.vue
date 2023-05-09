<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const vm = getCurrentInstance()

const buyNowUrl = ref(vm?.appContext.config.globalProperties.buyNowUrl || 'https://themeselection.com/item/materio-vuetify-vuejs-admin-template/')

watch(buyNowUrl, val => {
  if (vm)
    vm.appContext.config.globalProperties.buyNowUrl = val
})

onMounted(() => {
  const { marketplace } = route.query

  if (marketplace === 'vuetify')
    buyNowUrl.value = 'https://store.vuetifyjs.com/products/materio-vuetify-vuejs-admin-template'
})
</script>

<template>
  <VBtn
    color="error"
    class="product-buy-now"
    :href="buyNowUrl"
    target="_blank"
    rel="noopener noreferrer"
  >
    Buy Now
  </VBtn>
</template>

<style lang="scss" scoped>
.product-buy-now {
  position: fixed;

  // To keep buy now button on top of v-layout. E.g. Email app
  z-index: 999;
  inset-block-end: 5%;
  inset-inline-end: 79px;

  .v-application &.v-btn.v-btn--elevated {
    box-shadow: 0 1px 20px 1px rgb(var(--v-theme-error)) !important;

    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>
