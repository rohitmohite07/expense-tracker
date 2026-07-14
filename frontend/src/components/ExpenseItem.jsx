function ExpenseItem({ expense, onDelete }) {
  const formattedDate = new Date(expense.date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <li className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-100 py-3 last:border-b-0">
      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-slate-800">
          {expense.description}
        </span>
        <span className="w-fit rounded-full bg-indigo-50 px-2 py-0.5 text-xs text-indigo-600">
          {expense.category}
        </span>
        <span className="text-xs text-slate-400">{formattedDate}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold text-red-700">
          ₹{expense.amount.toFixed(2)}
        </span>
        <button
          onClick={() => onDelete(expense._id)}
          aria-label="Delete expense"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-sm text-red-700 transition-colors hover:bg-red-200"
        >
          ✕
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;
