import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import creditService from '@/services/credit-service';

export async function getCredits(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    const credits = await creditService.getCredits(userId);
    return res.status(httpStatus.OK).send(credits);
  } catch (error) {
    next(error);
  }
}
