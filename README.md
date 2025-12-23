# TaskFlow – Task Manager App

A full-stack Task Manager application developed as part of a **Full Stack Development Internship Task**.  
The application allows users to securely register, log in, and manage their personal tasks with full CRUD functionality.

---

## Features

### Core Features
- User authentication using JWT
- Secure password hashing
- Create, read, update, and delete tasks
- Mark tasks as completed
- Filter tasks (All / Completed / Pending)
- Tasks are private to each authenticated user

### Bonus Features
- Task priority (Low / Medium / High)
- Due date support
- Task completion progress bar
- Search tasks by title
- Dark / Light mode toggle

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- dotenv

### Frontend
- React (Vite)
- React Router
- Axios
- CSS

---

## Project Structure

```
internship-project/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx
    └── vite.config.js
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

Start the backend server:

```bash
npm run dev
```

Backend runs at:  
`http://localhost:5000`

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:  
`http://localhost:5173`

---

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

### Tasks (JWT Protected)
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/tasks` | Get user tasks |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| PATCH | `/api/tasks/:id/toggle` | Toggle task completion |

---

## Screenshots

### Login Page
![Login Page](./screenshots/Screenshot%20(12).png)

### Register Page
![Register Page](./screenshots/Screenshot%20(13).png)

### Dashboard (Dark Mode)
![Dashboard Dark Mode](./screenshots/Screenshot%20(14).png)

### Task Creation
![Task Creation](./screenshots/Screenshot%20(15).png)

### Tasks with Priorities
![Tasks with Priorities](./screenshots/Screenshot%20(16).png)

### Task Filtering - Completed
![Completed Tasks](./screenshots/Screenshot%20(17).png)

### Task Filtering - Pending
![Pending Tasks](./screenshots/Screenshot%20(18).png)

### Progress Bar
![Progress Bar](./screenshots/Screenshot%20(19).png)

### Light Mode
![Light Mode](./screenshots/Screenshot%20(20).png)

### Search Functionality
![Search](./screenshots/Screenshot%20(21).png)

---

## Security
- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- User-specific task access

---

## Submission Notes
- Frontend and backend are included in a single repository
- Implements authentication, CRUD operations, filtering, and bonus features
- Developed and submitted for internship evaluation purposes

---

Built using React and Node.js