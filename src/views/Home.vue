<template>
  <div class="container">
    <div class="flex-grid-thing">
      <HomeNav />
      <div class="hero">
        <h1>The Daily Snail</h1>
      </div>
      <div data-video="a background video"></div>
    </div>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue';
export default {
  components: { HomeNav },
};
</script>

<style scoped>
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
