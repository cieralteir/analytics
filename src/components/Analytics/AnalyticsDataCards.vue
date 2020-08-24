<template>
  <div class="analytics-data-cards">
    <b-loading v-model="loading" :is-full-page="true" :can-cancel="true" />
    <div class="columns is-multiline is-vcentered">
      <div class="column is-6-tablet is-4-desktop is-3-fullhd">
        <analytics-data-card
          title="Sales"
          :active="selected === 'sales'"
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
          @click="selected = 'sales'"
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
      <div class="column is-6-tablet is-4-desktop is-3-fullhd">
        <analytics-data-card
          title="Engagement"
          :active="selected === 'engagement'"
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
          @click="selected = 'engagement'"
        />
      </div>
      <div class="column is-6-tablet is-4-desktop is-3-fullhd">
        <analytics-data-card
          title="Acquisition"
          :active="selected === 'acquisition'"
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
          @click="selected = 'acquisition'"
        />
      </div>
      <div class="column is-6-tablet is-4-desktop is-3-fullhd">
        <analytics-data-card
          title="Rewards Program"
          :active="selected === 'rewards'"
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
          @click="selected = 'rewards'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnalyticsDataCard from "@/components/Analytics/AnalyticsDataCard";
import SaleService from "@/services/sale.service";
import EngagementService from "@/services/engagement.service";
import AcquisitionService from "@/services/acquisition.service";
import RewardService from "@/services/reward.service";

export default {
  components: {
    AnalyticsDataCard,
  },
  data: () => ({
    analytics: {
      sales: {},
      engagement: {},
      acquisition: {},
      rewards: {},
    },
    selected: null,
    loading: false,
  }),
  mounted() {
    this.fetchAnalytics();
  },
  watch: {
    selected(value) {
      this.$emit("update:selected", value);
    }
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
