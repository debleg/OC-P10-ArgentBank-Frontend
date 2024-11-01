import { useState } from "react";
import InputGeneral from "../../common/components/inputgeneral/InputGeneral";
import InputCheckbox from "../../common/components/inputcheckbox/InputCheckbox";
import Button from "../../common/components/button/Button";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const toggleCheckbox = () => {
    setRemember((prevState) => !prevState);
    console.log(`the checkbox is ${!remember ? "checked" : "not checked"}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      //using data.status instead of response.status due to nesting in api response
      if (data.status === 200) {
        if (data.body.token) {
          //the storage type is determined by the "Remember me" checkbox (remember = false initially)
          if (!remember) {
            sessionStorage.setItem("token", data.body.token);
          } else {
            localStorage.setItem("token", data.body.token);
          }
        }
        navigate("/user");
      } else {
        switch (data.status) {
          case 400:
            alert("Please check your email and password");
            break;
          case 500:
            alert("There was an error with the server, please try again later");
            break;
          default:
            alert("Something went wrong, please try again later");
        }
      }
    } catch (error) {
      console.log("The following error occurred: ", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <InputGeneral
            inputType="text"
            inputID="username"
            labelText="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGeneral
            inputType="password"
            inputID="password"
            labelText="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputCheckbox
            inputID="remember-me"
            labelText="Remember me"
            checked={remember}
            onChange={toggleCheckbox}
          />
          <Button className="sign-in-button" type="submit" text="Sign in" />
        </form>
      </section>
    </main>
  );
};

export default Login;
