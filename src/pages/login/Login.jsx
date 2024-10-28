import InputGeneral from "../../common/components/inputgeneral/InputGeneral"
import InputCheckbox from "../../common/components/inputcheckbox/InputCheckbox";
import Button from "../../common/components/button/Button";
import "./login.css"

const Login = () => {
  //use navigate but also only on formsubmit
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
            <InputGeneral inputType="text" inputID="username" labelText="Username"/>
            <InputGeneral inputType="password" inputID="password" labelText="Password"/>
            <InputCheckbox inputID="remember-me" labelText="Remember me"/>
            <Button className="sign-in-button" type="submit" text="Sign in" />
        </form>
      </section>
    </main>
  );
};

export default Login;
