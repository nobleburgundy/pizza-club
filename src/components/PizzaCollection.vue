<template>
  <div class="pizzas">
    <div v-bind:key="pizza._id" v-for="pizza in pizzas">
      <PizzaItem
        v-bind:pizza="pizza"
        v-on:del-pizza="$emit('del-pizza', pizza._id)"
      />
    </div>
  </div>
</template>

<script>
import PizzaItem from "./Pizza.vue";

export default {
  name: "Pizzas",
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
