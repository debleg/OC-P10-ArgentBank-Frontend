import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Login/loginSlice"
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const resultAction = await dispatch(loginUser({ email, password}));
        if (loginUser.fulfilled.match(resultAction)) {
            const token = resultAction.payload;
            //the storage type is determined by the "Remember me" checkbox (remember = false initially)
            if (remember) {
                localStorage.setItem("token", token);
            } else {
                sessionStorage.setItem("token", token);
            }
            navigate("/user");
        } else {
            console.log("Login failed:", resultAction.error.message)
        }
        


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