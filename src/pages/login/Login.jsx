import { useState } from "react";
import InputGeneral from "../../common/components/inputgeneral/InputGeneral";
import InputCheckbox from "../../common/components/inputcheckbox/InputCheckbox";
import Button from "../../common/components/button/Button";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  //use navigate but also only on formsubmit
  
  const toggleCheckbox = () => {
    setRemember((prevState) => !prevState);
    console.log(`the checkbox is ${!remember ? "checked" : "not checked"}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form is submitted", email, password);
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
