<template>
  <div>
    <h3>Add Pizza 2</h3>
    <div class="add">
      <form id="add-pizza-form" @submit="onSubmit">
        <input
          type="text"
          v-model="restaurant"
          data-test-id="restaurant"
          placeholder="restaurant"
        />
        <input
          type="text"
          v-model="pizza"
          data-test-id="pizza"
          placeholder="pizza"
        />
        <input
          type="text"
          v-model="description"
          data-test-id="description"
          placeholder="description"
        />
        <input
          type="text"
          v-model="style"
          data-test-id="style"
          placeholder="style"
        />
        <select v-model="score" data-test-id="score">
          <option>1</option>
          <option>2</option>
          <option default>3</option>
          <option>4</option>
          <option>5</option>
        </select>
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
form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 350px;
  margin: auto auto;
}
input,
select {
  border: 1px solid #41b883;
  outline: 0;
  margin: 5px;
  padding: 10px;
}
input[type="text"] {
  flex: 1 0 250px;
}
label {
  flex: 1 0 100px;
}
input[type="submit"] {
  flex: 1 0 100px;
}
</style>
