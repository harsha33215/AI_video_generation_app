# VisionFlow AI Architecture

## Frontend (Next.js)
- Landing generator interface with style/duration/resolution selectors
- Dashboard for history, credits, analytics
- Admin panel for operations and billing insights
- Framer Motion transitions + Tailwind dark premium UI

## Backend (Express)
- `/api/generations` queue endpoint with prompt enhancement + provider orchestration
- Validation with Zod
- Extend with auth routes (`/api/auth`), billing (`/api/stripe/webhook`), history (`/api/videos`)

## AI Integration Flow
1. User submits prompt
2. OpenAI improves prompt and applies consistency directives
3. Provider router chooses Runway/Pika/Luma by style and duration
4. Job state is polled and persisted
5. Video URL + subtitles + thumbnail returned to frontend

## Production Notes
- Use Redis/BullMQ for async generation workers
- Use signed URLs for secure playback/download
- Add webhook signature validation and idempotency keys
- Add audit logs and usage metering per token/second generated
