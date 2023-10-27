import { Link } from "react-router-dom"
import "../Styles/TransactionCard.css"

function TransactionCard({id,date, item_name,amount}){

    return(<>
   

        <div className='transactionCard'>
            
            <div className="card">

            <p>{date}</p>
            
            <Link to={`/transactions/${id}`}><p>{item_name}</p></Link>

            <p>${amount}.00</p>
            </div>
        </div>
      
    </>)
}

export default TransactionCard