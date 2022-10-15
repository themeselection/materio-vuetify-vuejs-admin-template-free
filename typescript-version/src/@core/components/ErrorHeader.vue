<script setup lang="ts">
interface Props {
  errorCode: string
  errorTitle: string
  errorDescription: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="text-center mb-4">
    <!-- 👉 Title and subtitle -->
    <h1 class="text-h1">
      {{ props.errorCode }}
    </h1>
    <h5 class="text-h5 mb-1">
      {{ props.errorTitle }}
    </h5>
    <p class="text-sm">
      {{ props.errorDescription }}
    </p>
  </div>
</template>
