<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

html,
body {
  margin: 0;
  background: white;
}
#app {
  /* variables */
  --page-gutter: 10px;
  --num-grid-columns: 10;
  --gradient: linear-gradient(to right top, rgb(206, 112, 206), rgb(87, 252, 208));

  

  font-family: Lato, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  

  line-height: 1.15;
}

</style>
