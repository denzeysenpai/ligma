
// import { useState } from "react";
import "./Login.css"
import showPassword from "../../lib/assets/login/pass-is-hidden.png";
import hidePassword from "../../lib/assets/login/pass-is-shown.png";
import welcomeAboard from "../../lib/assets/login/welcome-aboard.svg";
import ligmaLogo from "../../lib/assets/common/ligma-logo.png";
import { useState } from "react";

function Login() {
    const passwordVisible = useState(true);
    const [val, setShowPassword] = passwordVisible;
  return (
    <div className="login-page grid-background">
      <form>
        <div className="box">
            <img src={ligmaLogo} alt="" className="logo" />
            {/* <h1>Login to Ligma</h1> */}
            <div className="row">
            <input type="text" id="username" name="username" required placeholder="Username"/>
            </div>
            <div className="row">
            <input type={val ? "password" : "text"} id="password" name="password" required placeholder="Password"/>
            <button className="absolute" type="button" onClick={() => {
                setShowPassword(!val);}}>
                <img src={val ? showPassword : hidePassword} alt="" />
            </button>
            </div>
            <div className="row">
                <button type="submit">Login</button>
                <button type="button">Create a new Account</button>
            </div>
        </div>
        <div className="box color">
            <img src={welcomeAboard} alt="" id="img-block"/>
        </div>
      </form>
    </div>
  );
}

export default Login;