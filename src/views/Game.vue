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

    <div v-if="view === 'main'" class="info">MAIN</div>
    <div v-if="view === 'info'" class="info">INFO</div>
    <div v-if="view === 'game'" class="info">GAME</div>
    <div v-if="view === 'score'" class="info">SCORE</div>
  </section>
</template>

<script>
import NavVue from '../components/NavVue.vue';
export default {
  components: { NavVue },
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
