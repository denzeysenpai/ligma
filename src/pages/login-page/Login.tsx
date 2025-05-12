
// import { useState } from "react";
import "./Login.css"
import showPassword from "../../lib/assets/login/pass-is-hidden.png";

function Login() {
  return (
    <div className="login-page grid-background">
      <form>
      <h1>Login</h1>
        <div className="row">
          <input type="text" id="username" name="username" required placeholder="Username"/>
        </div>
        <div className="row">
          <input type="password" id="password" name="password" required placeholder="Password"/>
          <button className="absolute">
            <img src={showPassword} alt="" />
          </button>
        </div>
        <div className="row">
            <button type="submit">Login</button>
            <button type="button">Create a new Account</button>
        </div>
      </form>
    </div>
  );
}

export default Login;