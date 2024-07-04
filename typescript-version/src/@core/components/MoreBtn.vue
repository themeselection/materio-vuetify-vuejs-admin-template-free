<script lang="ts" setup>
const props = defineProps<{
  menuList?: unknown[]
  itemProps?: boolean
  iconSize?: string
}

const props = defineProps<Props>()
</script>

<template>
  <IconBtn>
    <VIcon
      :size="iconSize"
      icon="mdi-dots-vertical"
    />

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
