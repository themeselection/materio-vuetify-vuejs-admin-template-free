<template>
  <v-row class="match-height">
    <!-- horizontal -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>Horizontal Form</v-card-title>
        <v-card-text>
          <demo-form-layout-horizontal></demo-form-layout-horizontal>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- horizontal form with icons -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>Horizontal Form with Icons</v-card-title>
        <v-card-text>
          <demo-form-layout-horizontal-icon></demo-form-layout-horizontal-icon>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Vertical Form -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>Vertical Form</v-card-title>
        <v-card-text>
          <demo-form-layout-vertical-form></demo-form-layout-vertical-form>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- vertical form icons -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>Vertical Form with Icons</v-card-title>
        <v-card-text>
          <demo-form-layout-vertical-form-with-icons></demo-form-layout-vertical-form-with-icons>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Multiple Column -->
    <v-col cols="12">
      <v-card>
        <v-card-title>Multiple Column</v-card-title>
        <v-card-text>
          <demo-form-layout-multiple-column></demo-form-layout-multiple-column>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DemoFormLayoutHorizontal from './demos/DemoFormLayoutHorizontal.vue'
import DemoFormLayoutHorizontalIcon from './demos/DemoFormLayoutHorizontalIcon.vue'
import DemoFormLayoutVerticalForm from './demos/DemoFormLayoutVerticalForm.vue'
import DemoFormLayoutVerticalFormWithIcons from './demos/DemoFormLayoutVerticalFormWithIcons.vue'
import DemoFormLayoutMultipleColumn from './demos/DemoFormLayoutMultipleColumn.vue'

export default {
  components: {
    DemoFormLayoutHorizontal,
    DemoFormLayoutHorizontalIcon,
    DemoFormLayoutVerticalForm,
    DemoFormLayoutVerticalFormWithIcons,
    DemoFormLayoutMultipleColumn,
  },
  setup() {
    return {}
  },
}
</script>
