import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function getCredits(userId: number) {
  return prisma.userCredit.findMany({
    where: { user_id: userId },
  });
}

const creditRepository = {
  getCredits,
};

export default creditRepository;
