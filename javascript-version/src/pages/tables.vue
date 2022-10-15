<script setup>
import TableBasic from '@/views/user-interface/tables/TableBasic.vue'
import TableDark from '@/views/user-interface/tables/TableDark.vue'
import TableDensity from '@/views/user-interface/tables/TableDensity.vue'
import TableHeight from '@/views/user-interface/tables/TableHeight.vue'
import TableFixedHeader from '@/views/user-interface/tables/TableFixedHeader.vue'
</script>

<template>
  <VRow>
    <!-- basic -->
    <VCol cols="12">
      <VCard title="Basic">
        <TableBasic />
      </VCard>
    </VCol>

    <!-- dark -->
    <VCol cols="12">
      <VCard title="Dark">
        <VCardText>
          Use <code>dark</code> prop to switch table to the dark theme.
        </VCardText>
        <TableDark />
      </VCard>
    </VCol>

    <!-- Dense -->
    <VCol cols="12">
      <VCard title="Dense">
        <VCardText>
          You can show a dense version of the table by using the <code>dense</code> prop.
        </VCardText>
        <TableDensity />
      </VCard>
    </VCol>

    <!-- height -->
    <VCol cols="12">
      <VCard title="Height">
        <VCardText>
          Use the <code>height</code> prop to set the height of the table.
        </VCardText>
        <TableHeight />
      </VCard>
    </VCol>

    <!-- fixed header -->
    <VCol cols="12">
      <VCard title="Fixed header">
        <VCardText>
          Use the <code>fixed-header</code> prop together with the <code>height</code> prop to fix the header to the top of the table.
        </VCardText>

        <TableFixedHeader />
      </VCard>
    </VCol>
  </VRow>
</template>
