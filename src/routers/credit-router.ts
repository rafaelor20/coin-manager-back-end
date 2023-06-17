import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getCredits, storeCredit } from '@/controllers/credit-controller';

const creditRouter = Router();

creditRouter.all('/*', authenticateToken).get('/', getCredits).post('/store', storeCredit);

export { creditRouter };
