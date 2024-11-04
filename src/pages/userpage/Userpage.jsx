import { useState } from "react";
import Button from "../../common/components/button/Button";
import TransactionCard from "./components/transactioncard/TransactionCard";
import UsernameForm from "./components/usernameform/UsernameForm";
import "./userpage.css";
import User from "../../features/User/User";

const Userpage = () => {
  const [editMode, setEditMode] = useState(false);

  const toggleVisibility = () => {
    setEditMode((prevState) => !prevState);
  };

  const transactions = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <main className="main bg-dark">
      <div className={`header ${editMode ? "hidden" : "visible"}`}>
        <User />
        <Button
          className="edit-button"
          type="button"
          text="Edit Name"
          onClick={toggleVisibility}
        />
      </div>
      <UsernameForm
        className={`edit-user-info ${editMode ? "visible" : "hidden"}`}
        onClick={toggleVisibility}
      />
      <h2 className="sr-only">Accounts</h2>
      {transactions.map((transaction, index) => (
        <TransactionCard
          key={index}
          title={transaction.title}
          amount={transaction.amount}
          description={transaction.description}
        />
      ))}
    </main>
  );
};

export default Userpage;
