import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import debtService from '@/services/debt-service';

export async function getDebts(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    const debts = await debtService.getDebts(userId);
    return res.status(httpStatus.OK).send(debts);
  } catch (error) {
    next(error);
  }
}
