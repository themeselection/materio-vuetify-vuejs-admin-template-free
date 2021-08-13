<template>
  <v-menu
    top
    offset-y
    content-class="elevation-9"
    open-on-hover
    close-delay="750"
    :close-on-content-click="false"
    eager
    transition="slide-y-reverse-transition"
    left
    nudge-top="15"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="error"
        class="product-upgrade-to-pro"
        href="https://themeselection.com/demo/materio-vuetify-vuejs-admin-template/landing"
        target="_blank"
        rel="nofollow"
        v-bind="attrs"
        v-on="on"
      >
        Upgrade To Pro
      </v-btn>
    </template>

    <v-card
      class="elevation-0"
      max-width="400"
      href="https://themeselection.com/demo/materio-vuetify-vuejs-admin-template/landing"
      target="_blank"
      rel="nofollow"
    >
      <v-img
        max-width="400"
        eager
        :src="require('@/assets/images/pro/materio-banner.png')"
        alt="materio-pro-banner"
      ></v-img>
      <v-card-title class="font-weight-semibold">
        Materio - Vuetify Admin Template
      </v-card-title>
      <v-card-text>
        Materio Admin is the most developer friendly &amp; highly customisable Admin Dashboard Template based on Vuetify.
      </v-card-text>
      <v-card-text>
        <span>Click on below button to explore PRO version including <strong>3 niche dashboards</strong> and carefully crafted <strong>5 Applications</strong>.</span>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.product-upgrade-to-pro {
  z-index: 4;
  bottom: 5%;
  right: 48px;
  position: fixed;
  .v-application &.v-btn.v-btn--is-elevated {
    box-shadow: 0 1px 20px 1px #ff4c51 !important;
    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>
