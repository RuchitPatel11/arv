import React from "react";
import { useParams } from "react-router-dom";

const StdResult = () => {
  let params = useParams();

  const Students = [
    {
      rollNo: 21,
      totalMarks: 600,
      obtainedMarks: 581,
      grade: "A+",
    },
    {
      rollNo: 32,
      totalMarks: 600,
      obtainedMarks: 510,
      grade: "B+",
    },
    {
      rollNo: 13,
      totalMarks: 600,
      obtainedMarks: 424,
      grade: "C",
    },
  ];

  let std = Students.find((item) => {
    return item.rollNo === parseInt(params.id);
  });
  return (
    <div class="row mt-4">
      <div class="container col-md-3">
        <div class="card p-3">

          <div class="card-block">
            <h4 class="card-title">Roll No: {std.rollNo}</h4>
            <h4 class="card-title">Total Marks: {std.totalMarks}</h4>
            <h6 class="card-text">Obtained Marks: {std.obtainedMarks}</h6>
            <h6 class="card-text">Grade: {std.grade}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StdResult;
