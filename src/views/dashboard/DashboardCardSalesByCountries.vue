<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Sales by Countries</span>

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

    <v-card-text>
      <v-list class="pb-0">
        <v-list-item
          v-for="(data,index) in salesByCountries"
          :key="data.country"
          :class="`d-flex align-center px-0 ${index > 0 ? 'mt-4':''}`"
        >
          <v-avatar
            :color="data.color"
            size="40"
            :class="`${data.color} white--text font-weight-medium me-3`"
          >
            <span class="text-base">{{ data.abbr }}</span>
          </v-avatar>

          <div class="d-flex align-center flex-grow-1 flex-wrap">
            <div class="me-2">
              <div class="font-weight-semibold">
                <span class="text--primary text-base me-1">{{ data.amount }}</span>

                <v-icon
                  size="20"
                  :color="data.change.charAt(0) === '+' ? 'success':'error'"
                >
                  {{ data.change.charAt(0) === '+' ? icons.mdiChevronUp: icons.mdiChevronDown }}
                </v-icon>

                <span :class="`text-xs ${data.change.charAt(0) === '+' ? 'success--text':'error--text'}`">{{ data.change.slice(1) }}</span>
              </div>

              <v-list-item-subtitle class="text-xs">
                {{ data.country }}
              </v-list-item-subtitle>
            </div>

            <v-spacer></v-spacer>

            <div>
              <h4 class="font-weight-semibold">
                {{ data.sales }}
              </h4>
              <span class="text-xs">Sales</span>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiChevronUp, mdiChevronDown } from '@mdi/js'

export default {
  setup() {
    const salesByCountries = [
      {
        abbr: 'US',
        amount: '$8,656k',
        country: 'United states of america',
        change: '+25.8%',
        sales: '894k',
        color: 'success',
      },
      {
        abbr: 'UK',
        amount: '$2,415k',
        country: 'United kingdom',
        change: '-6.2%',
        sales: '645k',
        color: 'error',
      },
      {
        abbr: 'IN',
        amount: '$865k',
        country: 'India',
        change: '+12.4%',
        sales: '148k',
        color: 'warning',
      },
      {
        abbr: 'JA',
        amount: '$745k',
        country: 'Japan',
        change: '-11.9%',
        sales: '86k',
        color: 'secondary',
      },
      {
        abbr: 'KO',
        amount: '$45k',
        country: 'Korea',
        change: '+16.2%',
        sales: '42k',
        color: 'error',
      },
    ]

    return {
      salesByCountries,
      icons: {
        mdiDotsVertical,
        mdiChevronUp,
        mdiChevronDown,
      },
    }
  },
}
</script>
