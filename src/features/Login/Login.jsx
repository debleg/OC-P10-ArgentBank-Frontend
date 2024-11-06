import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Login/loginSlice"
import InputGeneral from "../../common/components/inputgeneral/InputGeneral";
import InputCheckbox from "../../common/components/inputcheckbox/InputCheckbox";
import Button from "../../common/components/button/Button";
import "./login.css";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../../common/components/alertmessage/AlertMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [alertText, setAlertText] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {error} = useSelector((state) => state.login)

  const toggleCheckbox = () => {
    setRemember((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertText("")
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
            console.log(error)
            //always sends back "null" on first click, so default case, then gets the right code if you reclick without changes
            //possible placeholder text: We could not log you in at this time, please check your email and password or try again later
            switch (error) {
                case "400":
                  setAlertText("Please check your email and password");
                  break;
                case "500":
                    setAlertText("There was an error with the server, please try again later");
                  break;
                default:
                    setAlertText("Something went wrong, please try again later");
              }
        }

    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  return (
        <form onSubmit={handleSubmit}>
          <InputGeneral
            inputType="email"
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
          {error && <AlertMessage key={alertText} alertText={alertText} alertType="error" />}
          <Button className="sign-in-button" type="submit" text="Sign in" />
        </form>
  );
};

export default Login;