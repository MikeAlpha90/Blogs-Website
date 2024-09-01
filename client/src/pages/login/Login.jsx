import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter Your Email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter Your password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegister">
        <Link className="link" to={"/register"}>
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
