
function TransactionCard({date, item_name,amount}){

    return(<>
        <div className='transactionCard'>

            <p>{date}</p>
            
            <p>{item_name}</p>

            <p>{amount}</p>
        </div>
    </>)
}

export default TransactionCard