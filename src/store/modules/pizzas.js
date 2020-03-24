import axios from "axios";

const state = {
  pizzas: []
};

const getters = {
  allPizzas: state => state.pizzas
};

const actions = {
  async fetchPizzas({ commit }) {
    const response = await axios.get("http://localhost:5000/api/pizzas");

    commit("setPizzas", response.data);
  },
  async addPizza({ commit }, restaurant, pizza, description, style, score) {
    const response = await axios
      .post("http://localhost:5000/api/pizzas", {
        restaurant,
        pizza,
        description,
        style,
        score
      })
      .then(commit("newPizza", response.data))
      .catch(err => console.log(err));
  }
};

const mutations = {
  setPizzas: (state, pizzas) => (state.pizzas = pizzas),
  newPizza: (state, pizza) => state.pizzas.unshift(pizza)
};

export default {
  state,
  getters,
  actions,
  mutations
};
