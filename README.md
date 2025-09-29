# 📌 Job Application Tracker

A React + TypeScript project built to practice **Context API + Reducer, nested routes, async/await, loading/error states, and strong typing**.

## 🚀 Features

- Fetch mock job applications using **JSONPlaceholder API**
- Global state management with **Context + Reducer**
- Add, remove, and update job statuses
- Nested routes with **React Router v6**:
  - `/dashboard/applications` → job applications list
  - `/dashboard/stats` → job statistics with `useMemo`
- Protected routes (PrivateRoute) → access Dashboard only if jobs exist
- Dynamic job statuses: `pending`, `interview`, `rejected`, `offer`

## 🛠️ Tech Stack

- React + Vite
- TypeScript
- React Router v6
- Context API + useReducer
- CSS (vanilla)

## 📂 Project Structure

src/
├── context/
│ └── JobProvider.tsx
├── pages/
│ ├── LandingPage.tsx
│ ├── Dashboard.tsx
│ ├── Applications.tsx
│ └── Stats.tsx
├── App.tsx
└── main.tsx

bash
Copy code

## 🎮 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-tracker.git
Navigate into the folder:

bash
Copy code
cd job-tracker
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev

## more coming in the future
