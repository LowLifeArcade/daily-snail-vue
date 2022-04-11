<template>
  <div class="container">
    <div class="grid-frame-global">
      <header>
        <nav>
          <a href="/" class="home">
            <h2>Snail SVG</h2>
          </a>
          <div class="nav-center">
            <router-link class="nav-bar-item" to="/">Home</router-link>
            <router-link class="nav-bar-item" to="/game">Game</router-link>
            <router-link class="nav-bar-item" to="/submission"
              >Snail Me</router-link
            >
            <router-link class="nav-bar-item" to="/jobs">Jobs</router-link>
            <router-link class="nav-bar-item" to="/about">About</router-link>
          </div>
          <div class="user-menu">
            <div class="profile">Profile</div>
            <div class="gear">Gear</div>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
a {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
.grid-frame-global {
  z-index: 9998;
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0 20px;
  background-color: salmon;
  padding: 0 var(--page-gutter);
}
header {
  grid-column: span var(--num-grid-columns);
}
nav {
  width: 100%;
  height: 40px;
  /* background: sandybrown; */
  display: flex;

  justify-content: space-between;
  align-items: center;
}
.nav-center {
  display: flex;
  flex: 1 1 auto;
  text-align: center;
  /* flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto; */
  /* list-style: none; */
  justify-content: center;
  /* align-items: center; */
  /* background: blue; */
}
.nav-bar-item {
  padding: 0 20px;
}
.user-menu {
  display: flex;
  flex: 0 0 auto;
  flex-flow: row-reverse;
  text-align: end;
}

.home {
  width: 124px;
}
.gear {
  width: 124px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
