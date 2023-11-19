import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Expense from "./pages/expense";
import Income from "./pages/income";
import Savings from "./pages/savings";
import Reports from "./pages/reports";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/expenses" element={<Expense />} />
        <Route path="/" element={<Income />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
