<template>
  <a
    color="error"
    class="buy-now-button"
    href="https://themeselection.com/item/materio-vuetify-vuejs-admin-template/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Upgrade to Pro

    <span class="button-inner" />

    <VMenu
      open-on-hover
      activator="parent"
      offset="15"
      max-width="400px"
      :close-on-content-click="false"
      transition="slide-y-reverse-transition"
    >
      <VCard>
        <VImg src="https://cdn.themeselection.com/ts-assets/materio/materio-vuetify-vuejs-admin-template/banner/banner.png" />
        <VCardTitle>Materio - Vuetify Admin Template</VCardTitle>
        <VCardText>
          Materio Admin is the most developer friendly & highly customisable Admin Dashboard Template based on Vuetify.
        </VCardText>
        <VCardText>Click on below button to explore PRO version.</VCardText>
        <VCardText>
          <VBtn
            class="me-4"
            href="https://themeselection.com/item/materio-vuetify-vuejs-admin-template/?tab=details#details"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </VBtn>
          <VBtn
            variant="outlined"
            href="https://themeselection.com/item/materio-vuetify-vuejs-admin-template/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </VBtn>
        </VCardText>
      </VCard>
    </VMenu>
  </a>
</template>

<style lang="scss" scoped>
.buy-now-button,
.button-inner {
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  margin: 0;
  animation: anime 12s linear infinite;
  appearance: none;
  background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
  background-size: 600%;
  color: rgba(255, 255, 255, 90%);
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.43px;
  line-height: 1.2;
  min-inline-size: 50px;
  outline: 0;
  padding-block: 0.625rem;
  padding-inline: 1.25rem;
  text-decoration: none;
  text-transform: none;
  vertical-align: middle;
}

.buy-now-button {
  position: fixed;
  z-index: 999;
  inset-block-end: 5%;
  inset-inline-end: 79px;

  &:hover {
    color: white;
    text-decoration: none;
  }

  .button-inner {
    position: absolute;
    z-index: -1;
    filter: blur(12px);
    inset: 0;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  &:not(:hover) .button-inner {
    opacity: 0.8;
  }
}

@keyframes anime {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
