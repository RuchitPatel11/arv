<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    displayParent() {
      this.$emit("emitName", this.name);
    },
  },
  emits: ["emitName"],
};
</script>

<template>
  <div>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Enter Name"
      v-model="name"
      @input="displayParent"
    />
  </div>
</template>
