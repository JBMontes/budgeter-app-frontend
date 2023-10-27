import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
import "../Styles/TransactionCard.css";


function TransactionList({ id}) {
   
    // let sumArr = []
    const API = process.env.REACT_APP_API_URL;
    const [transaction, setTransaction] = useState([]);
   
    useEffect(() => {
        fetch(`${API}/transactions`)
        .then((response) => response.json())
        .then((responseJSON) => setTransaction(responseJSON))
        .catch((error) => console.error(error));
    },[API]);

// for(let price of transaction){
//     sumArr.push(price.amount)
// }

return (
    
    <>
      <h1 className="TLTitle">Transaction List</h1>
       {/* <h2>Total Spent: <span>${sumArr.length > 0 ? sumArr.reduce((a,b)=>{return Number(a) + Number(b)}) : ""}.00</span></h2> */}
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
