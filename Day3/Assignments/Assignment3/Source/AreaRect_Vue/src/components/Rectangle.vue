<script>
export default {
  data() {
    return {
      length: Number,
      breadth: Number,
      area: 0,
    };
  },
  methods: {
    computeArea() {
      this.area = this.length * this.breadth;
      console.log(area);
    },
  },
};
</script>

<template>
  <div class="main-div">
    <div class="child">
      <div>
        <label for="length">Enter Length: </label>
        <input
          type="number"
          name="length"
          id="length"
          placeholder="Unit:(cm)"
          v-model="length"
        />
      </div>
      <div>
        <label for="breadth">Enter Breadth: </label>
        <input
          type="number"
          name="breadth"
          id="breadth"
          placeholder="Unit:(cm)"
          v-model="breadth"
        />
      </div>
    </div>
  </div>

  <button v-on:click="computeArea" class="btn btn-danger">Calculate Area</button>
  <h1 style="text-align: center; font-size: 3rem">Area = {{ area }}</h1>
</template>
