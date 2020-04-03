<template>
  <div class="pizza-item">
    <div class="pizza-restaurant">
      <h2>{{ pizza.restaurant }}</h2>
    </div>
    <div>
      <h3>{{ pizza.pizza }}</h3>
    </div>
    <div>
      <p>{{ pizza.description }}</p>
    </div>
    <div id="style">
      <p>{{ pizza.style }}</p>
    </div>
    <div id="score">
      <p>{{ pizza.score }}</p>
    </div>
    <i class="far fa-edit edit" @dblclick="updatePizza(pizza)"></i>
    <i class="fas fa-trash-alt del" @click="deletePizza(pizza._id)"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PizzaItem",
  props: ["pizza"],
  methods: {
    ...mapActions(["deletePizza", "updatePizza"]),
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
  }
};
</script>

<style scoped>
.pizza-item {
  background: #afeeee;
  text-align: left;
  padding: 20px;
}
.btn {
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  padding: 5px;
}
.btn:hover {
  opacity: 0.9;
}
.del {
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
}
p {
  font-size: 0.7rem;
}
#score {
  background-color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  position: absolute;
  bottom: 5px;
  right: 5px;
}
#score p {
  font-size: 1rem;
}
#style {
  text-transform: uppercase;
  position: absolute;
  left: 99%;
  top: 40%;
  /* width: 100%; */
  transform-origin: 0 0;
  transform: rotate(90deg);
}
.del {
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
}
.edit {
  position: absolute;
  top: 7px;
  right: 35px;
  text-align: center;
  cursor: pointer;
}
</style>
