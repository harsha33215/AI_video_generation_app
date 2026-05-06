# VisionFlow AI

Production-ready AI SaaS web app for cinematic text-to-video generation.

## Monorepo Structure

- `frontend/` – Next.js 14 App Router app (UI + auth client + dashboard/admin views)
- `backend/` – Express API (generation orchestration, billing hooks, usage analytics)

## Quick Start

### 1) Frontend
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

### 2) Backend
```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## Deployment

- Frontend: Vercel
- Backend: Railway or Render
- Database: PostgreSQL
- Storage: S3 or Cloudinary

See env files for required variables.
