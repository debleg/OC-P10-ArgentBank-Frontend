import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Login/loginSlice";
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
  const [alertText, setAlertText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setRemember((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertText("");
    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(resultAction)) {
        const token = resultAction.payload;
        //the storage type is determined by the "Remember me" checkbox (remember = false initially)
        if (remember) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        navigate("/user");
      } else if (loginUser.rejected.match(resultAction)) {
        //without this process the error, if taken from the store, returns null unless the button is clicked twice
        const errorStatus = resultAction.payload;
        switch (errorStatus) {
          case "400":
            setAlertText("Please check your email and password");
            break;
          case "500":
            setAlertText(
              "There was an error with the server, please try again later"
            );
            break;
          default:
            setAlertText("Something went wrong, please try again later");
        }
      }
    } catch (error) {
      console.log("Login failed:", error);
      setAlertText("An unexpected error occurred");
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
      {alertText && (
        <AlertMessage key={alertText} alertText={alertText} alertType="error" />
      )}
      <Button className="sign-in-button" type="submit" text="Sign in" />
    </form>
  );
};

export default Login;