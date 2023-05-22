<script lang="ts" setup>
interface Props {
  menuList?: unknown[]
  itemProps?: boolean
}

const props = defineProps<Props>()
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
