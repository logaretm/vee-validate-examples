import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: null
  },
  mutations: {
    UPDATE_MESSAGE (state, payload) {
      state.message = payload;
    }
  }
});

export default store;