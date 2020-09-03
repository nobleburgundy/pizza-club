<template>
  <div class="add" id="add-pizza-container" v-show="value">
    <form id="add-pizza-form" @submit="onSubmit">
      <h2>Add Pizza</h2>
      <input
        type="text"
        v-model="restaurant"
        data-test-id="add-restaurant"
        placeholder="restaurant"
      />
      <input type="text" v-model="pizza" data-test-id="add-pizza" placeholder="pizza" />
      <input
        type="text"
        v-model="description"
        data-test-id="add-description"
        placeholder="description"
      />
      <input type="text" v-model="style" data-test-id="add-style" id="style" placeholder="style" />
      <select v-model="score" data-test-id="add-score" id="score">
        <option selected>Score</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="submit" value="submit" data-test-id="add-pizza-submit" />
      <button @click.prevent="close" data-test-id="close">close</button>
    </form>
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
      score: 0,
    };
  },
  props: {
    value: {
      required: true,
    },
  },
  methods: {
    ...mapActions(["addPizza"]),
    onSubmit(e) {
      e.preventDefault();
      this.addPizza([
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
#add-pizza-container {
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
  flex: 1 0 240px;
}
#style {
  flex: 1 0 250px;
}
#score {
  flex: 1 3 50px;
}
h2 {
  width: 100%;
  color: aqua;
  margin: auto;
  text-transform: uppercase;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-shadow: yellow 4px 0px;
  letter-spacing: 0.5rem;
}
@media only screen and (max-width: 600px) {
  form {
    width: 98%;
    margin-top: 25%;
  }
}
</style>
