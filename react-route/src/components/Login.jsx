import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function onSubmit() {
    //code for checking user credential
    //if credential is valid, login success
    navigate("/dashboard");
    // we should pass arguements
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onSubmit}>LogIn</button>
    </div>
  );
}

export default Login;
