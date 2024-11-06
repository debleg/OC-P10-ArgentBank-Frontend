import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./userSlice";

const User = () => {
  const dispatch = useDispatch();
  const { firstName } = useSelector((state) => state.user);
  const lastName = useSelector(state => state.user.lastName)
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
    <>{firstName && lastName && <h1>
      Welcome back <br />
      {firstName}{' '}{lastName}!
    </h1>}
    </>
  );
};

export default User;
