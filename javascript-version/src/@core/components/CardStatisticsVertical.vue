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
    type: String,
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
})

const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1)
</script>

<template>
  <VCard>
    <VCardText class="d-flex align-center">
      <VAvatar
        v-if="props.icon"
        size="40"
        :color="props.color"
        class="elevation-2"
      >
        <VIcon
          :icon="props.icon"
          size="24"
        />
      </VAvatar>

      <VSpacer />

      <VBtn
        size="x-small"
        variant="text"
        color="default"
        class="me-n3 mt-n1"
        icon
      >
        <VIcon
          size="24"
          icon="mdi-dots-vertical"
        />
      </VBtn>
    </VCardText>

    <VCardText>
      <h6 class="text-sm font-weight-semibold mb-2">
        {{ props.title }}
      </h6>
      <div
        v-if="props.change"
        class="d-flex align-center mb-2"
      >
        <span class="font-weight-semibold text-h6 me-2">{{ props.stats }}</span>
        <span
          :class="isPositive ? 'text-success' : 'text-error'"
          class="text-caption"
        >
          {{ isPositive ? `+${props.change}` : props.change }}%
        </span>
      </div>
      <span class="text-caption">{{ props.subtitle }}</span>
    </VCardText>
  </VCard>
</template>
