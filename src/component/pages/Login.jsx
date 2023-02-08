import Google from "../../image/google.png";
import Facebook from "../../image/facebook.png";
import Github from "../../image/github.png";
import "../../index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;

  const handleLogin = (e) => {
    Axios.post("http://localhost:5000/information", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].Account_name);
      }
    });
    navigation();
  };
  useEffect(() => {
    Axios.get("http://localhost:5000/information").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user?.Account_name);
      }
    });
  }, []);

  const navigation = () => {
    Axios.get("http://localhost:5000/information").then((response) => {
      if (response.data.loggedIn === true) {
        if (response.data.user?.Account_role === "user") {
          navigate("/");
        } else if (response.data.user?.Account_role === "admin") {
          navigate("/admin");
        }
      }
    });
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Username"
            className="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <h4>{loginStatus}</h4>
          <button className="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
