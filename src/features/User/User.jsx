import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async (token) => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        //using data.status instead of response.status due to nesting in api response
        if (data.status === 200) {
          const { email, firstName, lastName, userName } = data.body;
          setUser({ email, firstName, lastName, userName });
        } else {
          switch (data.status) {
            case 400:
              console.log("Invalid Token");
              break;
            case 500:
              console.log("Internal Server Error");
              break;
            default:
              console.log("An error occurred");
          }
        }
      } catch (error) {
        console.log("The following error occurred: ", error);
      }
    };
    const sessionToken = sessionStorage.getItem("token");
    const localToken = localStorage.getItem("token");
    const token = sessionToken || localToken;

    if (token && !user) {
      setUserToken(token);
      fetchUserInfo(token);
    }
  }, [user]);


};

export default User;