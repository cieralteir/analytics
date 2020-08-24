<template>
  <div id="app">
    <b-loading v-model="loading" :is-full-page="true" :can-cancel="true" />
    <the-header />
    <div class="container is-fluid">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  computed: {
    ...mapState(["loading"]),
  },
};
</script>
