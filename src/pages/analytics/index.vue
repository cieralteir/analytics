<template>
  <div class="analytics-page">
    <h1 class="title is-size-4">Analytics</h1>
    <div class="columns is-multiline">
      <div class="column is-4-desktop is-3-fullhd">
        <analytics-data-card
          title="Sales"
          :percentage="analytics.sales.percentage"
          :percentage-increase="analytics.sales.percentageIncrease"
          :data-sets="[
            {
              label: 'Lifetime Sales',
              value: analytics.sales.lifetimeSales,
            },
            {
              label: 'Revenue Sales',
              value: analytics.sales.revenueSales,
            },
          ]"
        >
          <template #footer>
            <div class="card-footer-item">
              Average Order Value
            </div>
            <div class="card-footer-item">
              {{ analytics.sales.averageOrderValue }}
            </div>
          </template>
        </analytics-data-card>
      </div>
      <div class="column is-4-desktop is-3-fullhd">
        <analytics-data-card
          title="Engagement"
          :percentage="analytics.engagement.percentage"
          :percentage-increase="analytics.engagement.percentageIncrease"
          :data-sets="[
            {
              label: 'Lifetime SMS Engagements',
              value: analytics.engagement.lifetimeSmsEngagements,
            },
            {
              label: 'Daily Average',
              value: analytics.engagement.dailyAverage,
            },
          ]"
        />
      </div>
      <div class="column is-4-desktop is-3-fullhd">
        <analytics-data-card
          title="Acquisition"
          :percentage="analytics.acquisition.percentage"
          :percentage-increase="analytics.acquisition.percentageIncrease"
          :data-sets="[
            {
              label: 'Registered Users',
              value: analytics.acquisition.registeredUsers,
            },
            {
              label: 'Daily Average',
              value: analytics.acquisition.dailyAverage,
            },
          ]"
        />
      </div>
      <div class="column is-4-desktop is-3-fullhd">
        <analytics-data-card
          title="Rewards Program"
          :percentage="analytics.rewardsProgram.percentage"
          :percentage-increase="analytics.rewardsProgram.percentageIncrease"
          :data-sets="[
            {
              label: 'Rewards Redemeed',
              value: analytics.rewardsProgram.rewardsRedeemed,
            },
            {
              label: 'Issued Rewards',
              value: analytics.rewardsProgram.issuedRewards,
            },
          ]"
        />
      </div>
    </div>
    <analytics-data-overview />
  </div>
</template>

<script>
import AnalyticsDataCard from "@/components/Analytics/AnalyticsDataCard";
import AnalyticsDataOverview from "@/components/Analytics/AnalyticsDataOverview";

export default {
  components: {
    AnalyticsDataCard,
    AnalyticsDataOverview
  },
  data: () => ({
    // From API
    analytics: {
      sales: {
        averageOrderValue: 1000,
        lifetimeSales: 175000,
        percentage: 20,
        percentageIncrease: true,
        revenueSales: 170000,
      },
      engagement: {
        dailyAverage: 57,
        lifetimeSmsEngagements: 285,
        percentage: 20,
        percentageIncrease: false,
      },
      acquisition: {
        dailyAverage: 57,
        registeredUsers: 285,
        percentage: 20,
        percentageIncrease: true,
      },
      rewardsProgram: {
        issuedRewards: 175000,
        percentage: 20,
        percentageIncrease: true,
        rewardsRedeemed: 175000,
      },
    },
  }),
};
</script>
