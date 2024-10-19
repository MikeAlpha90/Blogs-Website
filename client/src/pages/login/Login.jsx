import { useContext, useRef, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setError(false);
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("User does not exist");
      } else if (err.response && err.response.status === 401) {
        setError("Password is incorrect");
      } else {
        setError("Something went wrong");
      }
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter Your Email..." ref={userRef} />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "20px" }}>
            {error}
          </span>
        )}
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
