<template>
  <div class="pizza pizza-item">
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
    <button @click="$emit('del-pizza', pizza.id)" class="btn del">X</button>
  </div>
</template>

<script>
export default {
  name: "PizzaItem",
  props: ["pizza"]
};
</script>

<style scoped>
.pizza-item {
  background: #afeeee;
  text-align: left;
  padding: 20px;
  overflow: hidden;
}
.btn {
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  /* float: right; */
  padding: 5px;
}
.btn:hover {
  opacity: 0.9;
}
.del {
  background: #ff0000;
  color: #fff;
  position: absolute;
  top: 5px;
  right: 5px;
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
  top: 35px;
  width: 100%;
  transform-origin: 0 0;
  transform: rotate(90deg);
}
</style>
