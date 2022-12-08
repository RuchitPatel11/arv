<script>
import Greater from "./components/Greater.vue";
export default {
  components: {
    Greater,
  },
  data() {
    return {
      form: {
        num1: 0,
        num2: 0,
      },
    };
  },
};
</script>

<template>
    
  <div class="main-div">
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="vue-logo">
    </div>
    <div>
      <h1>Find the Greater</h1>
    </div>
   
    <div class="child">
      <div>
        <label for="num1">Enter Num1: </label>
        <input type="number" name="num1" id="num1" v-model="form.num1" />
      </div>
      <div>
        <label for="num2">Enter Num2: </label>
        <input type="number" name="num2" id="num2" v-model="form.num2" />
      </div>
      <Greater :form="form" />
    </div>
  </div>
</template>

<style scoped>
img{
  height:200px;
  width:200px
}
h1{
  font-size:3rem;
  color:blue
}
.main-div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.child > * {
  margin-bottom: 1rem;
}

label,
input,
select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
}
</style>
