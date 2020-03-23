<template>
  <div id="form-container">
    <h2>Add pizza...</h2>
    <div id="add-pizza-form">
      <form @submit="addPizza" name="addPizza">
        <div>
          <input
            type="text"
            v-model="restaurant"
            name="restaurant"
            placeholder="Restaurant"
            required
          />
        </div>
        <div>
          <input type="text" v-model="pizza" name="pizza" placeholder="Add Pizza..." required />
        </div>
        <div>
          <input
            type="text"
            v-model="description"
            name="description"
            placeholder="Description"
            maxlength="400"
          />
        </div>
        <div>
          <input type="text" v-model="style" name="style" placeholder="Style" />
        </div>
        <div>
          <input type="number" v-model="score" min="1" max="5" name="score" required />
        </div>
        <div>
          <input type="submit" value="Submit" class="btn" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
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
    addPizza(e) {
      e.preventDefault();
      const newPizza = {
        restaurant: this.restaurant,
        pizza: this.pizza,
        description: this.description,
        style: this.style,
        score: this.score
      };
      // send up to parent
      this.$emit("add-pizza", newPizza);
      this.restaurant = "";
      this.pizza = "";
      this.description = "";
      this.style = "";
      this.score = 0;
    }
  }
};
</script>

<style scoped>
#form-container {
  display: inline-block;
  width: 500px;
}
#add-pizza-form {
  padding-top: 1rem;
}
input {
  margin-bottom: 10px;
}
input[type="text"] {
  width: 50%;
  padding: 5px;
}
input[type="number"] {
  padding: 5px;
}
</style>
