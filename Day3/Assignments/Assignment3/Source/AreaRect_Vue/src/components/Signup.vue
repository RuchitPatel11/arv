<script>
export default {
  data() {
    return {
      name: "",
      pan: "",
      address: "",

      description: "",
    };
  },

  methods: {
    signup() {
      if (this.name !== "" && this.pan !== "" && this.address !== "") {
        this.description = `Name: ${this.name} Address: ${this.address} has PAN No: ${this.pan}`;
      }
    },
  },
};
</script>
<template>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Enter Name"
    v-model="name"
  />

  <input
    type="text"
    name="address"
    id="address"
    placeholder="Enter Address"
    v-model="address"
  />

  <input
    type="text"
    name="pan"
    id="pan"
    placeholder="Enter PAN Number"
    v-model="pan"
  />

  <button @click="signup" class="btn btn-success">Submit</button>
  <h1>{{ description }}</h1>
</template>
