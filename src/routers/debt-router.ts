import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getDebts } from '@/controllers/debt-controller';

const debtRouter = Router();

debtRouter.all('/*', authenticateToken).get('/', getDebts);

export { debtRouter };
