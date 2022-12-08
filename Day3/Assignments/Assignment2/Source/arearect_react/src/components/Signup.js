import { useState } from "react";

const Signup = () => {
  const [register, setRegister] = useState({ name: "", address: "", pan: "" });
  const [description, setDescription] = useState("");

  function detail() {
    setDescription(
      `Name: ${register.name} lives in ${register.address} and PAN NO is ${register.pan} `
    );
  }

  return (
    <>
      <input
        type="text"
        name="name"
        value={register.username}
        onChange={(e) => {
          setRegister({ ...register, name: e.target.value });
        }}
        placeholder="Enter Username"
      />
      <input
        type="text"
        name="address"
        value={register.password}
        onChange={(e) => {
          setRegister({ ...register, address: e.target.value });
        }}
        placeholder="Enter Address"
      />
      <input
        type="text"
        name="pan"
        value={register.password}
        onChange={(e) => {
          setRegister({ ...register, pan: e.target.value });
        }}
        placeholder="Enter PAN"
      />
      <input type="submit" value="Signup" onClick={detail} />
      {description}
    </>
  );
};

export default Signup;
