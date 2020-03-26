<template>
  <div id="app">
    <FilterPizza />
    <Pizzas />
    <AddPizza />
  </div>
</template>

<script>
import Pizzas from "../components/PizzaCollection";
import AddPizza from "../components/AddPizza";
import FilterPizza from "../components/FilterPizza";

export default {
  name: "Home",
  components: {
    Pizzas,
    AddPizza,
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
body {
  font-family: "Courier New", Courier, monospace;
  line-height: 1.4;
  width: 80%;
  margin: auto auto;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
