<template>
  <div class="container">
    <div class="flex-grid-thing">
      <Nav />
      <div class="hero">
        <h1>The Daily Snail</h1>
      </div>
      <div data-video="a background video"></div>
    </div>
  </div>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import Nav from './components/Nav.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
export default {
  components: { Nav, Home, About },
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
h1 {
  width: 100%;
  text-align: center;
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
