import { useState } from "react";
import Button from "../../common/components/button/Button";
import "./userpage.css"
import TransactionCard from "./components/transactioncard/TransactionCard";

const Userpage = () => {
  const [user, setUser] = useState("user");

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
      <div className="header">
        <h1>
          Welcome back <br />
          {user}
        </h1>
        <Button className="edit-button" type="button" text="Edit Name" />
      </div>
      <h2 className="sr-only">Accounts</h2>
      {transactions.map((transaction, index) => (
         <TransactionCard key={index} title={transaction.title} amount={transaction.amount} description={transaction.description} />
      ))}
     
    </main>
  );
};

export default Userpage;
