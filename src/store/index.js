import Vuex from 'vuex';
import Vue from 'vue';
import pizzas from './modules/pizzas';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    pizzas,
  },
});
