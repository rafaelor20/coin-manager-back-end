import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import transactionService from '@/services/transaction-service';

export async function getHistoric(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  try {
    console.log(userId);
    const historic = await transactionService.getHistoric(userId);
    return res.status(httpStatus.OK).send(historic);
  } catch (error) {
    next(error);
  }
}

export async function storeTransaction(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  try {  
    const user_id = userId;
    const { description, amount, category } = req.body;
    console.log({user_id, description, amount, category})
    const transaction = await transactionService.storeTransaction(userId, { user_id, description, amount, category });
    return res.status(httpStatus.CREATED).send(transaction);
  } catch (error) {
    next(error);
  }
}
