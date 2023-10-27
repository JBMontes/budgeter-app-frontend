import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
import "../Styles/TransactionCard.css";

function TransactionList({ id }) {
  const [transaction, setTransaction] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((response) => response.json())
      .then((responseJSON) => setTransaction(responseJSON))
      .catch((error) => console.error(error));
  });

  return (
    <>
      <h1 className="TLTitle">Transaction List</h1>
      <div className="masterCard">
        {transaction.map((purchase) => {
          return (
            <TransactionCard
              key={purchase.id}
              id={purchase.id}
              date={purchase.date}
              item_name={purchase.item_name}
              amount={purchase.amount}
              from={purchase.from}
              category={purchase.category}
            />
          );
        })}
      </div>
    </>
  );
}

export default TransactionList;
