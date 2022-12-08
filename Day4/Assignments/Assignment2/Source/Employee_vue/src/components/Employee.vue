<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      address: "",
      gender: "",
      DOJ: "",
      hobbies: [],
      employees: [
        {
          id: "1",
          name: "Ruchit Patel",
          address: "Ahemdabad",
          gender: "Male",
          DOJ: "2022-11-03",
          hobbies: ["Travelling", "Cricket"],
        },
        {
          id: "2",
          name: "Anjali Shah",
          address: "Surat",
          gender: "Female",
          DOJ: "2022-09-03",
          hobbies: ["Singing"],
        },
        {
          id: "3",
          name: "Jaymin Patel",
          address: "Vadodara",
          gender: "Male",
          DOJ: "2022-08-01",
          hobbies: ["Cricket"],
        },
      ],
    };
  },

  methods: {
    addEmployee() {
      this.employees.push({
        id: this.id,
        name: this.name,
        address: this.address,
        gender: this.gender,
        DOJ: this.DOJ,
        hobbies: this.hobbies,
      });
    },
    sortEmployee() {
      this.employees.sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (b.name > a.name) return -1;
        else return 0;
      });
    },
    filterEmployee() {
      this.employees = this.employees.filter(
        (item) => new Date(item.DOJ).getMonth() === new Date().getMonth()
      );
    },
  },
};
</script>
<template>
  <div class="d-flex flex-column gap-3">
    <h1 class="text-center">Employee Form</h1>
    <div class="d-flex col-md-6 gap-2">
      <label for="id" class="form-label">ID: </label>
      <input type="text" class="form-control" name="id" id="id" v-model="id" />
    </div>
    <div class="d-flex col-md-6 gap-2">
      <label for="name" class="form-label">Name: </label>
      <input
        type="text"
        class="form-control"
        name="name"
        id="name"
        v-model="name"
      />
    </div>
    <div class="d-flex col-md-6 gap-2">
      <label for="address" class="form-label">Address: </label>
      <input
        type="text"
        class="form-control"
        name="address"
        id="address"
        v-model="address"
      />
    </div>
    <div class="d-flex col-md-6 gap-2">
      <h6>Gender:</h6>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="gender"
          value="Male"
          v-model="gender"
        />
        <label for="Male">Male</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="gender"
          value="Female"
          v-model="gender"
        />
        <label for="Female">Female</label>
      </div>
    </div>
    <div>
      <h4>Hobbies:</h4>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="Traveling"
          id="hobby1"
          name="hobby"
          v-model="hobbies"
        />
        <label class="form-check-label" for="Traveling"> Traveling </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="Singing"
          id="hobby2"
          name="hobby"
          v-model="hobbies"
        />
        <label class="form-check-label" for="Singing"> Singing </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="Cricket"
          id="hobby3"
          name="hobby"
          v-model="hobbies"
        />
        <label class="form-check-label" for="Cricket"> Cricket </label>
      </div>
    </div>
    <div>
      <label for="doj" class="form-label m-1">DOJ: </label>
      <input type="date" v-model="DOJ" />
    </div>
    <div>
      <button @click="addEmployee" class="btn btn-success w-25">Add</button>
    </div>
  </div>
  <div class="mt-4">
    <h2 class="text-center">Employees</h2>
    <button
      type="button"
      class="btn btn-danger float-end m-2"
      @click="sortEmployee"
    >
      Sort By Name
    </button>
    <button
      type="button"
      class="btn btn-danger float-end m-2"
      @click="filterEmployee"
    >
      Filter By Month
    </button>
    <table aria-describedby="emp_vue" class="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Gender</th>
          <th scope="col">Hobbies</th>
          <th scope="col">DOJ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp of employees">
          <th scope="row">{{ emp.id }}</th>
          <td>{{ emp.name }}</td>
          <td>{{ emp.address }}</td>
          <td>{{ emp.gender }}</td>
          <td>{{ emp.hobbies.join(",") }}</td>
          <td>{{ emp.DOJ }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
