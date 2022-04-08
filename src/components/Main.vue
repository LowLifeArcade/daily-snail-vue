<template>
  <div class="game">
    <code>
      <span class="blue">~/main-game</span>
      on
      <span class="yellow">main</span>
      via
      <span class="green">v17.7.1</span>
    </code>
    <br />
    <code>
      <span class="green">>&nbsp;</span>
      <input type="text" />
    </code>
    <!-- <br>
    <code>
      <span class="green">>&nbsp;</span>
      <input type="text" />
    </code> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    inputEnter(val) {
      this.data[val] = val;
    },
  },
};
</script>

<style scoped>
code input {
  width: 90%;
  color: gray;
  background: none;
  border: none;
  outline-width: 0;
  font-size: 16px;
  font-family: Source Code Pro, Menlo, Monaco, Consolas, Courier New, monospace;
}
/* code input:focus {
  outline-width: 0;
} */
.game {
  color: grey;
  width: calc(90vw - 20px);
  padding: 20px;
  margin: 10px;
  height: calc(100% - 20px);
  border-radius: 5px;
  background: rgb(23, 23, 23);
  box-shadow: inset 0 0 4px rgb(255, 254, 197), inset 0 0 2px rgb(255, 255, 255);
}
.green {
  color: greenyellow;
}
.yellow {
  color: yellow;
}
.blue {
  color: cyan;
}
code {
  line-height: 1.5em;
  font-family: Source Code Pro, Menlo, Monaco, Consolas, Courier New, monospace;
}
</style>
