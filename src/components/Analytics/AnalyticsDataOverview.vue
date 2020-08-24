<template>
  <div class="analytics-data-overview">
    <analytics-data-overview-filters @filter="onFilter" />
  </div>
</template>

<script>
import AnalyticsDataOverviewFilters from "@/components/Analytics/AnalyticsDataOverviewFilters";

export default {
  components: {
    AnalyticsDataOverviewFilters,
  },
  methods: {
    onFilter(filters) {
      console.log("filter", filters);
    }
  }
};
</script>
