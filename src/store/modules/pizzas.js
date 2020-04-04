import axios from "axios";

const getDefaultState = () => {
  return { pizzas: [], status: "default" };
};

const state = getDefaultState();

const getters = {
  allPizzas: (state) => state.pizzas,
};

const actions = {
  resetPizzaState({ commit }) {
    const test = this.fetchPizzas();
    console.log(test);
    commit("resetPizzaState");
  },
  async fetchPizzas({ commit }) {
    const response = await axios.get("http://localhost:5000/api/pizzas");

    commit("setPizzas", response.data);
  },
  async addPizza({ commit }, payload) {
    const postPayload = {
      restaurant: payload[0],
      pizza: payload[1],
      description: payload[2],
      style: payload[3],
      score: payload[4],
    };
    const response = await axios.post(
      "http://localhost:5000/api/pizzas",
      postPayload
    );

    console.log(response);
    commit("newPizza", response.data);
  },
  async deletePizza({ commit }, id) {
    const response = await axios.delete(
      `http://localhost:5000/api/pizzas/${id}`
    );
    if (!response.status == 200) {
      console.error(response.statusText);
    }

    commit("removePizza", id);
  },
  filterPizzas({ commit, dispatch }, e) {
    // get selected number
    const score =
      parseInt(e.target.options[e.target.options.selectedIndex].innerText) || 0;
    if (score === 0) {
      dispatch("fetchPizzas");
    } else {
      dispatch("fetchPizzas")
        .then(() => commit("filterPizzas", score))
        .catch((err) => console.log(err.message));
    }
  },
  async updatePizza({ commit }, updatedPizza) {
    const response = await axios.put(
      `http://localhost:5000/api/pizzas/${updatedPizza._id}`,
      updatedPizza
    );
    console.log(response.data);
    commit("updatePizza", updatedPizza);
  },
};

const mutations = {
  resetPizzaState: (state) => state.pizzas,
  setPizzas: (state, pizzas) => (state.pizzas = pizzas),
  newPizza: (state, pizza) => state.pizzas.push(pizza),
  removePizza: (state, id) =>
    (state.pizzas = state.pizzas.filter((pizza) => pizza._id !== id)),
  filterPizzas: (state, score) =>
    (state.pizzas = state.pizzas.filter((pizza) => pizza.score == score)),
  updatePizza: (state, updatedPizza) => {
    const index = state.pizzas.findIndex(
      (pizza) => pizza.id === updatedPizza._id
    );
    if (index !== -1) {
      state.pizzas.splice(index, 1, updatedPizza);
    }
  },
};

export default { state, getters, actions, mutations };
