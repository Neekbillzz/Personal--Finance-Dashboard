import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import TransactionItem from "./components/TransactionItem";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
   <div className="flex-1 w-full max-w-full overflow-x-hidden p-6">
     <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="grid grid-cols-1 ">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="w-full max-w-7xl mx-auto">
          <DashboardPage searchTerm={searchTerm} />
          <TransactionItem />
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
