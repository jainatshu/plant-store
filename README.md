# 🌱 Urvann Plant Store - MERN Stack Application

A full-stack **plant e-commerce application** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and styled with **Tailwind CSS**.

---

## 🌟 Features

### Frontend
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices  
- 🪴 **Plant Catalog**: Grid view of all plants with images, prices, and categories  
- 🔍 **Search & Filter**: Search plants by name or category, filter by specific categories  
- 🛠️ **Admin Panel**: Protected admin interface for managing plants  
- 🔐 **User Authentication**: JWT-based login system for admin users  

### Backend
- 🌐 **RESTful API**: Clean API design with proper HTTP status codes  
- 🔑 **Authentication**: JWT-based authentication system  
- 🗄️ **Database**: MongoDB with Mongoose ODM  
- ✅ **Input Validation**: Server-side validation for all inputs  
- ⚠️ **Error Handling**: Comprehensive error handling throughout the application  

---

## 🛠️ Tech Stack
**Frontend**: React.js, React Router, Tailwind CSS, Axios  
**Backend**: Node.js, Express.js, MongoDB, Mongoose  
**Authentication**: JSON Web Tokens (JWT), bcryptjs  
**Deployment**: Ready for Heroku, Netlify, or Vercel  

---

## 📦 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)  
- [MongoDB](https://www.mongodb.com/) (local or Atlas account)  
- npm or yarn  


## 🔐 Default Admin Credentials
- Username: admin
- Password: admin123

---

## 🎯 API Endpoints

### 🌐 Public Endpoints
- `GET /api/plants` → Get all plants (with optional search and filter)  
- `GET /api/plants/:id` → Get a specific plant  
- `GET /api/plants/categories/all` → Get all categories  
- `POST /api/auth/login` → Admin login  
- `POST /api/auth/register` → Admin registration  

### 🔐 Protected Endpoints (Admin Only)
- `POST /api/plants` → Create a new plant  
- `PUT /api/plants/:id` → Update a plant  
- `DELETE /api/plants/:id` → Delete a plant

---


## 🆘 Troubleshooting

### Common Issues
- ❌ **Connection refused to MongoDB** → Ensure MongoDB is running or URI is correct  
- ❌ **CORS errors** → Verify frontend URL is allowed in backend CORS config  
- ❌ **Authentication errors** → Check JWT secret & token headers  
- ❌ **Build errors** → Ensure dependencies are installed and Node.js version is compatible  

---



   
