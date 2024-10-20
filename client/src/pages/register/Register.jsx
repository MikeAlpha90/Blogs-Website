import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLogin" type="submit">
        <Link className="link" to={"/login"}>
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "20px" }}>
          Something went wrong...!
        </span>
      )}
    </div>
  );
};

export default Register;
