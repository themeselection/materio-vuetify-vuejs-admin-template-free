<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'primary',
  },
  icon: {
    type: String,
    required: true,
  },
  stats: {
    type: Number,
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
})

const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1)
</script>

<template>
  <VCard>
    <VCardText class="d-flex align-center">
      <VAvatar
        size="44"
        rounded
        :color="props.color"
        variant="tonal"
        class="me-4"
      >
        <VIcon
          :icon="props.icon"
          size="30"
        />
      </VAvatar>

      <div>
        <span class="text-caption">{{ props.title }}</span>
        <div class="d-flex align-center flex-wrap">
          <span class="text-h6 font-weight-semibold">{{ kFormatter(props.stats) }}</span>
          <div
            v-if="props.change"
            :class="`${isPositive ? 'text-success' : 'text-error'} mt-1`"
          >
            <VIcon
              :icon="isPositive ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"
              size="24"
            />
            <span class="text-base">
              {{ Math.abs(props.change) }}%
            </span>
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
