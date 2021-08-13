<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Total Earning</span>
      <v-spacer></v-spacer>

      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="my-7">
      <div class="d-flex align-center">
        <h1 class="text-4xl font-weight-semibold">
          $24,895
        </h1>

        <div class="d-flex align-center mb-n3">
          <v-icon
            size="40"
            color="success"
          >
            {{ icons.mdiMenuUp }}
          </v-icon>
          <span class="text-base font-weight-medium success--text ms-n2">10%</span>
        </div>
      </div>

      <h4 class="mt-2 font-weight-medium">
        Compared to $84,325 last year
      </h4>
    </v-card-text>

    <v-card-text>
      <div
        v-for="(earning,index) in totalEarning"
        :key="earning.avatar"
        :class="`d-flex align-start ${index >0 ? 'mt-8':''}`"
      >
        <v-avatar
          rounded
          size="38"
          color="#5e56690a"
          class="me-4"
        >
          <v-img
            contain
            :src="earning.avatar"
            height="20"
          ></v-img>
        </v-avatar>

        <div class="d-flex align-center flex-grow-1 flex-wrap">
          <div>
            <h4 class="font-weight-medium">
              {{ earning.title }}
            </h4>
            <span class="text-xs text-no-wrap">{{ earning.subtitle }}</span>
          </div>

          <v-spacer></v-spacer>

          <div class="ms-1">
            <p class="text--primary font-weight-medium mb-1">
              {{ earning.earning }}
            </p>
            <v-progress-linear
              :value="earning.progress"
              :color="earning.color"
            ></v-progress-linear>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiMenuUp } from '@mdi/js'

export default {
  setup() {
    const totalEarning = [
      {
        avatar: require('@/assets/images/logos/zipcar.png'),
        title: 'Zipcar',
        subtitle: 'Vuejs, React & HTML',
        earning: '$24,895.65',
        progress: '85',
        color: 'primary',
      },
      {
        avatar: require('@/assets/images/logos/bitbank.png'),
        title: 'Bitbank',
        subtitle: 'Sketch, Figma & XD',
        earning: '$8,6500.20',
        progress: '65',
        color: 'info',
      },
      {
        avatar: require('@/assets/images/logos/aviato.png'),
        title: 'Aviato',
        subtitle: 'HTML & angular',
        earning: '$1,2450.80',
        progress: '30',
        color: 'secondary',
      },
    ]

    return {
      totalEarning,
      icons: { mdiDotsVertical, mdiMenuUp },
    }
  },
}
</script>
