function TotalAmount({ total }) {
  return (
    <div className="flex flex-col items-end text-sm text-slate-500">
      <span>Total Spent</span>
      <span className="text-xl font-bold text-emerald-600">
        ₹{total.toFixed(2)}
      </span>
    </div>
  );
}

export default TotalAmount;
