function TransactionItem({
  id,
  title,
  category,
  type,
  amount,
  status,
  date,
  onDelete,
}) {
  const numericAmount = Number(String(amount).replace(/[^\d.]/g, ""));
  if (!amount || isNaN(numericAmount)) return null;

  // Safe case-insensitive check
  const isCredit = type && type.toLowerCase() === "credit";
  const isSuccessful = status && status.toLowerCase() === "successful";

  return (
    <div className="m-5 w-full bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between bg-slate-200 px-3 py-2 text-xs font-medium text-gray-500 uppercase sm:text-xs gap-1">
        <p className="w-[150px] font-medium">{title}</p>
        <p className="w-[100px] text-slate-500">{category}</p>

        {/* Type Column */}
        <p
          className={`w-[100px] font-semibold capitalize ${isCredit ? "text-emerald-700" : "text-rose-700"}`}
        >
          {type}
        </p>

        {/* Amount Column */}
        <p
          className={`w-[100px] font-semibold ${isCredit ? "text-emerald-700" : "text-rose-700"}`}
        >
          {isCredit
            ? `+₦${numericAmount.toLocaleString()}`
            : `-₦${numericAmount.toLocaleString()}`}
        </p>

        {/* Status Column (Dynamic based on status value) */}
        <p
          className={`w-[100px] px-3 py-1 rounded-lg text-sm font-semibold capitalize ${
            isSuccessful
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </p>

        <p className="w-[100px] text-slate-500">{date}</p>
      </div>
      <div>
        <button
          className="text-red-500 px-2 py-1 font-medium text-sm hover:text-red-700"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
