<script lang="ts" setup>
const props = defineProps<{
  menuList?: unknown[]
  itemProps?: boolean
}>()
</script>

<template>
  <IconBtn>
    <VIcon icon="mdi-dots-vertical" />

    <VMenu
      v-if="props.menuList"
      activator="parent"
    >
      <VList
        :items="props.menuList"
        :item-props="props.itemProps"
      />
    </VMenu>
  </IconBtn>
</template>
