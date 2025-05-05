# Personal Task Manager - Backend

This is the backend server for the Personal Task Manager web application.  
It is built with **Node.js**, **Express**, **MongoDB Atlas**, and **Mongoose**.

---

## 🚀 Features

- User Authentication (Register / Login) using JWT
- Password hashing using Bcrypt
- CRUD operations for Tasks (Create, Read, Update, Delete)
- Protected API routes with JWT Authentication
- Hosted on **Railway** with CI/CD

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt.js
- Railway (deployment)

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/personal-task-manager-backend.git
cd personal-task-manager-backend

# 2. Install dependencies
npm install

# 3. Create a `.env` file in the root and add the following:
PORT=5000
JWT_SECRET=yourSecretKey
MONGO_URI=yourMongoDBConnectionString

# 4. Start the server
npm start
