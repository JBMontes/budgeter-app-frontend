import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../Styles/TransactionDetail.css";
const API = process.env.REACT_APP_API_URL;

function TransactionDetail() {
  const [transaction, setTransaction] = useState({});
  let navigate = useNavigate();
  let { id } = useParams();
  
  useEffect(() => {
      fetch(`${API}/transactions/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => setTransaction(responseJSON))
      .catch(() => navigate("/not-found"));
    }, [id, navigate]);
    

  const handleDelete = () => {
    fetch(`${API}/transactions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Delete successful");
        navigate("/transactions");
      })
      .catch((error) => {
        console.error("Error deleting:", error);
      });
  };

  return (
    <>
      <div className="borderMaster">
        <div className="details">
          <h1 className="detailsH">ID: {transaction.id}</h1>

          <h2 className="detailsH">Name: {transaction.item_name}</h2>

          <h2 className="detailsH">Amount: ${transaction.amount}.00</h2>

          <h2 className="detailsH">Date: {transaction.date}</h2>

          <h2 className="detailsH">Category: {transaction.category}</h2>
        </div>
      </div>
      <div className="button_details_master">
        <div className="button_details">
          <Link to="/transactions" className="backButtonL">
            <button className="backButton">↩︎</button>
          </Link>

          <Link to={`/transactions/${id}/edit`}>
            <button className="detailButton"> Edit </button>
          </Link>

          <button onClick={handleDelete} className="detailButtonD">
            {" "}
            🗑️{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default TransactionDetail;
