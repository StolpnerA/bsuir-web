import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
  },
  mutations: {
    changeUser(state, value) {
      state.isAdmin = value;
    }
  },
  actions: {

  },
});
