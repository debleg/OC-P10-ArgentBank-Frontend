import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./userSlice";

const User = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");
  const effectRan = useRef(false);

  useEffect(() => {
    // Without the following check React Strict Mode runs the function twice (double API call)
    if (effectRan.current === false) {
      const fetchUserInfo = async () => {
        if (token) {
          try {
            await dispatch(userData({ token }));
          } catch (error) {
            console.log("User information retrieval failed", error);
          }
        }
      };

      fetchUserInfo();
      return () => {
        effectRan.current = true;
      };
    }
  }, [token, dispatch]);
  return (
    <>
      {firstName && lastName && (
        <h1>
          Welcome back <br />
          {firstName} {lastName}!
        </h1>
      )}
    </>
  );
};

export default User;
