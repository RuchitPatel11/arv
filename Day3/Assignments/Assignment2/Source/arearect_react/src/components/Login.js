import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const login = (e) => {
    e.preventDefault();
    if (user.username !== "admin" || user.password !== "admin") {
      alert("Wrong Credentials");
    }else{
      alert("Login Successfull")
    }
  };

  return (
    <>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
        placeholder="Enter Username"
      />
       <input
        type="password"
        name="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="Enter Password"
      />
      <input type="submit" value="Login" onClick={login}/>
    </>
  );
};

export default Login ;