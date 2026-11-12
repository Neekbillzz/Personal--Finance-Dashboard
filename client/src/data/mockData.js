export const userProfileSchema = {
  id: "usr_101",
  name: "Mary Jane",
  accountNumber: "Account # 0123456789",
  balance:"₦250,000.50",
  currency: "NGN",
};

export const transactionSchema = [
  {
    id: "tx_001",
    title: "Transfer to Sarah",
    category: "Expense",
    type: "debit",
    amount: "₦150,000.00",
    status: "successful",
    date: "15 Aug 2026, 10:30AM",
  },
  {
    id: "tx_002",
    title: "Salary Payment",
    category: "Income",
    type: "credit",
    amount: "₦90,000.00",
    status: "successful",
    date: "14 Aug 2026, 01:30PM",
  },
   {
    id: "tx_003",
    title: "Groceries",
    category: "Expense",
    type: "debit",
    amount: "₦10,000.00",
    status: "successful",
    date: "10 Aug 2026, 12:00AM",
  },
];
