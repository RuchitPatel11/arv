import React from "react";
import { useParams } from "react-router-dom";

const StdFees = () => {
  let params = useParams();
  const Students = [
    {
      rollNo: 21,
      status: "Paid",
      amount: "₹50,000",
      paymentMode: "Cash",
    },
    {
      rollNo: 32,
      status: "Paid",
      amount: "₹ 50,000",
      paymentMode: "NEFT",
    },
    {
      rollNo: 13,
      status: "Paid",
      amount: "₹ 50,000",
      paymentMode: "RTGS",
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
            <h4 class="card-title">Status: {std.status}</h4>
            <h6 class="card-text">Payment Mode: {std.paymentMode}</h6>
            <h6 class="card-text">Amount: {std.amount}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StdFees;
