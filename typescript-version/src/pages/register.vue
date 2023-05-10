<script setup lang="ts">
import logo from '@/assets/logo.svg?raw'
import authV2MaskDark from '@images/pages/auth-v2-mask-dark.png'
import authV2MaskLight from '@images/pages/auth-v2-mask-light.png'
import authV2RegisterIllustrationDark from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2RegisterIllustrationLight from '@images/pages/auth-v2-register-illustration-light.png'
import tree2 from '@images/pages/tree-2.png'
import { useTheme } from 'vuetify'

import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'

const username = ref('johnDoe')
const email = ref('john@example.com')
const password = ref('john@MATERIO#123')
const privacyPolicies = ref(true)

const { global } = useTheme()
const imageVariant = computed(() => global.name.value === 'light' ?  authV2RegisterIllustrationLight : authV2RegisterIllustrationDark)
const authThemeMask = computed(() => global.name.value === 'light' ? authV2MaskLight : authV2MaskDark)


const isPasswordVisible = ref(false)
</script>

<template>
  <div>
    <!-- Title and Logo -->
    <div class="auth-logo d-flex align-start gap-x-3">
      <div class="d-flex text-primary" v-html="logo"></div>

      <h1 class="font-weight-medium leading-normal text-2xl text-uppercase">
        Materio
      </h1>
    </div>

    <VRow
      no-gutters
      class="auth-wrapper"
    >
      <VCol
        lg="8"
        class="d-none d-lg-flex align-center justify-center position-relative"
      >
        <div class="d-flex align-center justify-center w-100 pa-10 pe-0">
          <VImg
            max-width="768px"
            :src="imageVariant"
            class="auth-illustration"
          />
        </div>

        <VImg
          :width="150"
          :src="tree2"
          class="auth-footer-start-tree"
        />

        <VImg
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </VCol>

      <VCol
        cols="12"
        lg="4"
        class="auth-card-v2 d-flex align-center justify-center"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 mt-sm-0 pa-4"
        >
          <VCardText>
            <h5 class="text-h5 mb-1">
              Adventure starts here 🚀
            </h5>
            <p class="mb-0">
              Make your app management easy and fun!
            </p>
          </VCardText>

          <VCardText>
            <VForm
              @submit.prevent="$router.push('/')"
            >
              <VRow>
                <!-- Username -->
                <VCol cols="12">
                  <VTextField
                    v-model="username"
                    label="Username"
                  />
                </VCol>

                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="email"
                    label="Email"
                    type="email"
                  />
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    label="Password"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="d-flex align-center mt-1 mb-4">
                    <VCheckbox
                      id="privacy-policy"
                      v-model="privacyPolicies"
                      inline
                    />
                    <VLabel
                      for="privacy-policy"
                      class="pb-1"
                      style="opacity: 1;"
                    >
                      <span class="me-1">I agree to</span>
                      <a
                        href="javascript:void(0)"
                        class="text-primary"
                      >privacy policy & terms</a>
                    </VLabel>
                  </div>

                  <VBtn
                    block
                    type="submit"
                  >
                    Sign up
                  </VBtn>
                </VCol>

                <!-- create account -->
                <VCol
                  cols="12"
                  class="text-center text-base"
                >
                  <span>Already have an account?</span>
                  <RouterLink
                    class="text-primary ms-2"
                    to="/login"
                  >
                    Sign in instead
                  </RouterLink>
                </VCol>

                <VCol
                  cols="12"
                  class="d-flex align-center"
                >
                  <VDivider />
                  <span class="mx-4">or</span>
                  <VDivider />
                </VCol>

                <!-- auth providers -->
                <VCol
                  cols="12"
                  class="text-center"
                >
                  <AuthProvider />
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
