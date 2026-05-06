import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import generationRoutes from './routes/generation.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'visionflow-api' }));
app.use('/api/generations', generationRoutes);

app.listen(Number(env.PORT), () => {
  console.log(`VisionFlow API listening on ${env.PORT}`);
});
