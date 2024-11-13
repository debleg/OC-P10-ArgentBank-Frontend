import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { handleLogout } from "../Login/logoutUtils";

const User = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, lastName } = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  const effectRan = useRef(false);
  const [invalidToken, setInvalidToken] = useState(false);

  useEffect(() => {
    if (invalidToken) {
      handleLogout(dispatch, navigate, location);
    }
  });

  useEffect(() => {
    // Without the following check React Strict Mode runs the function twice (double API call)
    if (effectRan.current === false) {
      const fetchUserInfo = async () => {
        const token =
          sessionStorage.getItem("token") || localStorage.getItem("token");
        if (token) {
          try {
            const resultAction = await dispatch(userData({ token }));

            //this triggers a logout to account for a faulty token (see useEffect above as function contains navigate)
            if (userData.rejected.match(resultAction)) {
              if (resultAction.error.message == 401) {
                setInvalidToken(true);
              }
            }
          } catch (error) {
            console.log("User information retrieval failed", error);
            if (error.message === 401) {
              setInvalidToken(true);
            }
          }
        }
      };

      fetchUserInfo();
      return () => {
        effectRan.current = true;
      };
    }
  }, [dispatch, error]);
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
