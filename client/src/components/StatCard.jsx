function StatCard({ title, amount, icon, account, iconColor = "text-green-500" }) {
  const Icon = icon;

  return (
    <div className="bg-slate-200 p-6 rounded-lg ml-6">
      <p className="font-semibold">{title}</p>
      <div className="flex items-center gap-2">
        <h2 className="font-bold text-2xl">
          {typeof amount === "number" ? `₦${amount.toLocaleString()}` : amount}
        </h2>
        {Icon && <Icon className={`${iconColor} mt-1`} />}
      </div>
      {account && <p>{account}</p>}
    </div>
  );
}

export default StatCard;