// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dados: null
  },
  mutations: {
    setCards(state, dados) {
      state.dados = dados;
    }
  },
  actions: {
    fetchDados({ commit }) {
      // Fetch cards from Firebase
      const dados = {}; // Substitua isso com a lógica de fetch do Firebase
      commit('setCards', dados);
    }
  },
  getters: {
    dados: state => state.dados
  }
});
