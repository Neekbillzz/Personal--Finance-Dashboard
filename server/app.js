import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { transactionSchema, userProfileSchema } from "./data.js";

const app = express();

app.use(express.json());
app.use(cors());

let transactions = [
   
{id: 'tx_001', title: 'Transfer to Dumebi', category: 'Expense', type: 'debit', amount: '150000'},
{id: 'tx_002', title: 'Salary Payment', category: 'Income', type: 'credit', amount: '90000'},
{id: 'tx_003', title: 'Groceries', category: 'Expense', type: 'debit', amount: '10000'},
{id: 'tx_004', title: 'Transfer to Peter', category: 'Expense', type: 'debit', amount: '3000'}

]

app.get("/api/transactions", (req, res) => {
  res
    .status(200)
    .json({ userProfile: userProfileSchema, transactions: transactionSchema });
});

app.post("/api/transactions", (req, res) => {
  const { title, category, type, amount, status = "successful" } = req.body;
  const validStatuses = ["successful", "pending", "failed"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      error: "Invalid status. Must be 'successful', 'pending', or 'failed'.",
    });
  }
  const newTransaction = {
    title,
    category,
    type,
    amount:`₦${amount}`,
    status,
    id: `tx_00${transactionSchema.length + 1}`,
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  };
  transactionSchema.unshift(newTransaction);
  res.status(201).json({
    message: "Transaction updated successfully",
    transaction: newTransaction,
    transactions: transactionSchema,
  });
});

app.delete("/api/transactions/:id", (req, res) => {
  const { id } = req.params;
  transactions = transactions.filter(t => (t.id || t._id) !== id);
  res.status(200).json({ message: "Transaction deleted successfully", id });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
