import { useState } from "react";

const Employee = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    address: "",
    gender: "",
    DOJ: "",
    hobbies: "",
  });

  const [emps, setEmps] = useState([]);
  function addEmployee() {
    setEmps([...emps, form]);
  }
  function sortEmployee() {
    setEmps([
      ...emps.sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (b.name > a.name) return -1;
        else return 0;
      }),
    ]);
  }
  function filterEmployee() {
    setEmps([
      ...emps.filter(
        (item) => new Date(item.DOJ).getMonth() === new Date().getMonth()
      ),
    ]);
  }
  return (
    <div>
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">Employee Form</h1>
        <div className="d-flex col-md-6 gap-2">
          <label htmlFor="id" className="form-label">
            ID:
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            id="id"
            onChange={(e) => {
              setForm({ ...form, id: e.target.value });
            }}
          />
        </div>
        <div className="d-flex col-md-6 gap-2">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
        </div>
        <div className="d-flex col-md-6 gap-2">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            onChange={(e) => {
              setForm({ ...form, address: e.target.value });
            }}
          />
        </div>
        <div className="d-flex col-md-6 gap-2">
          <h6>Gender:</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender"
              value="Male"
              onChange={(e) => {
                setForm({ ...form, gender: e.target.value });
              }}
            />
            <label htmlFor="Male">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="gender"
              value="Female"
              onChange={(e) => {
                setForm({ ...form, gender: e.target.value });
              }}
            />
            <label htmlFor="Female">Female</label>
          </div>
        </div>
        <div>
          <h4>Hobbies:</h4>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Traveling"
              id="hobby1"
              name="hobby"
              onChange={(e) => {
                setForm({ ...form, hobbies: e.target.value });
              }}
            />
            <label className="form-check-label" htmlFor="Traveling">
              Traveling
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Singing"
              id="hobby2"
              name="hobby"
              onChange={(e) => {
                setForm({ ...form, hobbies: e.target.value });
              }}
            />
            <label className="form-check-label" htmlFor="Singing">
              Singing
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Cricket"
              id="hobby3"
              name="hobby"
              onChange={(e) => {
                setForm({ ...form, hobbies: e.target.value });
              }}
            />
            <label className="form-check-label" htmlFor="Cricket">
              Cricket
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="doj" className="form-label m-1">
            DOJ:
          </label>
          <input
            type="date"
            v-model="DOJ"
            onChange={(e) => {
              setForm({ ...form, DOJ: e.target.value });
            }}
          />
        </div>
        <div>
          <button className="btn btn-success w-25" onClick={addEmployee}>
            Add
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Employees</h2>
        <button
          type="button"
          className="btn btn-danger float-end m-2"
          onClick={sortEmployee}
        >
          Sort By Name
        </button>
        <button
          type="button"
          className="btn btn-warning float-end m-2"
          onClick={filterEmployee}
        >
          Filter By Month
        </button>
        <table aria-describedby="emp_vue" className="table table-striped mt-5">
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
            {emps.map((emp) => {
              return (
                <tr>
                  <th>{emp.id}</th>
                  <td>{emp.name}</td>
                  <td>{emp.address}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.hobbies}</td>
                  <td>{emp.DOJ}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
