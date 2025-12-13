# 🎨 Meme Generator

A modern, full-stack meme generator with premium glassmorphism UI and JWT authentication.

## ✨ Features

- 🔐 JWT Authentication (Register/Login)
- 🎨 Premium Glassmorphism Design
- 🖼️ Meme Creation & Management
- 📱 Responsive Design
- 🚀 Modern Animations
- 💾 MongoDB Database

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Premium CSS with Glassmorphism
- Lucide React Icons

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs Password Hashing

## 🚀 Quick Start

### Prerequisites
- Node.js installed
- MongoDB running

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd meme-generator
```

2. **Backend Setup**
```bash
cd Backend
npm install
npm start
```

3. **Frontend Setup**
```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

### Access URLs
- Frontend: http://localhost:5173
- Backend API: http://localhost:4001

## 📡 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login

### Memes
- `GET /api/memes` - Get all memes
- `POST /api/memes` - Create meme (protected)
- `DELETE /api/memes/:id` - Delete meme (protected)

## 🔐 Environment Variables

Create `.env` file in Backend directory:
```
MONGO_URL=mongodb://localhost:27017/memedb
JWT_SECRET=your_jwt_secret_key
PORT=4001
```

## 🎨 Design Features

- Glassmorphism effects with backdrop blur
- Smooth animations and transitions
- Premium gradient backgrounds
- Interactive hover effects
- Modern typography system

## 📱 Responsive Design

Fully responsive across all devices with mobile-first approach.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📄 License

MIT License - feel free to use for personal and commercial projects.