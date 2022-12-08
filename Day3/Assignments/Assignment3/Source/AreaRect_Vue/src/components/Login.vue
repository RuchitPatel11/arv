<script>
export default {
  data(){
    return {
      username: "",
      password: "",
      loggedin:false
    };
  },

  methods: {
    login() {
      if (this.username === "admin" && this.password === "admin") {
       this.loggedin=true
      }
    },
  },
};
</script>
<template>
 
  <input
    type="text"
    name="username"
    id="username"
    placeholder="Username"
    v-model="username"
  />
  <input
    type="password"
    name="password"
    id="password"
    placeholder="*******"
    v-model="password"
  />
  <input type="submit" value="Login" @click="login" class="btn btn-primary"/>
  <h1 v-if="loggedin">Login Successful</h1>
</template>
