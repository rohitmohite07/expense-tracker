import { useState } from "react";

const CATEGORIES = [
  "Food",
  "Transport",
  "Shopping",
  "Bills",
  "Entertainment",
  "Health",
  "Other",
];

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: CATEGORIES[0],
    date: new Date().toISOString().split("T")[0],
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.amount || Number(formData.amount) <= 0) {
      setError("Please enter a valid amount greater than 0.");
      return;
    }
    if (!formData.description.trim()) {
      setError("Please enter a description.");
      return;
    }

    try {
      await onAddExpense({
        ...formData,
        amount: Number(formData.amount),
      });
      // Reset form after successful add
      setFormData({
        amount: "",
        description: "",
        category: CATEGORIES[0],
        date: new Date().toISOString().split("T")[0],
      });
    } catch (err) {
      setError("Failed to add expense. Please try again.");
    }
  };

  return (
    <form
      className="rounded-xl bg-white p-5 shadow-sm sm:p-6"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Add Expense</h2>

      {error && (
        <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mb-3.5 flex flex-col">
        <label
          htmlFor="amount"
          className="mb-1.5 text-sm font-semibold text-slate-600"
        >
          Amount (₹)
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          step="0.01"
          placeholder="e.g. 250"
          value={formData.amount}
          onChange={handleChange}
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none transition-colors focus:border-indigo-600"
        />
      </div>

      <div className="mb-3.5 flex flex-col">
        <label
          htmlFor="description"
          className="mb-1.5 text-sm font-semibold text-slate-600"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="e.g. Grocery shopping"
          value={formData.description}
          onChange={handleChange}
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none transition-colors focus:border-indigo-600"
        />
      </div>

      <div className="mb-3.5 flex flex-col">
        <label
          htmlFor="category"
          className="mb-1.5 text-sm font-semibold text-slate-600"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none transition-colors focus:border-indigo-600"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 flex flex-col">
        <label
          htmlFor="date"
          className="mb-1.5 text-sm font-semibold text-slate-600"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none transition-colors focus:border-indigo-600"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
