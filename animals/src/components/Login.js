import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  // How can we log in? What do we need to do?
  const [login, setLogin] = useState({ userName: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
    console.log(login);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", login).then((res) => {
      console.log(res);
      window.localStorage.setItem("token", res.data.payload);
      props.history.push("/creatures");
    });
    //    .catch()
  };

  return (
    <div>
      <h1>Welcome to the Safari App!</h1>
      <h2>I can't show you more until you log in. Please build out a login.</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          label="username"
          value={login.username}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="password"
          label="password"
          value={login.password}
          onChange={handleChange}
          className="input"
        />

        <button>Login</button>
      </form>
    </div>
  );
}
