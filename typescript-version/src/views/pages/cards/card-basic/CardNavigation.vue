<script lang="ts" setup>
const navigationTab = ref('ITEM ONE')
const navigationTab2 = ref('ITEM ONE')
const tabItems = ['ITEM ONE', 'ITEM TWO', 'ITEM THREE']
const tabContent = 'Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards...'
</script>

<template>
  <VRow>
    <VCol
      md="6"
      cols="12"
    >
      <VCard>
        <VTabs v-model="navigationTab">
          <VTab
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            {{ item }}
          </VTab>
        </VTabs>

        <VDivider />

        <!-- tabs content -->
        <VWindow v-model="navigationTab">
          <VWindowItem
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            <VCardItem>
              <VCardTitle>Navigation Card</VCardTitle>
            </VCardItem>

            <VCardText>
              {{ tabContent }}
            </VCardText>

            <VCardText>
              <VBtn>Learn More</VBtn>
            </VCardText>
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>

    <VCol
      md="6"
      cols="12"
    >
      <VCard>
        <VTabs
          v-model="navigationTab2"
          align-tabs="center"
        >
          <VTab
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            {{ item }}
          </VTab>
        </VTabs>

        <VDivider />

        <!-- tabs content -->
        <VWindow v-model="navigationTab2">
          <VWindowItem
            v-for="item in tabItems"
            :key="item"
            :value="item"
            class="text-center"
          >
            <VCardItem>
              <VCardTitle>Navigation Card</VCardTitle>
            </VCardItem>

            <VCardText>{{ tabContent }}</VCardText>

            <VCardText>
              <VBtn>Learn More</VBtn>
            </VCardText>
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
  </VRow>
</template>
