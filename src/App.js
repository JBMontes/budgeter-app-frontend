import TransactionList from "./Components/TransactionList";
import NavBar from "./Components/NavBar.js";
import AddTransaction from "./Components/AddTransaction";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="/transactions/new" element={<AddTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
