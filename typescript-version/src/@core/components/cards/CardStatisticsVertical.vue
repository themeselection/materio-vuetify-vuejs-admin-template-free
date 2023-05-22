<script setup lang="ts">
interface Props {
  title: string
  color?: string
  icon: string
  stats: string
  change: number
  subtitle: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1)
</script>

<template>
  <VCard>
    <VCardText class="d-flex align-center">
      <VAvatar
        v-if="props.icon"
        size="38"
        :color="props.color"
      >
        <VIcon
          :icon="props.icon"
          size="24"
        />
      </VAvatar>

      <VSpacer />

      <MoreBtn class="me-n3 mt-n1" />
    </VCardText>

    <VCardText>
      <h6 class="text-sm font-weight-semibold mb-2">
        {{ props.title }}
      </h6>
      <div
        v-if="props.change"
        class="d-flex align-center mb-2"
      >
        <span class="font-weight-semibold text-h5 me-2">{{ props.stats }}</span>
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
