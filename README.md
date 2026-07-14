# Personal Expense Tracker (MERN Stack)

A full-stack expense tracker built with MongoDB, Express, React (Vite), and Node.js.

## Features
- Add expenses (amount, description, category, date)
- View all expenses in a list
- See total amount spent
- Delete individual expenses
- Clean, responsive UI

## Folder Structure
```
expense-tracker/
├── backend/          # Express + MongoDB API
│   ├── models/Expense.js
│   ├── routes/expenses.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/         # React (Vite) app
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── api.js
    │   └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Step-by-Step Setup

### 1. Prerequisites
- Node.js (v18+) installed
- MongoDB running locally, OR a free MongoDB Atlas cluster (https://www.mongodb.com/cloud/atlas)

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
```
Open `.env` and set your `MONGO_URI`:
- Local MongoDB: `mongodb://127.0.0.1:27017/expense-tracker` (already set as default)
- Atlas: paste your connection string from Atlas

Start the backend:
```bash
npm run dev
```
You should see `MongoDB connected` and `Server running on port 5000`.

Test it works by visiting `http://localhost:5000` in your browser — it should say "Expense Tracker API is running".

### 3. Frontend Setup
Open a **new terminal**:
```bash
cd frontend
npm install
npm run dev
```
This starts the React app at `http://localhost:3000`.

### 4. Use the App
Open `http://localhost:3000` in your browser. Add an expense using the form — it will save to MongoDB and appear in the list, with the total updating automatically. Click the ✕ button to delete any expense.

## API Endpoints (Backend)
| Method | Endpoint            | Description          |
|--------|----------------------|-----------------------|
| GET    | /api/expenses         | Get all expenses      |
| POST   | /api/expenses         | Add a new expense     |
| DELETE | /api/expenses/:id     | Delete an expense     |

### Sample POST body
```json
{
  "amount": 250,
  "description": "Grocery shopping",
  "category": "Food",
  "date": "2026-07-13"
}
```

## Notes for Submitting the Assignment
- Make sure both servers (backend on :5000, frontend on :3000) are running when you demo it.
- If you deploy: deploy the backend (e.g., Render/Railway) with your MongoDB Atlas URI as an env var, deploy the frontend (e.g., Vercel/Netlify), and update `API_BASE_URL` in `frontend/src/api.js` to point to your deployed backend URL.
- `.env` is intentionally not included — never commit real credentials. Use `.env.example` as a template.
