<script>
export default {
  props: {
    form: {
      num1: Number,
      num2: Number,
    },
  },
};
</script>

<template>

  <div v-if="this.form.num1 || this.form.num2">
    <div v-if="this.form.num1 > this.form.num2">
      <h1>
        {{ this.form.num1 }} is Greater
      </h1>
    </div>
    <div v-else-if="this.form.num2 > this.form.num1">
      <h1>
        {{ this.form.num2 }} is Greater
      </h1>
    </div>

    <div v-else><h1>Both are Equal</h1></div>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
  font-size: 3rem;
  color:#008000;
}
</style>
