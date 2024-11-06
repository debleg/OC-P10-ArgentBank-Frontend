import { useEffect, useState } from "react";
import "./alertmessage.css";

const AlertMessage = ({ alertText, alertType }) => {
  const [isVisible, setIsVisible] = useState(false);

//IMPORTANT
//To use this component, make sure to have:
//key={alertText} alongside the props in the component
//setAlertText("") called in the form submit function
//if not, an alert will only appear once regardless of how many times the form is submitted!!

  //this is needed to remove the message after 5 seconds
  useEffect(() => {
    if (alertText) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [alertText]);


  if (!isVisible || !alertText) return null;

  return (
    <p
      className={`alert-message ${
        alertType === "error" ? "alert-message-error" : ""
      } ${alertType === "success" ? "alert-message-success" : ""}`}
    >
      {alertText}
    </p>
  );
};

export default AlertMessage;
