import "./loginpage.css";
import Login from "../../features/Login/Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      sessionStorage.getItem("token") || localStorage.getItem("token");
    if (token) {
      navigate("/user");
    }
  });

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
