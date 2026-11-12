import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import TransactionItem from "./components/TransactionItem";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex">
      <Sidebar />

      <div className="grid grid-cols-1 ">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="mb-250">
          <DashboardPage searchTerm={searchTerm} />
          <TransactionItem />
        </div>
      </div>
    </div>
  );
}

export default App;
