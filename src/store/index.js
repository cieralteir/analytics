import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  loading: false,
};

const mutations = {
  startLoading(state) {
    state.loading = true;
  },
  endLoading(state) {
    state.loading = false;
  },
};

export default new Vuex.Store({
  state,
  mutations
});
