import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter Username..." />
        <label>Email</label>
        <input type="text" placeholder="Enter Your Email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLogin">
        <Link className="link" to={"/login"}>
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
