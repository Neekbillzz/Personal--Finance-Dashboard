function StatCard({ title, amount, icon, account, iconColor = "text-green-500" }) {
  const Icon = icon;

  return (
   <div className="bg-slate-200 p-5 rounded-lg min-w-0">
  <p className="font-semibold text-slate-700">{title}</p>
  <div className="flex items-center gap-2 mt-1 min-w-0">
    <h2 className="font-bold text-lg lg:text-xl xl:text-2xl truncate">
      {typeof amount === "number" ? `₦${amount.toLocaleString()}` : amount}
    </h2>
    {Icon && <Icon className={`${iconColor} w-5 h-5 shrink-0`} />}
  </div>
  {account && <p className="text-sm text-slate-600 mt-1">{account}</p>}
</div>
  );
}

export default StatCard;