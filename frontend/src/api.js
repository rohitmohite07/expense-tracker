import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/expenses";

export const getExpenses = () => axios.get(API_BASE_URL);

export const addExpense = (expense) => axios.post(API_BASE_URL, expense);

export const deleteExpense = (id) => axios.delete(`${API_BASE_URL}/${id}`);
