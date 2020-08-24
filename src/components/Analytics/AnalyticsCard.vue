<template>
  <div class="card analytics-card">
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="columns is-vcentered">
        <div class="column">
          <b-tag :type="type" size="is-medium">
            {{ percentage }}% {{ percentageIncrease ? "+" : "-" }}
          </b-tag>
        </div>
        <div class="column">
          <div class="my-2" v-for="(dataSet, index) in dataSets" :key="index">
            <p class="has-text-grey">{{ dataSet.label }}</p>
            <p>{{ dataSet.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <slot name="footer">
        <div class="card-footer-item">
          {{ percentage }}%
          {{ percentageIncrease ? "increase" : "decrease" }} in 30 days
        </div>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    dataSets: {
      type: Array,
      default: () => []
    },
    percentage: {
      type: Number,
    },
    percentageIncrease: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
      default: "is-primary",
    },
  },
};
</script>

<style lang="scss">
.analytics-card {
  .card-footer-item {
    border: none;
    justify-content: start;
  }
}
</style>
