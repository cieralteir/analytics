<template>
  <div class="analytics-data-overview">
    <b-loading v-model="loading" :is-full-page="true" :can-cancel="true" />
    <analytics-data-overview-filters @filter="onFilter" />
    <div class="card analytics-card">
      <header class="card-header">
        <p class="card-header-title">{{ type | title }} Overview</p>
      </header>
      <div class="card-content">
        <analytics-data-overview-chart
          :labels="chartLabels"
          :datasets="chartDatasets"
          ref="chart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AnalyticsDataOverviewChart from "@/components/Analytics/AnalyticsDataOverviewChart";
import AnalyticsDataOverviewFilters from "@/components/Analytics/AnalyticsDataOverviewFilters";
import SaleService from "@/services/sale.service";

export default {
  props: {
    type: {
      type: String,
    },
  },
  filters: {
    title(value) {
      switch (value) {
        case "sales":
          return "Sales";
        case "engagement":
          return "Engagement";
        case "acquisition":
          return "Acquisition";
        case "rewards":
          return "Rewards Program";
      }
    },
  },
  components: {
    AnalyticsDataOverviewChart,
    AnalyticsDataOverviewFilters,
  },
  data: () => ({
    chartLabels: [],
    chartDatasets: [],
    filters: {},
    loading: false
  }),
  watch: {
    type() {
      this.loadOverview();
    },
  },
  methods: {
    async loadOverview() {
      switch (this.type) {
        case "sales":
          this.loadOverviewSales();
          break;
        default:
          this.chartLabels = [];
          this.chartDatasets = [];
          this.$nextTick(() => {
            this.$refs.chart.loadChart();
          });
      }
    },
    async loadOverviewSales() {
      try {
        this.loading = true;

        const data = await SaleService.overview(this.filters);

        let labels = Object.keys(data);
        let sales = [];
        let revenues = [];

        labels.forEach((label) => {
          sales.push(data[label].sales);
          revenues.push(data[label].revenue);
        });

        this.chartLabels = labels;
        this.chartDatasets = [
          {
            label: "Sales",
            data: sales,
            backgroundColor: "#64B5F6",
            borderColor: "#64B5F6",
          },
          {
            label: "Revenue",
            data: revenues,
            backgroundColor: "#4DB6AC",
            borderColor: "#4DB6AC",
          },
        ];

        this.$nextTick(() => {
          this.$refs.chart.loadChart();
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
    onFilter(filters) {
      this.filters = filters;
      this.$nextTick(() => {
        this.loadOverview();
      });
    },
  },
};
</script>
