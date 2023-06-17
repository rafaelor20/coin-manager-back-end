import { UserCredit } from '@prisma/client';
import creditRepository from '@/repositories/credit-repository';

async function getCredits(userId: number) {
  return creditRepository.getCredits(userId);
}

async function storeCredit(userId: number, { user_id, debtor, amount, payDate }: CreateCreditParams) {
  return creditRepository.storeCredit({ user_id, debtor, amount, payDate });
}

export type CreateCreditParams = Pick<UserCredit, 'user_id' | 'debtor' | 'amount' | 'payDate'>;

const creditService = {
  getCredits,
  storeCredit,
};

export default creditService;
