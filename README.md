# 🚀 Productify

Productify is a full-stack product management application that allows users to create, browse, update, and manage products with secure authentication. The application is built using the PERN stack and provides a modern, responsive user experience.

## 🌐 Live Demo

https://productify-1-i9lq.onrender.com

---

## ✨ Features

- 🔐 Secure user authentication with Clerk
- 👤 User account synchronization
- 📦 Create new products
- 📋 View all products
- 🔍 View detailed product information
- ✏️ Edit existing products
- 🗑️ Delete products
- 💬 Add comments to products
- 📱 Responsive user interface
- ⚡ Fast and modern React application

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Axios
- React Router
- TanStack React Query
- Tailwind CSS
- DaisyUI
- Clerk Authentication

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Drizzle ORM
- Clerk Express SDK

---

## 📁 Project Structure

```text
Productify/
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Lozabelay/productify.git
```

```bash
cd productify
```

### Install dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
DATABASE_URL=your_database_url
PORT=3000
NODE_ENV=development

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000/api
VITE_CLERK_PUBLISHABLE_KEY=********_publishable_key
```

---

## ▶️ Running the Application

### Development

Start the backend:

```bash
npm start --prefix backend
```

Start the frontend:

```bash
npm run dev --prefix frontend
```

---

## 🚀 Deployment

The application is deployed on Render.

Live Application:

https://productify-1-i9lq.onrender.com

---

## 📚 API Endpoints

### Users

```
POST /api/users/sync
```

### Products

```
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Comments

```
POST   /api/comments/:productId
DELETE /api/comments/:commentId
```

---

## 👨‍💻 Author

**Loza Belay**

GitHub:
https://github.com/Lozabelay

---

