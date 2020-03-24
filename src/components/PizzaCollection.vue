<template>
  <div class="pizzas">
    <div v-for="pizza in allPizzas" :key="pizza._id" class="pizza">
      <PizzaItem
        v-bind:pizza="pizza"
        v-on:del-pizza="$emit('del-pizza', pizza._id)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PizzaItem from "./Pizza.vue";

export default {
  name: "Pizzas",
  methods: {
    ...mapActions(["fetchPizzas"])
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
</style>
