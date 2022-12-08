<script>
import Profile from "./components/Profile.vue";

export default {
  components: {
    Profile,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleChange(name) {
      this.name = name;
    },
  },
};
</script>

<template>
  <div>
    <h1>Hello, {{ name }}</h1>
    <Profile @emitName="handleChange" />
  </div>
</template>
