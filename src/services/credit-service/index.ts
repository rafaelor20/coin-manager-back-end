import { UserCredit } from '@prisma/client';
import creditRepository from '@/repositories/credit-repository';

async function getCredits(userId: number) {
  return creditRepository.getCredits(userId);
}

export type CreateCreditParams = Pick<UserCredit, 'user_id' | 'debtor' | 'amount' | 'payDate'>;

const creditService = {
  getCredits,
};

export default creditService;
