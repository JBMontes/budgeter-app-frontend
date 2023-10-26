import { Link } from "react-router-dom"
function NavigationBar(){

    return(
    <div className="nav">
    <Link to='/transactions'><h1>Budgeter </h1></Link>

    <Link to='/transactions/new'><button>New Transaction</button></Link>
    </div>
   )
}

export default NavigationBar