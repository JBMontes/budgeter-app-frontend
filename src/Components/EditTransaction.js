import { useState } from "react";
import {useNavigate, useParams, Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditTransaction(){

  
    const navigate = useNavigate();
    let { id } = useParams();
    
    const [transaction, setTransaction] = useState({
    //   id:"",
      item_name: "",
      amount: "",
      date: "",
      from: "",
      category: "",
      
    });
    
    const updateTransaction = () => {

        fetch(`${API}/transactions/${id}`, {
            method: "PUT",
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
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        updateTransaction();
      };

      return(
        <div className="editTransaction">
        <h2>Edit Transaction</h2>
        
        <form onSubmit={handleSubmit}>
                <div className="form">
                <label className='form-label'>Item Name:</label>
                <input 
                id='item_name'
                type='text'
                className="form-input"
                value={transaction.item_name}
                onChange={handleTextChange}
                placeholder="Item-Name"/>
        
                </div>
                <div className="form">
                <label className='form-label'>Amount:</label>
                <input type="text"
                id="amount"
                 className="form-input"
                 value={transaction.amount}
                 onChange={handleTextChange}
                 placeholder="Amount"/>
        
                </div>
                <div className="form">
                <label className='form-label'>Date:</label>
                <input type='text'
                id="date"
                 className='form-input'
                 value={transaction.date}
                 onChange={handleTextChange}
                placeholder="Date"/>
        
                </div>
                <div className="form">
                <label className='form-label'>From:</label>
                <input type='text'
                id="from"
                 className="form-input"
                 value={transaction.from}
                 onChange={handleTextChange}
                  placeholder="From"/>
        
                </div>
               
                <div className="form">
                <label className='form-label'>Category:</label>
                <input type='text'
                id="category"
                 className="form-input"
                 value={transaction.category}
                 onChange={handleTextChange}
                 placeholder="Category"/>
        
                </div>
                <button type='submit' className='btn'>
                   Update
                </button>
            
        </form>

               <Link to="/transactions"> <button>Back</button> </Link>
        
        </div>
            )

}

export default EditTransaction