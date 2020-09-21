<template>
  <header class="header">
    <h1>Welcome to Pizza Club!</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 10px;
  font-family: "Roboto", "Futura", monospace;
  font-size: xx-large;
  text-shadow: lightgrey -5px 1px;
}
#nav {
  margin: 0;
  padding: 10px;
}
.header a {
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: large;
  }
}
</style>
