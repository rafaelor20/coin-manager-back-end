import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getHistoric } from '@/controllers/transaction-controller';

const transactionRouter = Router();

transactionRouter.all('/*', authenticateToken).get('/historic', getHistoric);

export { transactionRouter };
