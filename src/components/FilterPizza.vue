<template>
  <div class="filter-row">
    <div class="filter">
      <label for="filter-pizzas">Score:</label>
      <select id="filter-pizzas" name="filter-pizzas" @change="filterPizzas($event)">
        <option value="0" default>All</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    </div>
    <button id="add-pizza-btn" @click="openModal()">Add Pizza</button>
    <AddPizza v-model="modalOpen" />
  </div>
</template>

<script>
import AddPizza from "../components/AddPizza";
import { mapActions } from "vuex";

export default {
  name: "FilterPizza",
  components: { AddPizza },
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    ...mapActions(["filterPizzas", "fetchPizzas"]),
    openModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>

<style scoped>
.filter-row {
  height: 2rem;
  margin: auto;
  margin-bottom: 5px;
}
label {
  margin-right: 5px;
}
select {
  padding: 5px;
  border: #41b883 1px solid;
}
.filter {
  float: left;
}
#add-pizza-btn {
  border: 1px solid #41b883;
  padding: 5px;
  width: 200px;
  float: right;
}
</style>
