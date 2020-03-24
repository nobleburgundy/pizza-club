<template>
  <div>
    <h3>Add Pizza 2</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="restaurant" placeholder="restaurant" />
        <input type="text" v-model="pizza" placeholder="pizza" />
        <input type="text" v-model="description" placeholder="description" />
        <input type="text" v-model="style" placeholder="style" />
        <input type="number" v-model="score" min="1" max="5" />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPizza",
  data() {
    return {
      restaurant: "",
      pizza: "",
      description: "",
      style: "",
      score: 0
    };
  },
  methods: {
    ...mapActions(["addPizza"]),
    onSubmit(e) {
      e.preventDefault();
      this.addPizza(
        this.restaurant,
        this.pizza,
        this.description,
        this.style,
        this.score
      );
    }
  }
};
</script>

<style scoped>
.add {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  margin: auto auto;
}
input {
  flex: 10;
  flex-basis: 250px;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  margin: 5px;
}
</style>
