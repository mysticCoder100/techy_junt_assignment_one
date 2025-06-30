# 🎓 Student Management API (Node.js + Express.js)

A RESTful API built with **Node.js** and **Express.js** for managing student records. It follows best practices including modular routing, layered architecture, robust error handling, and MongoDB database integration using Mongoose.

---

## 📑 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Pagination and Filtering](#pagination-and-filtering)


---

## ✅ Features

- **CRUD Operations**: Create, Retrieve (all/single), Update, Delete student records.
- **Pagination**: Use `page` and `limit` query parameters.
- **Filtering**: By `firstName`, `email`, partial `lastNameSearch`, and age range (`minAge`, `maxAge`).
- **Record Count**: Get total number of students.
- **Robust Error Handling**: Consistent error responses in JSON format.
- **Modular Architecture**: Clear separation using Models, Controllers, Routes.
- **Environment Config**: Uses `.env` files for environment-specific values.
- **Request Logging**: Uses **morgan** for request logs.

---

## 🧰 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **pnpm**
- **dotenv**
- **morgan**


---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- [MongoDB](https://www.mongodb.com/)
- [pnpm](https://pnpm.io/):

### 📦 Installation

```bash
npm install -g pnpm
git clone [your-repo-url]
cd [your-repo-name]
pnpm install
```

### ⚙️ Environment Variables

Create a .env file
- PORT=3000
- MONGODB_URI=mongodb://127.0.0.1:27017/myDatabase


### 🏃 Running the Application

```bash
pnpm run dev
```
- Visit: http://localhost:3000

---

### 📡 API Endpoints

All endpoints are prefixed with api/students

| Method | Path     | Description                    |
| ------ | -------- | ------------------------------ |
| POST   | `/`      | Create a new student           |
| GET    | `/`      | Get paginated list of students |
| GET    | `/:id`   | Get student by ID              |
| PUT    | `/:id`   | Update student by ID           |
| DELETE | `/:id`   | Delete student by ID           |
| GET    | `/count` | Get total number of students   |

---

## 🔍 Pagination and Filtering

### Use query parameters on GET api/students:

- page, limit
- lastName

Example:
```aiignore
GET api/students?page=2&limit=5&lastName=ali
```





