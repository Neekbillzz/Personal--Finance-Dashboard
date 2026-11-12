export const userProfileSchema = {
  id: "usr_101",
  name: "Abili Nicholas",
  accountNumber: "Account # 0123456789",
  balance: "₦250,000.50",
  currency: "NGN",
};

export const transactionSchema = [
  {
    id: "tx_001",
    title: "Transfer to Dumebi",
    category: "Expense",
    type: "debit",
    amount: "150000",
    status: "successful",
    date: "15 Aug 2026, 10:30AM",
  },
  {
    id: "tx_002",
    title: "Salary Payment",
    category: "Income",
    type: "credit",
    amount: "90000",
    status: "successful",
    date: "14 Aug 2026, 01:30PM",
  },
  {
    id: "tx_003",
    title: "Groceries",
    category: "Expense",
    type: "debit",
    amount: "10000",
    status: "successful",
    date: "10 Aug 2026, 12:00AM",
  },
  {
    id: "tx_004",
    title: "Transfer to Peter",
    category: "Expense",
    type: "debit",
    amount: "3000",
    status: "successful",
    date: "06 Aug 2026, 03:30PM",
  },
];