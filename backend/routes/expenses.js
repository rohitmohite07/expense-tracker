const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// @route   GET /api/expenses
// @desc    Get all expenses 
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1, createdAt: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch expenses", error: err.message });
  }
});

// @route   POST /api/expenses
// @desc    Add a new expense
router.post("/", async (req, res) => {
  try {
    const { amount, description, category, date } = req.body;

    if (!amount || !description || !category || !date) {
      return res.status(400).json({ message: "All fields (amount, description, category, date) are required" });
    }

    const newExpense = new Expense({ amount, description, category, date });
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(400).json({ message: "Failed to add expense", error: err.message });
  }
});

// @route   DELETE /api/expenses/:id
// @desc    Delete an expense by id
router.delete("/:id", async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    await expense.deleteOne();
    res.status(200).json({ message: "Expense deleted", id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete expense", error: err.message });
  }
});

module.exports = router;
