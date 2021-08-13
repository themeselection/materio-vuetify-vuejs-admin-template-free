<template>
  <v-row>
    <v-col
      md="6"
      cols="12"
    >
      <v-card>
        <v-tabs
          v-model="tab"
          class="tab-index"
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item"
            class="mt-2"
          >
            <v-card-title>
              Navigation Card
            </v-card-title>
            <v-card-text v-text="text"></v-card-text>

            <v-card-text>
              <v-btn color="primary">
                Learn More
              </v-btn>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <v-card>
        <v-tabs
          v-model="tab2"
          centered
          class="tab-index"
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab2">
          <v-tab-item
            v-for="item in items"
            :key="item"
            class="text-center mt-2"
          >
            <v-card-title class="d-flex justify-center">
              Navigation Card
            </v-card-title>
            <v-card-text v-text="text"></v-card-text>

            <v-card-text>
              <v-btn color="primary">
                Learn More
              </v-btn>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  setup() {
    return {
      tab: null,
      tab2: null,
      items: ['ITEM ONE', 'ITEM TWO', 'ITEM THREE'],
      text: 'Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards…',
    }
  },
}
</script>

<style lang="scss" scoped>
.tab-index {
  position: relative;
  z-index: 1;
}
</style>
