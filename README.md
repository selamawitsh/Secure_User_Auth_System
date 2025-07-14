# Secure User Authentication System

A full-stack user authentication system built with **React** (frontend) and **Node.js/Express** (backend), using **MongoDB** for data storage. This project demonstrates secure user registration, login, and protected routes with JWT authentication.

## Features

- User registration with unique username and email
- Secure password hashing with bcrypt
- User login with JWT token generation
- Protected backend routes (JWT-based)
- Responsive frontend with React and Tailwind CSS
- Error and success feedback for users

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- **Other:** dotenv, cors

## Folder Structure

```
auth-backend/
  ├── config/
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── .env
  ├── server.js
auth-frontend/
  ├── public/
  ├── src/
      ├── components/
      ├── utils/
      ├── App.jsx
      ├── main.jsx
      ├── index.css
  ├── index.html
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB running locally or a MongoDB Atlas URI

### Backend Setup

1. Navigate to the backend folder:
   ```sh
   cd auth-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd auth-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT token
- `GET /api/auth/protected` — Example protected route (requires JWT in `Authorization` header)

## License

This project is licensed under the MIT License.

---

**Author:** selamawit shimeles 
**Contact:** selamshimeles9@gmail.com
