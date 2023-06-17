import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getDebts, storeDebt } from '@/controllers/debt-controller';

const debtRouter = Router();

debtRouter.all('/*', authenticateToken).get('/', getDebts).post('/store', storeDebt);

export { debtRouter };
