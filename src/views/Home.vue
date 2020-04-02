<template>
  <div id="app">
    <AddPizza v-model="modalOpen" />
    <FilterPizza />
    <button data-test-id="add-pizza-btn" @click="openModal">Add Pizza</button>
    <Pizzas />
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
  },
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    }
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
button {
  border: 1px solid #41b883;
  margin: 5px;
  padding: 5px;
  width: 200px;
}
</style>
