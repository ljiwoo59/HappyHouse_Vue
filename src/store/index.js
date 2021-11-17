import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    qnas: [],
  },
  getters: {
    qnas(state) {
      return state.qnas;
    },
  },
  actions: {
    ALLQNA: (store) => {
      axios.get("/qna").then((response) => {
        store.commit("ALLQNA", { qnas: response.data });
      });
    },
  },
  mutations: {
    ALLQNA: (state, payload) => {
      state.qnas = payload.qnas;
    },
  },
  modules: {},
});
