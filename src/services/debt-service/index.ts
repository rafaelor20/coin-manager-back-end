import { UserDebt } from '@prisma/client';
import debtRepository from '@/repositories/debt-repository';

async function getDebts(userId: number) {
  return debtRepository.getDebts(userId);
}

async function storeDebt(userId: number, { user_id, creditor, amount, payDate }: CreateDebtParams) {
  return debtRepository.storeDebt({ user_id, creditor, amount, payDate });
}

export type CreateDebtParams = Pick<UserDebt, 'user_id' | 'creditor' | 'amount' | 'payDate'>;

const debtService = {
  getDebts,
  storeDebt,
};

export default debtService;
