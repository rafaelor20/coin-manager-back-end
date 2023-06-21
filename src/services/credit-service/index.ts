import { UserCredit } from '@prisma/client';
import { unauthorizedError } from '@/errors';
import creditRepository from '@/repositories/credit-repository';

async function checkUserId(userId: number, creditId: number) {
  const credit = await creditRepository.getCreditById(creditId);
  if (credit.user_id !== userId) {
    throw unauthorizedError();
  }
}

async function getCredits(userId: number) {
  return creditRepository.getCredits(userId);
}

async function storeCredit(userId: number, { user_id, debtor, amount, payDate }: CreateCreditParams) {
  return creditRepository.storeCredit({ user_id, debtor, amount, payDate });
}

async function getCreditById(userId: number, creditId: number) {
  await checkUserId(userId, creditId);
  return creditRepository.getCreditById(creditId);
}

async function removeCredit(userId: number, creditId: number) {
  await checkUserId(userId, creditId);
  return creditRepository.removeCreditById(creditId);
}

export type CreateCreditParams = Pick<UserCredit, 'user_id' | 'debtor' | 'amount' | 'payDate'>;

const creditService = {
  getCredits,
  storeCredit,
  getCreditById,
  removeCredit,
};

export default creditService;
