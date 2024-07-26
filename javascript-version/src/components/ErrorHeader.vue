<script setup>
const props = defineProps({
  statusCode: {
    type: [
      String,
      Number,
    ],
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="text-center mb-4">
    <!-- 👉 Title and subtitle -->
    <h1
      v-if="props.statusCode"
      class="header-title font-weight-medium"
    >
      {{ props.statusCode }}
    </h1>
    <h5
      v-if="props.title"
      class="text-h5 font-weight-medium mb-3"
    >
      {{ props.title }}
    </h5>
    <p v-if="props.description">
      {{ props.description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.header-title {
  font-size: clamp(3rem, 5vw, 6rem);
  line-height: clamp(3rem, 5vw, 6rem);
}
</style>
