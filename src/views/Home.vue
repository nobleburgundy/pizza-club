<template>
  <div id="app">
    <FilterPizza />
    <Pizzas />
  </div>
</template>

<script>
import Pizzas from "../components/PizzaCollection";
import FilterPizza from "../components/FilterPizza";

export default {
  name: "Home",
  components: {
    Pizzas,
    FilterPizza
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
