<script>
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minLength } from "@vuelidate/validators";

import Error from "./components/Error.vue";

export default {
  components: {
    Error,
  },
  data() {
    return {
      v$: useVuelidate(),
      Id: null,
      Name: "",
      Address: "",
      Profiles: [],
    };
  },
  validations() {
    return {
      Id: { required: helpers.withMessage("Id is Required", required) },
      Name: {
        required: helpers.withMessage("Name is Required", required),
        minLength: helpers.withMessage(
          "Name must be at least 3 characters long",
          minLength(3)
        ),
      },
      Address: {
        required: helpers.withMessage("Address is Required.", required),
      },
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();

      if (!(await this.v$.$validate())) return;
      this.Profiles.push({
        Id: this.Id,
        Name: this.Name,
        Address: this.Address,
      });
    },
  },
};
</script>
<template>
  <div class="flex flex-col gap-10">
    <form @submit="submit">
      <input
        type="number"
        name="id"
        id="id"
        v-model="Id"
        @blur="v$.Id.$touch"
        placeholder="Enter ID"
      />
      <Error :errors="v$.Id.$errors" />
      <input
        type="text"
        name="name"
        id="name"
        v-model="Name"
        @blur="v$.Name.$touch"
        placeholder="Enter Name"
      />
      <Error :errors="v$.Name.$errors" />
      <input
        type="text"
        name="address"
        id="address"
        v-model="Address"
        @blur="v$.Address.$touch"
        placeholder="Enter Address"
      />
      <Error :errors="v$.Address.$errors" />
      <button type="submit">Submit</button>
    </form>
  </div>
  <div>
    <table aria-describedby="profile-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profile of Profiles" :key="profile.Id">
          <td>{{ profile.Id }}</td>
          <td>{{ profile.Name }}</td>
          <td>{{ profile.Address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
