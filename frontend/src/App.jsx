import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalAmount from "./components/TotalAmount";
import { getExpenses, addExpense, deleteExpense } from "./api";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const res = await getExpenses();
      setExpenses(res.data);
      setErrorMsg("");
    } catch (err) {
      setErrorMsg("Could not load expenses. Is the backend server running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (expenseData) => {
    const res = await addExpense(expenseData);
    setExpenses((prev) => [res.data, ...prev]);
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
      setExpenses((prev) => prev.filter((exp) => exp._id !== id));
    } catch (err) {
      setErrorMsg("Failed to delete expense. Please try again.");
    }
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            💰Personal Expense Tracker
          </h1>
        </header>

        {errorMsg && (
          <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-700">
            {errorMsg}
          </p>
        )}

        <main className="space-y-6">
          <ExpenseForm onAddExpense={handleAddExpense} />

          <section className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <h2 className="text-lg font-semibold text-slate-800">
                Your Expenses
              </h2>
              <TotalAmount total={total} />
            </div>
            <ExpenseList
              expenses={expenses}
              onDelete={handleDeleteExpense}
              loading={loading}
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
