<template>
  <div class="analytics-page">
    <b-loading v-model="loading" :is-full-page="true" :can-cancel="true" />
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
          :percentage="analytics.rewards.percentage"
          :percentage-increase="analytics.rewards.percentageIncrease"
          :data-sets="[
            {
              label: 'Rewards Redemeed',
              value: analytics.rewards.rewardsRedeemed,
            },
            {
              label: 'Issued Rewards',
              value: analytics.rewards.issuedRewards,
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
import SaleService from "@/services/sale.service";
import EngagementService from "@/services/engagement.service";
import AcquisitionService from "@/services/acquisition.service";
import RewardService from "@/services/reward.service";

export default {
  components: {
    AnalyticsDataCard,
    AnalyticsDataOverview,
  },
  data: () => ({
    analytics: {
      sales: {},
      engagement: {},
      acquisition: {},
      rewards: {},
    },
    loading: false,
  }),
  mounted() {
    this.fetchAnalytics();
  },
  methods: {
    async fetchAnalytics() {
      try {
        this.loading = true;

        const values = await Promise.all([
          SaleService.analytics(),
          EngagementService.analytics(),
          AcquisitionService.analytics(),
          RewardService.analytics(),
        ]);

        this.analytics.sales = values[0];
        this.analytics.engagement = values[1];
        this.analytics.acquisition = values[2];
        this.analytics.rewards = values[3];
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
