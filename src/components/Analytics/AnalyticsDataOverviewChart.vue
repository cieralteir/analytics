<template>
  <div class="analytics-data-overview-chart">
    <canvas id="overview-chart" />
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    labels: {
      type: Array,
      default: () => [],
    },
    datasets: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    chart: null,
  }),
  methods: {
    loadChart() {
      if (this.chart) {
        this.chart.data.labels = this.labels;
        this.chart.data.datasets = this.datasets;
        this.chart.update();
      } else {
        const ctx = document.getElementById("overview-chart");
        this.chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: this.labels,
            datasets: this.datasets,
          },
          options: {
            maintainAspectRatio: false,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.analytics-data-overview-chart {
  height: 500px;
}
</style>
