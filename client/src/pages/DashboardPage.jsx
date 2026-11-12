import { useEffect, useState } from "react";
import TransactionItem from "../components/TransactionItem";
import StatCard from "../components/StatCard";
import AddTransactionModal from "../components/AddTransactionModal";
import { userProfileSchema, transactionSchema } from "../data/mockData";
import { Wallet, ArrowUp, ArrowDown } from "lucide-react";

function DashboardPage({ searchTerm }) {
  const [userProfile, setUserProfile] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${API_URL}/api/transactions`)
      .then((res) => res.json())
      .then((data) => {
        setUserProfile(data.userProfile);
        setTransactions(data.transactions);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center text-slate-600 font-medium">
        Loading dashboard...
      </div>
    );
  }

  // Safely check that item exists before reading item.type
  const totalIncome = transactions
    .filter(
      (item) =>
        item &&
        item.type &&
        String(item.type).toLowerCase().trim() === "credit",
    )
    .reduce(
      (acc, curr) =>
        acc + (Number(String(curr.amount).replace(/[^0-9.-]+/g, "")) || 0),
      0,
    );

  const totalSpent = transactions
    .filter(
      (item) =>
        item && item.type && String(item.type).toLowerCase().trim() === "debit",
    )
    .reduce(
      (acc, curr) =>
        acc + (Number(String(curr.amount).replace(/[^0-9.-]+/g, "")) || 0),
      0,
    );

  // 3. Calculate Current Balance (Base starting balance + Income - Spent)
  const baseStartingBalance = 0;
  const currentBalance = baseStartingBalance + totalIncome - totalSpent;

  console.log(transactions);

  const handleDelete = async (id) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_URL}/api/transactions/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Filter out the deleted transaction from state
        setTransactions(
          transactions.filter((item) => (item.id || item._id) !== id),
        );
      }
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  return (
    <div>
      <p className="m-5 font-bold -mr-8">Dashboard</p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        <StatCard
          title={"Current Balance"}
          amount={currentBalance}
          icon={Wallet}
          account={userProfile?.accountNumber}
        />
        <StatCard
          title={"Total Income"}
          amount={totalIncome}
          icon={ArrowDown}
        />
        <StatCard title={"Total Spent"} amount={totalSpent} icon={ArrowUp} />
      </div>
      <div className="flex items-center justify-between">
        <p className="m-8">Recent Transactions</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-300 px-5 py-1 mr-4 rounded-lg cursor-pointer"
        >
          + Add Transaction
        </button>
        <button className="bg-emerald-300 px-5 py-1 mr-4 rounded-lg cursor-pointer">
          See All
        </button>
      </div>
      <div className="flex items-center justify-between bg-slate-200 p-4 mx-5 w-[100]px">
        <p>Title</p>
        <p className="w-[50px]">Category</p>
        <p className="w-[50px]">Type</p>
        <p className="w-[50px]">Amount</p>
        <p className="w-[50px]">Status</p>
        <p className="w-[50px]">Date</p>
      </div>
      {transactions.length === 0 ? (
        <div className="py-8 text-center text-slate-400 font-medium">
          No transactions available. Click "+ Add Transaction" to create one!
        </div>
      ) : (
        transactions
          .filter((item) => item && item.title)
          .filter((item) => {
            const currentSearch = searchTerm || "";
            if (!currentSearch) return true;
            const query = currentSearch.toLowerCase();
            return (
              item.title.toLowerCase().includes(query) ||
              (item.category && item.category.toLowerCase().includes(query)) ||
              (item.type && item.type.toLowerCase().includes(query))
            );
          })
          .map((item, index) => (
            <TransactionItem
              key={item.id || item._id || index}
              id={item.id || item._id}
              title={item.title}
              category={item.category}
              type={item.type || "debit"}
              amount={item.amount}
              status={item.status || "successful"}
              date={item.date || "Today"}
              onDelete={handleDelete}
            />
          ))
      )}

      {showModal && (
        <AddTransactionModal
          setShowModal={setShowModal}
          setTransactions={setTransactions}
        />
      )}
    </div>
  );
}

export default DashboardPage;
