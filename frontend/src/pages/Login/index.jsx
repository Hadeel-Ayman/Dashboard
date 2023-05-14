import React, { useEffect, useReducer } from "react";
import { Input } from "../../component";
import { localhost } from "../../config/config";
import { initialState, reducer } from "../../reducer/userReducer";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const navigation = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = localStorage.getItem("user");
    if (getData) {
      navigation("/");
    }
  });

  const password = state.password;
  const email = state.email;

  const handleLogin = async (e) => {
    e.preventDefault();

    let Data = await fetch(`${localhost}/login`, {
      method: "post",
      body: JSON.stringify({ password, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const loData = await Data.json();
    if (loData.username) {
      localStorage.setItem("user", JSON.stringify(loData));
      navigation("/");
    }
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Input
          value={state.email}
          placeholder={"Enter email"}
          onChange={(e) => dispatch({ type: "email", value: e.target.value })}
        />
        <Input
          value={state.password}
          placeholder={"Enter password"}
          type={"password"}
          onChange={(e) =>
            dispatch({ type: "password", value: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
