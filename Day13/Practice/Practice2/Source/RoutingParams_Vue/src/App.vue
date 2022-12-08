<script>
export default {
  data(){
    return{
      name:""
    }
  },
  methods: {
    goToAbout() {
      this.$router.push("/about/Ruchit");
    },
  },
};
</script>

<template>
  <div>
    <input type="text" name="name" v-model="name" placeholder="Enter Name" />
  </div>
  <div>
    <button @click="goToAbout()" class="btn btn-primary w-25">Click Me</button>
  </div>

  <RouterView />
</template>
