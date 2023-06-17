import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getCredits } from '@/controllers/credit-controller';

const creditRouter = Router();

creditRouter.all('/*', authenticateToken).get('/', getCredits);

export { creditRouter };
