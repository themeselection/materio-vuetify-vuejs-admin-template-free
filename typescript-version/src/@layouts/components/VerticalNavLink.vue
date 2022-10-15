<script lang="ts" setup>
import type { NavLink } from '@layouts/types'
import { getComputedNavLinkToProp } from '@layouts/utils'

const props = defineProps<NavLink>()
</script>

<template>
  <li
    class="nav-link"
    :class="{ disabled: disable }"
  >
    <Component
      :is="to ? 'RouterLink' : 'a'"
      v-bind="getComputedNavLinkToProp({ ...props })"
    >
      <VIcon
        v-bind="icon"
        class="nav-item-icon"
      />
      <TransitionGroup name="transition-slide-x">
        <!-- 👉 Title -->
        <span
          key="title"
          class="nav-item-title"
        >
          {{ title }}
        </span>

        <!-- 👉 Badge -->
        <span
          v-if="badgeContent"
          key="badge"
          class="nav-item-badge"
          :class="badgeClass"
        >
          {{ badgeContent }}
        </span>
      </TransitionGroup>
    </Component>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
