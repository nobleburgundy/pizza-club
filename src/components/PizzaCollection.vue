<template>
  <div class="pizzas">
    <div v-for="pizza in allPizzas" :key="pizza._id" class="pizza">
      <PizzaItem v-bind:pizza="pizza" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PizzaItem from "./Pizza.vue";

export default {
  name: "Pizzas",
  methods: {
    ...mapActions(["fetchPizzas", "deletePizza", "filterPizzas", "updatePizza"])
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
  background: #afeeee;
  position: relative;
  padding-right: 2rem;
  height: 170px;
  overflow: hidden;
}

@media (max-width: 900px) {
  .pizzas {
    grid-template-columns: 1fr;
  }
}
</style>
