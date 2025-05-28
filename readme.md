# Chat App 💬

![Chat App Screenshot](./chatting.png)

*A real-time chat conversation between two users.*

A **full-stack real-time chat application** built with **React 19**, **Vite**, **Express 5**, and **PostgreSQL**, featuring instant messaging, authentication, and a sleek, responsive UI.

## 🔍 Description

This project enables users to chat in real time, manage conversations, and experience a modern, responsive interface. The app is split into two parts:

- **Client**: Built with **React 19**, **Vite**, **TailwindCSS**, and **DaisyUI**
- **Server**: Built with **Express 5** (TypeScript), **Prisma ORM**, and **Socket.IO**

## 📁 Project Structure

```
.
├── client/   # React + Vite frontend
└── server/   # Express backend (TypeScript, Prisma, Socket.IO)
```

## 🚀 Features

- **JWT Authentication** (secure login)
- **Real-time chat** with Socket.IO
- **Conversations & Messages** (with participants, timestamps)
- **Responsive UI** (TailwindCSS + DaisyUI)
- **PostgreSQL** database (via Prisma)
- **REST API** for authentication and messaging
- **State management** with Zustand
- **Hot reload**: Vite (client), Nodemon/TSX (server)

## 🛠️ Tech Stack

### Frontend

- **React 19**
- **Vite 6**
- **TypeScript**
- **TailwindCSS 4**
- **DaisyUI**
- **Zustand** (state management)
- **React Router 7**
- **Socket.IO Client**
- **Lucide React** (icons)
- **React Hot Toast** (notifications)

### Backend

- **Express 5** (TypeScript)
- **Prisma ORM** (PostgreSQL)
- **Socket.IO** (real-time)
- **JWT** (jsonwebtoken)
- **BcryptJS** (password hashing)
- **Dotenv** (env management)
- **Nodemon/TSX** (dev server)

## ⚙️ Installation

### 1. Clone the Repo

```bash
git clone https://github.com/andrew-dev-p/pern-chat-app
cd pern-chat-app
```

### 2. Setup Client

```bash
cd client
npm install
```

### 3. Setup Server

```bash
cd ../server
npm install
```

## 🧪 Running Locally

### Client

```bash
cd client
npm run dev
```

### Server

```bash
cd server
npm run dev
```

## 🔐 Environment Variables

### 📦 Client (`client/.env.local`)

```env
VITE_API_URL=http://localhost:3000
```

### 🔧 Server (`server/.env`)

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
PORT=3000
```