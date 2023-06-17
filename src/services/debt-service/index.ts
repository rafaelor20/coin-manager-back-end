import { UserDebt } from '@prisma/client';
import debtRepository from '@/repositories/debt-repository';

async function getDebts(userId: number) {
  return debtRepository.getDebts(userId);
}

export type CreateDebtParams = Pick<UserDebt, 'user_id' | 'creditor' | 'amount' | 'payDate'>;

const debtService = {
  getDebts,
};

export default debtService;
