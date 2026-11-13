import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import TransactionItem from "./components/TransactionItem";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 w-full">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="w-full max-w-7xl mx-auto">
          <DashboardPage searchTerm={searchTerm} />
          <TransactionItem />
        </main>
      </div>
    </div>
  );
}

export default App;
