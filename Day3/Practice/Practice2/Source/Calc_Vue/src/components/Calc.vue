<script>
export default {
  props: {
    form: {
      num1: Number,
      num2: Number,
      operator: String,
    },
  },
  data() {
    return {
      result: "",
    };
  },
  methods: {
    computation() {
      let result;
      const num1 = this.form.num1,
        num2 = this.form.num2;
      switch (this.form.operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
      }
      this.result = result;
    },
  },
};
</script>

<template>
  <button v-on:click="computation()">Calculate</button>
  <h1 style="text-align: center; font-size: 3rem">Result is {{ result }}</h1>
</template>

<style scoped>
button {
  padding: 1rem;
  font-size: 1.5rem;
  color: blue;
  border-radius: 10px;
}
</style>
