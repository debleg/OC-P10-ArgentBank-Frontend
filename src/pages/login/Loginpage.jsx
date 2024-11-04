import "./loginpage.css";
import Login from "../../features/Login/Login";

const Loginpage = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Login />
      </section>
    </main>
  );
};

export default Loginpage;
