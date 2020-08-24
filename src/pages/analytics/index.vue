<template>
  <div class="analytics-page">
    <h1 class="title is-size-4">Analytics</h1>
    <analytics-data-cards :selected.sync="selected" />
    <analytics-data-overview :type="selected" />
  </div>
</template>

<script>
import AnalyticsDataCards from "@/components/Analytics/AnalyticsDataCards";
import AnalyticsDataOverview from "@/components/Analytics/AnalyticsDataOverview";

export default {
  components: {
    AnalyticsDataCards,
    AnalyticsDataOverview,
  },
  data: () => ({
    selected: null,
  }),
};
</script>
