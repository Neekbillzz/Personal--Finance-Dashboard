import { useState } from "react";

function AddTransactionModal({ setShowModal, setTransactions }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Expense");
  const [type, setType] = useState("debit");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("successful");

  // The form is only valid if title and amount have values
  const isFormValid = title.trim() !== "" && amount !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Please fill in both title and amount.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
  title: title.trim(),
  category,
  type,
  amount: Number(String(amount).replace(/[^\d.]/g, "")),
  status,
}),
      });

      const data = await response.json();

      if (response.ok) {
  if (data.transaction) {
    setTransactions((prev) => [
      data.transaction, 
      ...(Array.isArray(prev) ? prev.filter(Boolean) : [])
    ]);
  }
  setShowModal(false);
} else {
        console.error("Server error:", data.error);
      }
    } catch (error) {
      console.error("Failed to submit transaction:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        className="bg-white text-black p-6 rounded-2xl shadow-2xl flex flex-col gap-3 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-2">Add New Transaction</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="successful">Successful</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isFormValid
                ? "bg-emerald-500 text-white cursor-pointer hover:bg-emerald-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTransactionModal;
