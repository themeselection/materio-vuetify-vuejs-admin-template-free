<template>
  <v-row>
    <!-- basic -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Basic</v-card-title>
        <demo-simple-table-basic></demo-simple-table-basic>
      </v-card>
    </v-col>

    <!-- dark -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Dark</v-card-title>
        <v-card-text>
          Use <code>dark</code> prop to switch table to the dark theme.
        </v-card-text>
        <demo-simple-table-dark></demo-simple-table-dark>
      </v-card>
    </v-col>

    <!-- Dense -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Dense</v-card-title>
        <v-card-text>
          You can show a dense version of the table by using the <code>dense</code> prop.
        </v-card-text>
        <demo-simple-table-dense></demo-simple-table-dense>
      </v-card>
    </v-col>

    <!-- height -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Height</v-card-title>
        <v-card-text>
          Use the <code>height</code> prop to set the height of the table.
        </v-card-text>
        <demo-simple-table-height></demo-simple-table-height>
      </v-card>
    </v-col>

    <!-- fixed header -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Fixed header</v-card-title>
        <v-card-text>
          Use the <code>fixed-header</code> prop together with the <code>height</code> prop to fix the header to the top of the table.
        </v-card-text>

        <demo-simple-table-fixed-header></demo-simple-table-fixed-header>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DemoSimpleTableBasic from './demos/DemoSimpleTableBasic.vue'
import DemoSimpleTableDark from './demos/DemoSimpleTableDark.vue'
import DemoSimpleTableDense from './demos/DemoSimpleTableDense.vue'
import DemoSimpleTableHeight from './demos/DemoSimpleTableHeight.vue'
import DemoSimpleTableFixedHeader from './demos/DemoSimpleTableFixedHeader.vue'

export default {
  components: {
    DemoSimpleTableBasic,
    DemoSimpleTableDark,
    DemoSimpleTableDense,
    DemoSimpleTableHeight,
    DemoSimpleTableFixedHeader,
  },
  setup() {
    return {}
  },
}
</script>
