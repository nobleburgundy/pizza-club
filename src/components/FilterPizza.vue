<template>
  <div>
    Filter Pizzas:
    <select id="filter-pizzas" @change="filterPizzas($event)">
      <option value="0" default>All</option>
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterPizzas",
  methods: mapActions(["filterPizzas", "fetchPizzas"])
};
</script>

<style>
select {
  margin: 20px;
  padding: 5px;
  border: #41b883 1px solid;
}
</style>
