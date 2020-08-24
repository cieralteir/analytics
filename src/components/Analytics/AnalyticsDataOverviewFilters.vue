<template>
  <div class="analytics-data-overview-filters my-5">
    <b-field grouped>
      <b-field>
        <b-select v-model="filters.preset">
          <option value="">Please select</option>
          <option :value="7">Last 7 Days</option>
          <option :value="14">Last 14 Days</option>
        </b-select>
      </b-field>
      <b-field>
        <b-datepicker
          placeholder="Click to select dates"
          v-model="filters.dates"
          range
          @range-end="onFilterDatesRangeEnd"
        >
        </b-datepicker>
      </b-field>
    </b-field>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data: () => ({
    filters: {
      dates: [],
      preset: "",
    },
  }),
  watch: {
    "filters.preset"(value) {
      if (!value) return;

      const start = moment()
        .subtract(value, "day")
        .toDate();
      const end = moment().toDate();

      this.filters.dates = [start, end];
      this.filter();
    },
  },
  methods: {
    transformed() {
      return {
        dateStart: this.filters.dates[0],
        dateEnd: this.filters.dates[1],
      };
    },
    filter() {
      this.$emit("filter", this.transformed());
      this.$emit("update:filters", this.transformed());
    },
    onFilterDatesRangeEnd() {
      this.filters.preset = "";
      this.filter();
    },
  },
};
</script>
