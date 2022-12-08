<script>
import Calc from "./components/Calc.vue";
export default {
  components: {
    Calc,
  },
  data() {
    return {
      form: {
        num1: 0,
        num2: 0,
        operation: "+",
        result:"0"
      },
    };
  },
};
</script>

<template>
  <div class="main-div">
    <div class="child">
      <div>
        <label for="num1">Enter Num1: </label>
        <input type="number" name="num1" id="num1" v-model="form.num1" />
      </div>
      <div>
        <label for="num2">Enter Num2: </label>
        <input type="number" name="num2" id="num2" v-model="form.num2" />
      </div>
      <div>
        <select v-model="form.operation">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <Calc :form="form" />
    </div>
  </div>
</template>

<style scoped>
.main-div {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.child > * {
  margin-bottom: 2rem;
}

label,
input,
select {
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
}

</style>
