import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function getCredits(userId: number) {
  return prisma.userCredit.findMany({
    where: { user_id: userId },
  });
}

async function storeCredit(data: Prisma.UserCreditUncheckedCreateInput) {
  return prisma.userCredit.create({ data });
}

const creditRepository = {
  getCredits,
  storeCredit,
};

export default creditRepository;
