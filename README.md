# Full-Stack Role-Based Authentication System

A modern full-stack web application featuring secure authentication with role-based access control (User and Admin roles).

## 🚀 Live Demo

- **Frontend**: https://full-stack-app-inbotiq.vercel.app/
- **Backend API**: https://full-stack-app-inbotiq.onrender.com

## ✨ Features

- ✅ User signup with role selection (User/Admin)
- ✅ Secure login with JWT authentication
- ✅ Password hashing using bcrypt
- ✅ Protected dashboard routes
- ✅ Role-specific dashboard displays
- ✅ Form validation with Zod
- ✅ Responsive UI with Tailwind CSS & Shadcn/ui
- ✅ TypeScript for type safety
- ✅ PostgreSQL database with Prisma ORM

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **Language**: TypeScript

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **HTTP Client**: Axios

## 📁 Project Structure

```
.
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts
│   │   ├── controllers/
│   │   │   └── authController.ts
│   │   ├── middleware/
│   │   │   └── auth.ts
│   │   ├── routes/
│   │   │   └── authRoutes.ts
│   │   ├── utils/
│   │   │   └── jwt.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── dashboard/
    │   │   │   └── page.tsx
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   ├── signup/
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   └── globals.css
    │   ├── components/
    │   │   └── ui/
    │   │       ├── button.tsx
    │   │       ├── card.tsx
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       └── select.tsx
    │   ├── contexts/
    │   │   └── AuthContext.tsx
    │   └── lib/
    │       ├── api.ts
    │       └── utils.ts
    ├── .env.example
    ├── package.json
    ├── tailwind.config.ts
    └── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Supabase/Neon free tier recommended)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your database credentials:
```env
DATABASE_URL="postgresql://username:password@host:5432/database?schema=public"
JWT_SECRET="your-super-secret-jwt-key"
PORT=5000
FRONTEND_URL="http://localhost:3000"
```

5. Generate Prisma client and run migrations:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

6. Start the development server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update the `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

5. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🌐 Deployment

### Backend Deployment (Render)

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install && npx prisma generate && npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add all variables from `.env.example`
5. Deploy!

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Import project on Vercel
3. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Environment Variables**: Add `NEXT_PUBLIC_API_URL` with your backend URL
4. Deploy!

## 🔐 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/signup` | Create new user account | No |
| POST | `/auth/login` | Login existing user | No |
| GET | `/auth/me` | Get current user info | Yes |

## 📝 Environment Variables

### Backend (.env)
```env
DATABASE_URL=           # PostgreSQL connection string
JWT_SECRET=             # Secret key for JWT tokens
PORT=                   # Server port (default: 5000)
NODE_ENV=               # development/production
FRONTEND_URL=           # Frontend URL for CORS
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=    # Backend API URL
```

## 🧪 Testing the Application

1. Visit the home page at `http://localhost:3000`
2. Click "Get Started" to create a new account
3. Select a role (User or Admin)
4. Fill in the signup form and submit
5. You'll be automatically logged in and redirected to the dashboard
6. The dashboard displays: "Welcome, [Name] (Role)"
7. Test logout functionality
8. Try logging in with the created credentials

## 🎯 Key Features Implemented

### Authentication Flow
- Secure signup with role selection
- Login with JWT token generation
- Token-based authentication for protected routes
- Logout functionality

### Security
- Passwords hashed with bcrypt (10 rounds)
- JWT tokens with 7-day expiration
- Protected API routes with authentication middleware
- CORS configuration for frontend access

### User Experience
- Form validation on both frontend and backend
- Error handling and user feedback
- Loading states during API calls
- Responsive design for all screen sizes
- Clean, modern UI with Shadcn/ui components


## 👤 Author

Namokar Jain
- GitHub: https://github.com/Namokar05/full-stack-app-Inbotiq-
- Email: namokar.jain2004@gmail.com

## Acknowledgments

- Assignment provided by Inbotiq
- UI components from [Shadcn/ui](https://ui.shadcn.com)
- Built with [Next.js](https://nextjs.org) and [Express](https://expressjs.com)