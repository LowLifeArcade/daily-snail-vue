<template>
  <div class="game" @click="focusInput">
    <div v-for="block in blocks" :key="block.id">
      <code>
        <span class="blue">~/main-game</span>
        on
        <span class="yellow"><span class="branch"><i class="fa-solid fa-code-branch"></i></span>main</span>
        via
        <span class="green">v17.7.1</span>
        <br />
        <span class="green">></span>
        {{ block }}
        <br />
        <br />
      </code>
    </div>

    <code>
      <span class="blue">~/main-game</span>
      on
      <span class="yellow"><span class="branch"><i class="fa-solid fa-code-branch"></i></span>main</span>
      via
      <span class="green">v17.7.1</span>
      <br />
      <span class="green">>&nbsp;</span>

      <input
        ref="input"
        class="input"
        v-model="input"
        @keyup.enter="enter($event)"
        type="text"
      />
      <br />
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return { input: '', form: { input1: '' }, display: {}, blocks: [] };
  },
  methods: {
    focusInput() {
      this.$refs.input.focus();
    },
    enter(e) {
      // this.display['display' + e.target.dataset.value] = this.input;
      // const newBlock = parseInt(e.target.dataset.value) + 1;
      const newBlock = e.target.value;
      this.blocks.push(newBlock);
      if (newBlock === 'clear') {
        // window.location.reload();
        this.blocks = [];
      }
      this.input = '';
    },

    // inputEnter(e) {
    //   this.display[e.target.data - value] = e.target.data - value;
    // },
  },
  computed: {
    blocknumber: () => {
      this.block++;
    },
  },
  mounted() {
    // this.$ref.ref1.focus();
    this.$nextTick(() => this.$refs.input.focus());
    console.log(this.$refs);
  },
};
</script>

<style scoped>
.fa-fontawesome {
  font-size: 1.6em;
}
code input {
  position: relative;
  left: -2px;
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
  overflow: scroll;
}
.green {
  color: greenyellow;
}
.yellow {
  color: yellow;
}
.branch {
  font-size: 13px;
}
.blue {
  color: cyan;
}
code {
  line-height: 1.5em;
  font-family: Source Code Pro, Menlo, Monaco, Consolas, Courier New, monospace;
}
</style>
