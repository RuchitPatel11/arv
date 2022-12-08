<script>
export default {
  computed: {
    evenNumbers() {
      let arr = [];
      for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
          arr.push(i);
        }
      }
      return arr;
    },
  },
};
</script>

<template>
  <h1>Even Numbers</h1>

  <div class="main-div">
    <div v-for="item in evenNumbers" class="even-item">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 3rem;
}

.main-div {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.even-item {
  display: flex;
  height: 75px;
  width: 75px;
  background: linear-gradient(180deg, rgb(125, 162, 243), rgb(71, 137, 236));
  color: white;
  border-radius: 20px 50%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>
