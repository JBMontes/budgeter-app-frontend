import { Link } from "react-router-dom"

function TransactionCard({id,date, item_name,amount}){

    return(<>
        <div className='transactionCard'>

            <p>{date}</p>
            
            <Link to={`/transactions/${id}`}><p>{item_name}</p></Link>

            <p>${amount}.00</p>

        </div>
    </>)
}

export default TransactionCard