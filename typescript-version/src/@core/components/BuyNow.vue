<template>
  <VBtn
    color="error"
    class="product-buy-now"
    href="https://themeselection.com/item/materio-vuetify-vuejs-admin-template/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Upgrade to Pro
  </VBtn>
</template>

<style lang="scss" scoped>
.product-buy-now {
  position: fixed;
  z-index: 4;
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
