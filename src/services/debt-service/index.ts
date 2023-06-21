import { UserDebt } from '@prisma/client';
import { unauthorizedError } from '@/errors';
import debtRepository from '@/repositories/debt-repository';

async function checkUserId(userId: number, debtId: number) {
  const debt = await debtRepository.getDebtById(debtId);
  if (debt.user_id !== userId) {
    throw unauthorizedError();
  }
}

async function getDebts(userId: number) {
  return debtRepository.getDebts(userId);
}

async function storeDebt(userId: number, { user_id, creditor, amount, payDate }: CreateDebtParams) {
  return debtRepository.storeDebt({ user_id, creditor, amount, payDate });
}

async function getDebtById(userId: number, debtId: number) {
  await checkUserId(userId, debtId);
  return debtRepository.getDebtById(debtId);
}

async function removeDebt(userId: number, debtId: number) {
  await checkUserId(userId, debtId);
  return debtRepository.removeDebtById(debtId);
}

export type CreateDebtParams = Pick<UserDebt, 'user_id' | 'creditor' | 'amount' | 'payDate'>;

const debtService = {
  getDebts,
  storeDebt,
  removeDebt,
  getDebtById,
};

export default debtService;
