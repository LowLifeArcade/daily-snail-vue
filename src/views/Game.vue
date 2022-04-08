<template>
  <NavVue />
  <section>
    <h1>Snail Game</h1>
    <div class="game-nav">
      <button class="menu-button" @click="changeView('main')">Main</button>
      <button class="menu-button" @click="changeView('info')">Info</button>
      <button class="menu-button" @click="changeView('game')">Game</button>
      <button class="menu-button" @click="changeView('score')">Score</button>
    </div>

    <div class="game-window">
      <div v-if="view === 'main'" class="info"><MainVue /></div>
      <div v-if="view === 'info'" class="info">INFO</div>
      <div v-if="view === 'game'" class="info">GAME</div>
      <div v-if="view === 'score'" class="info">SCORE</div>
    </div>
  </section>
</template>

<script>
import NavVue from '../components/NavVue.vue';
import MainVue from '../components/Main.vue';
export default {
  components: { NavVue, MainVue },
  data() {
    return {
      count: 0,
      view: 'main',
    };
  },
  methods: {
    changeView(val) {
      this.view = val;
    },
  },
};
</script>

<style scoped>
h1 {
  width: 100%;
  text-align: center;
  padding: 20px;
}
section {
  background: var(--gradient);
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: calc(100vh - 40px);
}

.game-window {
  width: 100%;
  height: 100%;
  padding: 10px;
  /* background: rgb(23, 23, 23); */
  box-shadow: inset 0 0 6px rgb(255, 254, 197),
    inset 0 0 6px rgb(255, 255, 255);
  border-radius: 5px;
}
.game-nav {
  margin: 20px;
}
.menu-button {
  border: none;
  padding: 10px;
  margin: 0 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
</style>
