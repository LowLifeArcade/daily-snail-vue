<template>
  <NavVue />
  <form>
    <label>Email</label>
    <input v-model="email" type="email" />
    <label>Password</label>
    <input v-model="password" type="password" />
    <label for="select">Shell Color:</label>
    <select v-model="shell" name="shell" id="">
      <option value="brown">Brown</option>
      <option value="yellow">Yellow</option>
    </select>

    <label for="">Skills</label>
    <input type="text" @keyup="addSkill" v-model="tempSkill" />
    <div v-for="skill in skills" :key="skill">
      <div @click="removeSkill">
        {{ skill }}
      </div>
    </div>

    <div class="terms">
      <input v-model="terms" type="checkbox" required />
      <label for="">Accept?</label>
    </div>
  </form>
  {{ shell }}
</template>

<script>
import NavVue from '../components/NavVue.vue';
export default {
  name: 'submission',
  components: {
    NavVue,
  },
  data() {
    return {
      email: '',
      password: '',
      shell: 'brown',
      terms: false,
      tempSkill: '',
      skills: [],
    };
  },

  mounted() {},

  methods: {
    addSkill(e) {
      console.log(e.keyCode);
      // if (e.key === ',' && this.tempSkill) {
      //   if (!this.skills.includes(this.tempSkill)) {
      //     // let skill = this.tempSkill;
      //     const skill = this.tempSkill.slice(0, -1);
      //     this.skills.push(skill);
      //   } else {
      //     // display error
      //   }
      //   this.tempSkill = '';
      // }
      if (e.keyCode === 13 && this.tempSkill) {
        try {
          if (!this.skills.includes(this.tempSkill)) {
            const skill = this.tempSkill.slice(0, -1);
            console.log(skill);
            this.skills.push(skill);
          } else {
            // display error
            console.log(new Error('error'));
          }
          this.tempSkill = '';
        } catch (error) {
          console.log(new Error(error));
        }
      }
    },
    removeSkill(e){
     const index = this.skills.indexOf(e.target.innerText)
console.log(e.target.innerText)
      if (index > -1) {
        this.skills.splice(index, 1)
      }
    }
  },
};
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 30px;
  background: salmon;
  padding: 30px;
  border-radius: 3px;
}
label {
  color: antiquewhite;
  display: inline-block;
  margin: 10px 0 10px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 3px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
}
input:focus {
  outline: none;
  /* box-shadow: 0 0 7px rgba(0, 0, 0, 0.6); */
}
input[type='checkbox'] {
  display: inline-block;
  width: 12px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>
