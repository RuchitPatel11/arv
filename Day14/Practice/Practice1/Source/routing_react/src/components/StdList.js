import React from "react";
import { Link } from "react-router-dom";

const StdList = () => {
  const Students = [
    {
      name: "Ricky John",
      rollNo: 21,
    },
    {
      name: "Micky Tose",
      rollNo: 32,
    },
    {
      name: "Angel Pitt",
      rollNo: 13,
    },
  ];

  return (
    <div>
      {Students.map((student) => {
        return (
            <div class="d-flex">
          <div class="card p-3" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Name: {student.name}</h5>
              <p class="card-text">Roll No: {student.rollNo}</p>
              <Link to={"/students/" + student.rollNo}>
                <button className="btn btn-primary">See Full Details</button>
              </Link>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default StdList;
