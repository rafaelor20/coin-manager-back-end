import Joi from 'joi';
import { CreateTransactionParams } from '@/services/transaction-service';

export const createTransactionSchema = Joi.object<CreateTransactionParams>({
  user_id: Joi.number().required(),
  description: Joi.string().min(2).required(),
  amount: Joi.number().required(),
  category: Joi.string().min(2),
});
