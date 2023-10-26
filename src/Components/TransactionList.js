import React, { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
import TransactionCard from './TransactionCard';

function TransactionList(){

    const [transaction, setTransaction] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {

        fetch(`${API}/transactions`)
            .then((response) => response.json())
            .then((responseJSON) => setTransaction(responseJSON))
            .catch((error) => console.error(error));
    });

    return(<>
    <h1>Transaction List</h1>
        <div>
            {transaction.map((purchase,index)=> {

                return <TransactionCard 
                key={purchase.id}
                id={purchase.id}
                date={purchase.date}
                item_name= {purchase.item_name}
                amount={purchase.amount}
                />
                
            })}
        </div>

    </>)
}

export default TransactionList