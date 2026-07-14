import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, loading }) {
  if (loading) {
    return (
      <p className="py-8 text-center text-slate-400">Loading expenses...</p>
    );
  }

  if (expenses.length === 0) {
    return (
      <p className="py-8 text-center text-slate-400">
        No expenses yet. Add your first one above.
      </p>
    );
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense._id} expense={expense} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExpenseList;
