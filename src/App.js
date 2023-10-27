import TransactionList from "./Components/TransactionList";
import NavigationBar from "./Components/NavigationBar.js";
import AddTransaction from "./Components/AddTransaction";
import TransactionDetail from "./Components/TransactionDetail";
import EditTransaction from "./Components/EditTransaction";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Routes>
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="/transactions/new" element={<AddTransaction />} />
          <Route path="/transactions/:id" element={<TransactionDetail />} />
          <Route path="/transactions/:id/edit" element={<EditTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
