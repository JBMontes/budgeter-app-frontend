import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/AddTransaction.css";

const API = process.env.REACT_APP_API_URL;

function AddTransaction() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    id: "",
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  const addTransaction = () => {
    fetch(`${API}transactions`, {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    if (!transaction.id) {
      const randomId = Math.floor(Math.random() * 1000000);
      setTransaction((prev) => ({
        ...prev,
        id: randomId,
        [event.target.id]: event.target.value,
      }));
    } else {
      setTransaction((prev) => ({
        ...prev,
        [event.target.id]: event.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };

  return (
    <div className="addTransactionMaster">
      <div className="addTransaction">
        <h2>Add Transaction</h2>

        <form onSubmit={handleSubmit}>
          <div className="form">
            <label className="form-label">
              Item Name:
              <input
                id="item_name"
                type="text"
                className="form-input"
                value={transaction.item_name}
                onChange={handleTextChange}
                placeholder="Item-Name"
              />
            </label>
          </div>
          <div className="form">
            <label className="form-label">
              Amount:
              <input
                type="number"
                id="amount"
                className="form-input"
                value={transaction.amount}
                onChange={handleTextChange}
                placeholder="Amount"
              />
            </label>
          </div>
          <div className="form">
            <label className="form-label">Date:</label>
            <input
              type="date"
              id="date"
              className="form-input"
              value={transaction.date}
              onChange={handleTextChange}
              placeholder="Date"
            />
          </div>
          <div className="form">
            <label className="form-label">
              From:
              <input
                type="text"
                id="from"
                className="form-input"
                value={transaction.from}
                onChange={handleTextChange}
                placeholder="From"
              />
            </label>
          </div>

          <div className="form">
            <label className="form-label">
              Category:
              <input
                type="text"
                id="category"
                className="form-input"
                value={transaction.category}
                onChange={handleTextChange}
                placeholder="Category"
              />
            </label>
          </div>
          <div className="buttonP">
            <Link to="/transactions" className="backButtonL">
              <button className="backButton">↩︎</button>
            </Link>

            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransaction;
