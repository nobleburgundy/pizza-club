<template>
  <div class="pizzas">
    <div v-for="pizza in allPizzas" :key="pizza._id" class="pizza">
      <PizzaItem v-bind:pizza="pizza" />
      <i class="far fa-edit edit" @dblclick="updatePizza(pizza)"></i>
      <i class="fas fa-trash-alt del" @click="deletePizza(pizza._id)"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PizzaItem from "./Pizza.vue";

export default {
  name: "Pizzas",
  methods: {
    ...mapActions([
      "fetchPizzas",
      "deletePizza",
      "filterPizzas",
      "updatePizza"
    ]),
    onDblClick(pizza) {
      const updPizza = {
        id: pizza._id,
        restaurant: pizza.restaurant + " updated",
        description: pizza.description,
        style: pizza.style,
        score: pizza.score,
        createdAt: pizza.createdAt
      };

      this.updatePizza(updPizza);
    }
  },
  computed: mapGetters(["allPizzas"]),
  created() {
    this.fetchPizzas();
  },
  components: {
    PizzaItem
  },
  props: ["pizzas"]
};
</script>

<style scoped>
.pizzas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.pizza {
  position: relative;
  padding-right: 2rem;
  height: 170px;
}
.del {
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
}
.edit {
  position: absolute;
  top: 35px;
  right: 3px;
  text-align: center;
  cursor: pointer;
}

@media (max-width: 900px) {
  .pizzas {
    grid-template-columns: 1fr;
  }
}
</style>
