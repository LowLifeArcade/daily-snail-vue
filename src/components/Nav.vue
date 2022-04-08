<template>
  <div class="grid-frame-global">
    <header>
      <nav>
        <a href="/" class="home">
          <h2>The Daily Snail</h2>
        </a>
        <ul>
          <li class="nav-bar-item">link</li>
          <li class="nav-bar-item">link</li>
          <li class="nav-bar-item">link</li>
          <li class="nav-bar-item">link</li>
          <li class="nav-bar-item">link</li>
        </ul>
        <div class="user-menu">
          <div class="profile">Profile</div>
          <div class="gear">Gear</div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.grid-frame-global {
  z-index: 9998;
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0 20px;
  background-color: pink;
  padding: 0 var(--page-gutter);
}
header {
  grid-column: span var(--num-grid-columns);
}
nav {
  width: 100%;
  height: 80px;
  /* background: sandybrown; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    background: blue;
  }
}
.user-menu {
  background-color: aqua;
}
</style>
