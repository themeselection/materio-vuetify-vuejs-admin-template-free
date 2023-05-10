<script setup lang="ts">
import AnalyticsAward from '@/views/pages/dashboard/AnalyticsAward.vue';
import AnalyticsBarCharts from '@/views/pages/dashboard/AnalyticsBarCharts.vue';
import AnalyticsDepositWithdraw from '@/views/pages/dashboard/AnalyticsDepositWithdraw.vue';
import AnalyticsSalesByCountries from '@/views/pages/dashboard/AnalyticsSalesByCountries.vue';
import AnalyticsTotalEarning from '@/views/pages/dashboard/AnalyticsTotalEarning.vue';
import AnalyticsTotalProfitLineCharts from '@/views/pages/dashboard/AnalyticsTotalProfitLineCharts.vue';
import AnalyticsTransactions from '@/views/pages/dashboard/AnalyticsTransactions.vue';
import AnalyticsUserTable from '@/views/pages/dashboard/AnalyticsUserTable.vue';
import AnalyticsWeeklyOverview from '@/views/pages/dashboard/AnalyticsWeeklyOverview.vue';
import CardStatisticsVertical from '@core/components/CardStatisticsVertical.vue';

const totalProfit = {
  title: 'Total Profit',
  color: 'secondary',
  icon: 'mdi-poll',
  stats: '$25.6k',
  change: 42,
  subtitle: 'Weekly Project',
}

const newProject = {
  title: 'New Project',
  color: 'primary',
  icon: 'mdi-briefcase-variant-outline',
  stats: '862',
  change: -18,
  subtitle: 'Yearly Project',
}
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsAward />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsTransactions />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsWeeklyOverview />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsTotalEarning />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VRow class="match-height">
        <VCol
          cols="12"
          sm="6"
        >
          <AnalyticsTotalProfitLineCharts />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical v-bind="totalProfit" />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical v-bind="newProject" />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <AnalyticsBarCharts />
        </VCol>
      </VRow>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsSalesByCountries />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsDepositWithdraw />
    </VCol>

    <VCol cols="12">
      <AnalyticsUserTable />
    </VCol>
  </VRow>
</template>
