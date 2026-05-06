import { Request, Response } from 'express';
import { z } from 'zod';
import { enhancePrompt, generateVideoJob } from '../services/ai.service.js';

const requestSchema = z.object({
  prompt: z.string().min(8),
  style: z.string(),
  durationSec: z.number().int().min(5).max(60),
  resolution: z.enum(['720p', '1080p', '4K']),
  negativePrompt: z.string().optional()
});

export async function createGeneration(req: Request, res: Response) {
  const parsed = requestSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const enhancedPrompt = await enhancePrompt(parsed.data.prompt);
  const job = await generateVideoJob({ ...parsed.data, prompt: enhancedPrompt });

  return res.status(202).json({
    message: 'Generation started',
    enhancedPrompt,
    job
  });
}
