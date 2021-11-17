import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Qna: {},
    Qnas: [],
  },
  getters: {
    Qnas(state) {
      return state.Qnas;
    },
  },
  mutations: {
    ALLQNA: (state, payload) => {
      state.Qnas = payload.Qnas;
    },
    DETAILQNA: (state, payload) => {
      state.Qna = payload;
    },
    SETREPLY: (state, payload) => {
      state.Qna.reply = payload;
    }
  },
  actions: {
    ALLQNA: (store) => {
      axios.get("/qna").then((response) => {
        store.commit("ALLQNA", { Qnas: response.data });
      });
    },
    ADDQNA: (store, payload) => {
      axios
        .post("/qna", {
          id: payload.id,
          title: payload.title,
          content: payload.content,
        })
        .then(() => {
          store.dispatch("ALLQNA");
        });
    },
    SEARCH: (store, payload) => {
      axios.get("/qna/find/" + payload).then((response) => {
        store.commit("ALLQNA", { Qnas: response.data });
      });
    },
    MODIFY: (store, payload) => {
      axios
        .put("/qna", {
          num: payload.num,
          title: payload.title,
          content: payload.content,
        })
        .then(() => {
          store.dispatch("DETAILQNA", payload.num);
        });
    },
    DETAILQNA: (store, payload) => {
      axios.get("/qna/" + payload).then((response) => {
        store.commit("DETAILQNA", response.data);
      });
    },
    REPLY: (store, payload) => {
      axios
        .put("/qna", {
          num: payload.num,
          title: payload.title,
          content: payload.content,
          reply: payload.reply,
        })
        .then(() => {
          store.dispatch("DETAILQNA", payload.num);
        });
    },
  },
  modules: {},
});
