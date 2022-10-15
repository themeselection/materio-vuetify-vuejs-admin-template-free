<script lang="ts" setup>
import type { NavSectionTitle } from '@layouts/types'

defineProps<NavSectionTitle>()
</script>

<template>
  <li class="nav-section-title">
    <div class="title-wrapper">
      <Transition
        name="vertical-nav-section-title"
        mode="out-in"
      >
        <!-- eslint-disable vue/no-v-text-v-html-on-component -->
        <span
          class="title-text"
          v-text="heading"
        />
        <!-- eslint-enable vue/no-v-text-v-html-on-component -->
      </Transition>
    </div>
  </li>
</template>
