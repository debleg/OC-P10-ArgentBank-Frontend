import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./userSlice";

const User = () => {
  const dispatch = useDispatch();
  const { firstName } = useSelector((state) => state.user);
  const token = sessionStorage.getItem("token") || localStorage.getItem("token");

  useEffect(() => {
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
  }, [token, dispatch]);
  return (
    <>{firstName && <h1>
      Welcome back <br />
      {firstName}
    </h1>}
    </>
  );
};

export default User;
