import React from "react";
import { Link, useParams,Outlet } from "react-router-dom";
const StdDetails = () => {
  let params = useParams();
  const Students = [
    {
      name: "Ricky John",
      fatherName: "Jack John",
      gender: "Male",
      DOB: "12/07/2011",
      class: "5-A",
      rollNo: 21,
    },
    {
      name: "Micky Tose",
      fatherName: "Woody Tose",
      gender: "Male",
      DOB: "22/03/2012",
      class: "4-C",
      rollNo: 32,
    },
    {
      name: "Angel Pitt",
      fatherName: "Michael Pitt",
      gender: "Female",
      DOB: "19/06/2011",
      class: "6-B",
      rollNo: 13,
    },
  ];
  let std = Students.find((item) => {
    return item.rollNo === parseInt(params.id);
  });
  return (
    <div class="container row mt-5">
      <div class="col-md-3">
        <div class="card p-3">
          <div class="card-block">
            <h3 class="card-title">Student Name: {std.name}</h3>
            <h4 class="card-title">Father Name: {std.fatherName}</h4>
            <h6 class="card-text">Roll No: {std.rollNo}</h6>
            <h6 class="card-text">Class: {std.class}</h6>
            <h6 class="card-text">Gender {std.gender}</h6>
            <h6 class="card-text">Date OF Birth: {std.DOB}</h6>
            <Link to="fees">
              <button class="btn btn-info">Fees</button>
            </Link>
            <Link to="result">
              <button class="btn btn-info">Result</button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
    
  );
};

export default StdDetails;
