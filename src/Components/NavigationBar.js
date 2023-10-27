import { Link } from "react-router-dom";
import "../Styles/navigationBar.css";
function NavigationBar() {
  return (
    <div className="nav">
      <Link to="/transactions" className="header_title">
        <h1>Budgeter </h1>
      </Link>

      <Link to="/transactions/new" className="header_buttonL">
        <button className="header_button">New Transaction</button>
      </Link>
    </div>
  );
}

export default NavigationBar;
