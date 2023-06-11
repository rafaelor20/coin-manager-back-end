import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import transactionService from '@/services/transaction-service';

export async function getHistoric(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    const historic = await transactionService.getHistoric(userId);
    return res.status(httpStatus.OK).send(historic);
  } catch (error) {
    next(error);
  }
}
