import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TransactionDetail(){

    const [transaction, setTransaction] = useState({ id: "" });
    let navigate = useNavigate();
    let { index } = useParams();
    
    useEffect(() => {
        fetch(`${API}/transactions/${index}`)
        .then((response) => response.json())
        .then((responseJSON) => setTransaction(responseJSON))
        .catch(() => navigate("/not-found"));
    }, [index, navigate]);
    

    const handleDelete = () => {
        fetch(`${API}/transactions/${index}`, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('Delete successful');
            navigate('/transactions'); 
        })
        .catch(error => {
            console.error('Error deleting:', error);
        });
    };
    return(
        <>
<div className="details">

     <h1>ID: {transaction.id}</h1>

     <h2>Name: {transaction.item_name}</h2>

     <h2>Amount: ${transaction.amount}.00</h2>

     <h2>Date: {transaction.date}</h2>

     <h2>Category: {transaction.category}</h2>

</div>

<div className="button">
<Link to="/transactions/edit"><button> Edit </button></Link>

<button onClick={handleDelete}> Delete </button>
</div>
</>
    )
}

export default TransactionDetail