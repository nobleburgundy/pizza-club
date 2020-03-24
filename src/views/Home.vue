<template>
  <div id="app">
    <Pizzas v-bind:pizzas="pizzas" v-on:del-pizza="deletePizza" />
    <AddPizza2 />
  </div>
</template>

<script>
import Pizzas from "../components/PizzaCollection";
import AddPizza2 from "../components/AddPizza";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Pizzas,
    AddPizza2
  },
  data() {
    return {
      pizzas: []
    };
  },
  methods: {
    deletePizza(id) {
      axios
        .delete(`http://localhost:5000/api/pizzas/${id}`)
        .then((this.pizzas = this.pizzas.filter(pizza => pizza._id !== id)))
        .catch(err => console.log(err));
    },
    addPizza(newPizza) {
      const { restaurant, pizza, description, style, score } = newPizza;

      axios
        .post("http://localhost:5000/api/pizzas/", {
          restaurant,
          pizza,
          description,
          style,
          score
        })
        .then(res => (this.pizzas = [...this.pizzas, res.data]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://localhost:5000/api/pizzas/")
      .then(res => {
        this.pizzas = res.data;
      })
      .catch(err => console.log(err));
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
