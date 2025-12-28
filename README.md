# Task Management App – Final Capstone Project

## 📌 Project Overview
This is a **full-stack Task Management App** built as part of the **Final Capstone Project**.  
The project implements authentication, role-based access control, and complete CRUD functionality with proper frontend–backend integration.


## 🛠️ Tech Stack

### Frontend
- React
- CSS (custom styling)
- Fetch API
- JWT Authentication

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js


## 🔐 Authentication Features
- User Registration
- User Login with JWT
- Secure token storage in browser
- Protected routes
- Logout functionality


## 👥 Role-Based Access Control
Two roles are implemented:

### 👤 User
- Can create tasks
- Can view **only their own tasks**
- Can update and delete **only their own tasks**

### 🛡️ Admin
- Can view **all users’ tasks**
- Can update and delete **any task**
- Admin access is enforced at backend level


## 📋 Core CRUD Module (Tasks)

### Task Features
- Create Task
- Read Tasks
- Update Task Status (Pending / Completed)
- Delete Task

All CRUD operations are fully connected between frontend and backend.


## ✅ Validation & Error Handling
- Backend validation for required fields
- Frontend form validation
- Meaningful error messages
- Graceful handling of API errors

## 📂 Project Structure
     
            task-management-app/
        │
        ├── backend/
        │ ├── models/
        │ ├── routes/
        │ ├── middleware/
        │ ├── server.js
        │ └── .env
        │
        ├── frontend/
        │ ├── src/
        │ │ ├── pages/
        │ │ ├── services/
        │ │ ├── styles/
        │ │ └── App.js
        │ └── package.json
        │
        └── README.md

## ▶️ How to Run the Project

### Backend
    cd backend
    npm install
    npx nodemon server.js
### Frontend
    cd frontend
    npm install
    npm start

🧪 Testing Credentials
    
     Normal User
         Email: suba@test.com
         Password: 123456

     Admin User
         Email: admin@test.com
         Password: admin123

📸 Screenshots Included

        Login Page

        User Dashboard

        Admin Dashboard

        Task CRUD Operations



