import { Router } from 'express';
import { createGeneration } from '../controllers/generation.controller.js';

const router = Router();
router.post('/', createGeneration);

export default router;
