<template>
  <div class="container">
    <div class="flex-grid-thing">
      <Nav />
      <h1>The Daily Snail</h1>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  components: { Nav },
};
</script>
<style>
#app {
  /* variables */
  --page-gutter: 10px;
  --num-grid-columns: 10;

  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.15;
}
.container {
  position: relative;
}
.flex-grid-thing {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
