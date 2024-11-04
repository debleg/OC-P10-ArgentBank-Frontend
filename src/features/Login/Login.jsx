import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../Login/loginSlice"
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
  const dispatch = useDispatch();
  const {error} = useSelector((state) => state.login)

  const toggleCheckbox = () => {
    setRemember((prevState) => !prevState);
    console.log(`the checkbox is ${!remember ? "checked" : "not checked"}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await dispatch(login({ email, password})).unwrap;
        if (result) {
            //the storage type is determined by the "Remember me" checkbox (remember = false initially)
            if (remember) {
                localStorage.setItem("token", result);
            } else {
                sessionStorage.setItem("token", result);
            }
        }
        navigate("/user");

    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  return (
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
          {error && <p>Error: {error}</p>}
        </form>
  );
};

export default Login;