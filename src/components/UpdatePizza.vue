<template>
  <div class="update" id="update-pizza-container" v-show="value">
    <form @submit="onSubmit">
      <h2>Update Pizza</h2>
      <input type="text" v-model="restaurant" data-test-id="restaurant" />
      <input type="text" v-model="pizza" data-test-id="pizza" />
      <input type="text" v-model="description" data-test-id="description" />
      <input type="text" v-model="style" data-test-id="style" />
      <select v-model="score" data-test-id="score">
        <option selected>Score</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="submit" value="submit" />
      <button @click.prevent="close">close</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UpdatePizza",
  data() {
    return {
      restaurant: "",
      pizza: "",
      description: "",
      style: "",
      score: "Score",
    };
  },
  props: {
    value: {
      required: true,
    },
  },
  methods: {
    ...mapActions(["updatePizza"]),
    onSubmit(e) {
      e.preventDefault();
      this.updatePizza([
        this.restaurant,
        this.pizza,
        this.description,
        this.style,
        this.score,
      ]).then(() => {
        this.close();
      });
    },
    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style scoped>
#update-pizza-container {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.87);
}
form {
  margin: 15% auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 450px;
}
input,
button,
select {
  border: 1px solid #41b883;
  outline: 0;
  margin: 5px;
  padding: 10px;
}
button {
  flex: 1 3 50px;
}
input[type="text"] {
  flex: 1 0 250px;
}
label {
  flex: 1 0 100px;
}
input[type="submit"] {
  flex: 1 0 250px;
}
#style {
  flex: 1 0 250px;
}
#score {
  flex: 1 3 50px;
}
h2 {
  width: 100%;
  text-align: center;
  color: aqua;
  margin: auto;
  text-transform: uppercase;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 0.5rem;
}
</style>
